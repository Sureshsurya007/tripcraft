// Intelligent Search & Place Analysis Engine
import { SEARCHABLE_PLACES } from '../data/searchablePlaces';
import { CITY_MALLS_DATA, getMallsForLocality } from '../data/mallsAndCinemas';

/**
 * Searches the curated places database or analyzes any custom place query
 */
export function searchAndAnalyzePlace(query) {
  if (!query || query.trim().length === 0) return null;

  const q = query.trim().toLowerCase();

  // 1. Prioritized lookup in curated database
  // A. Exact match on ID or Name
  let matched = SEARCHABLE_PLACES.find(p => 
    p.id.toLowerCase() === q || 
    p.name.toLowerCase() === q
  );

  // B. Starts with Name or ID
  if (!matched) {
    matched = SEARCHABLE_PLACES.find(p => 
      p.name.toLowerCase().startsWith(q) || 
      p.id.toLowerCase().startsWith(q)
    );
  }

  // C. Substring in Name
  if (!matched) {
    matched = SEARCHABLE_PLACES.find(p => 
      p.name.toLowerCase().includes(q)
    );
  }

  // D. Substring in nearby places, region, or tagline
  if (!matched) {
    matched = SEARCHABLE_PLACES.find(p => 
      p.nearbyPlacesInside?.some(sub => sub.name.toLowerCase().includes(q)) ||
      p.tagline.toLowerCase().includes(q) ||
      p.region.toLowerCase().includes(q)
    );
  }

  if (matched) {
    const isBlrPlace = isBangaloreLocation(matched);

    const enriched = {
      ...matched,
      isCustomGenerated: false,
      score: 1.0,
      // Strictly null out mallAndCinema for non-Bangalore destinations!
      mallAndCinema: isBlrPlace ? matched.mallAndCinema || null : null
    };

    // ONLY attach Bangalore city malls if the place is actually in Bangalore!
    if (isBlrPlace && !enriched.mallAndCinema) {
      const mall = findMatchingMall(matched.name + ' ' + matched.region + ' ' + (matched.tagline || ''));
      if (mall) {
        enriched.mallAndCinema = {
          mallName: mall.name,
          theatreName: mall.theatre.name,
          bookMyShowUrl: mall.theatre.bookMyShowUrl,
          walkingRoute: `Short walk / transit to ${mall.name}. (${mall.metroConnectivity})`,
          trendingMovies: mall.theatre.trendingMovies
        };
      }
    }

    return enriched;
  }

  // 2. Synthesize dynamic analysis for any arbitrary locality or getaway
  const dynamic = generateDynamicAnalysis(query.trim());
  
  if (isBangaloreLocation(dynamic)) {
    const mall = findMatchingMall(query);
    if (mall) {
      dynamic.mallAndCinema = {
        mallName: mall.name,
        theatreName: mall.theatre.name,
        bookMyShowUrl: mall.theatre.bookMyShowUrl,
        walkingRoute: `Located nearby in ${mall.locality}. Connected via ${mall.metroConnectivity}`,
        trendingMovies: mall.theatre.trendingMovies
      };
    }
  } else {
    dynamic.mallAndCinema = null;
  }

  return dynamic;
}

export function isBangaloreLocation(place) {
  if (!place) return false;
  const str = (
    (place.name || '') + ' ' + 
    (place.category || '') + ' ' + 
    (place.region || '') + ' ' + 
    (place.state || '')
  ).toLowerCase();
  
  // Explicitly check for non-Bangalore destinations first!
  const nonBlr = [
    'varkala', 'munnar', 'alleppey', 'kochi', 'kerala', 
    'gokarna', 'coorg', 'hampi', 'ooty', 'pondicherry', 'puducherry', 
    'chennai', 'madurai', 'kodaikanal', 'dandeli', 'goa', 'wayanad', 'chikmagalur',
    'mangalore', 'udupi', 'mysore', 'mysuru', 'murudeshwar', 'badami', 'trivandrum', 'kollam'
  ];
  if (nonBlr.some(k => str.includes(k))) {
    return false;
  }

  return (
    str.includes('bengaluru') || 
    str.includes('bangalore') || 
    str.includes('locality') ||
    str.includes('rajajinagar') ||
    str.includes('indiranagar') ||
    str.includes('koramangala') ||
    str.includes('malleshwaram') ||
    str.includes('jayanagar') ||
    str.includes('whitefield')
  );
}

function findMatchingMall(text) {
  if (!text) return null;
  const t = text.toLowerCase();
  return CITY_MALLS_DATA.find(m => 
    t.includes(m.locality.toLowerCase()) || 
    m.locality.toLowerCase().includes(t) ||
    t.includes(m.name.toLowerCase()) ||
    m.nearbyComboSpots.some(s => t.includes(s.name.toLowerCase()) || s.name.toLowerCase().includes(t))
  );
}

/**
 * Generates an intelligent contextual analysis for uncatalogued places
 */
function generateDynamicAnalysis(placeName) {
  const pLower = placeName.toLowerCase();
  
  // Detect if it's likely a Bangalore locality or outside
  const isBlrLocality = (
    pLower.includes('layout') || 
    pLower.includes('nagar') || 
    pLower.includes('halli') || 
    pLower.includes('puram') || 
    pLower.includes('road') || 
    pLower.includes('cross') || 
    pLower.includes('circle') ||
    ['hsr', 'btm', 'whitefield', 'hebbal', 'yelahanka', 'bellandur', 'sarjapur', 'electronic city', 'peenya', 'yeshwantpur', 'rajajinagar', 'frazer town', 'sadashivanagar'].some(k => pLower.includes(k))
  ) && !['varkala', 'munnar', 'alleppey', 'gokarna', 'coorg', 'hampi', 'ooty', 'pondicherry'].some(k => pLower.includes(k));

  const isCoastalOrBeach = ['varkala', 'beach', 'sea', 'coast', 'goa', 'udupi', 'mangalore', 'karwar', 'marari', 'kovalam', 'kannur'].some(k => pLower.includes(k));
  const isHillOrForest = ['munnar', 'coorg', 'ooty', 'hill', 'peak', 'falls', 'valley', 'estate', 'forest', 'kodai', 'wayanad', 'chikmagalur', 'sakleshpur', 'coonoor', 'yercaud', 'valparai'].some(k => pLower.includes(k));

  if (isBlrLocality) {
    return {
      id: `custom-blr-${placeName.toLowerCase().replace(/\s+/g, '-')}`,
      name: placeName,
      category: 'Bangalore Locality & Neighborhood',
      region: 'Bengaluru Urban',
      state: 'Karnataka',
      tagline: `Local Urban Trail, Neighborhood Cafes & Heritage Corners in ${placeName}`,
      vibe: `Vibrant urban atmosphere, authentic neighborhood tiffin spots, modern bistros, and convenient local transit.`,
      metroConnectivity: `Connect via Namma Metro Purple / Green Line feeder buses, Rapido bike taxis, or BMTC city Volvo buses.`,
      recommendedStayTime: 'Half Day to Full Day (3 - 6 hours)',
      bestFor: ['girlfriend', 'friends_gang', 'solo'],
      nearbyPlacesInside: [
        { name: `${placeName} Main Avenue & Cafe Promenade`, type: 'Local Promenade', duration: '2 hrs', highlight: 'Artisanal coffee roasters, bakery treats, and boutique street shopping' },
        { name: `${placeName} Neighborhood Park & Green Canopy`, type: 'Green Sanctuary', duration: '1 hr', highlight: 'Shaded walking track away from main thoroughfare traffic' },
        { name: `Signature Heritage Eateries & Food Hub`, type: 'Local Food Trail', duration: '1.5 hrs', highlight: 'Authentic local breakfast dosas, evening chaats, and hot filter coffee' }
      ],
      transitFromCityCenter: `Board nearest Namma Metro station towards ${placeName} -> Take a quick Rapido bike taxi (₹25 - ₹45) or shared auto from exit gate.`,
      budgetStays: [
        { name: `Boutique Backpacker & Transit Pods (${placeName})`, price: '₹600 - ₹850/bed', type: 'Urban Hostel / Pod' },
        { name: `Verified Budget Homestay (${placeName})`, price: '₹1,300 - ₹1,700/room', type: 'Local Homestay' }
      ],
      famousFood: [`Fresh Ghee Roast Dosa with Chutney`, `Hot Filter Kaapi in Brass Tumbler`, `Evening Street Food Chaats & Badam Milk`],
      isCustomGenerated: true
    };
  }

  // If coastal / beach getaway (like Varkala, Gokarna, Goa, etc.)
  if (isCoastalOrBeach) {
    return {
      id: `custom-coast-${placeName.toLowerCase().replace(/\s+/g, '-')}`,
      name: placeName,
      category: 'Coastal Beach & Cliff Haven',
      region: 'Coastal Peninsula',
      state: pLower.includes('varkala') ? 'Kerala' : 'South India Coast',
      tagline: `Pristine Cliffs, Sunset Cafes & Ocean Waves in ${placeName}`,
      vibe: `Laidback sea breeze, red laterite cliffs, candlelit terrace cafes, surf waves, and acoustic sunset music.`,
      metroConnectivity: `Accessible via Coastal Railway (Varkala Sivagiri Station) and direct state transport buses. In town, walk or auto (₹80-₹120).`,
      recommendedStayTime: '2 - 3 Days',
      bestFor: ['girlfriend', 'guy_squad', 'friends_gang', 'solo'],
      nearbyPlacesInside: [
        { name: `${placeName} North Cliff Promontory & Sunset Walk`, type: 'Clifftop Promenade', duration: '3 hrs', highlight: '1.5 km of ocean cafes, Tibetan silver craft stalls, and panoramic sunset over waves' },
        { name: `Papanasam Holy Beach & Natural Mineral Springs`, type: 'Beach & Springs', duration: '2.5 hrs', highlight: 'Cascading natural spring waters from cliff face and holy cleansing waters' },
        { name: `Black Sand Beach & Surfing Cove`, type: 'Surf & Sun', duration: '2 hrs', highlight: 'Quiet black sand shores, surf lessons, and coconut palm groves' }
      ],
      transitFromCityCenter: `Direct train from Bangalore / Kochi / Trivandrum to Varkala Sivagiri (VAK). Auto to North Cliff is ₹100. Entire cliff is pedestrian.`,
      budgetStays: [
        { name: `The Lost Hostels Varkala`, price: '₹550/bed', type: 'Cliff Backpacker Hostel' },
        { name: `Green Lawn Homestay`, price: '₹1,200/room', type: 'Garden Cottage' }
      ],
      famousFood: [`Darjeeling Cafe Wood-Fired Pizza`, `Fresh Pineapple Ginger Lemon Cooler`, `Traditional Kerala Fish Curry with Tapioca`],
      isCustomGenerated: true
    };
  }

  // General Hill or Out-of-State Getaway
  return {
    id: `custom-dest-${placeName.toLowerCase().replace(/\s+/g, '-')}`,
    name: placeName,
    category: isHillOrForest ? 'Hill Station & Nature Retreat' : 'Regional Destination & Getaway',
    region: 'South India / Regional Hub',
    state: 'Karnataka & Surrounds',
    tagline: `Scenic Panoramas, Local Flavours & Distinct Heritage in ${placeName}`,
    vibe: `Scenic, refreshing change of pace, authentic regional sights, and memorable local dining.`,
    metroConnectivity: `Direct KSRTC / Private Sleeper Buses, Inter-city Express Trains, or Scenic Highway Drive.`,
    recommendedStayTime: '2 - 4 Days',
    bestFor: ['girlfriend', 'friends_gang', 'solo'],
    nearbyPlacesInside: [
      { name: `${placeName} Historic / Panoramic Landmark`, type: 'Signature Sight', duration: '2.5 hrs', highlight: 'Most renowned viewpoint or historic monument of the region' },
      { name: `Nature Walk & Valley Promenade`, type: 'Scenic Exploration', duration: '3 hrs', highlight: 'Lush greenery, fresh breeze, and serene walking tracks' },
      { name: `Old Town Bazaar & Regional Food Stalls`, type: 'Culture & Food', duration: '2 hrs', highlight: 'Traditional handicraft shops, local spice stalls, and regional specialties' }
    ],
    transitFromCityCenter: `Take direct KSRTC Airavat / Express train to the nearest railway or bus junction, followed by local shared jeep or auto to your stay.`,
    budgetStays: [
      { name: `Scenic Backpacker Hostel (${placeName})`, price: '₹650 - ₹850/bed', type: 'Traveler Hostel' },
      { name: `Locally Run Heritage Homestay`, price: '₹1,300 - ₹1,800/room', type: 'Verified Homestay' }
    ],
    famousFood: [`Authentic Regional Thali on Plantain Leaf`, `Local Spiced Roast with Flaky Flatbreads`, `Fresh Regional Herbal Tea or Coffee`],
    isCustomGenerated: true
  };
}

/**
 * Filter autocomplete suggestions based on user keystrokes
 */
export function getPlaceSuggestions(query, limit = 6) {
  if (!query || query.trim().length === 0) {
    return SEARCHABLE_PLACES.slice(0, limit);
  }

  const q = query.trim().toLowerCase();
  const matches = SEARCHABLE_PLACES.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.region.toLowerCase().includes(q) ||
    p.tagline.toLowerCase().includes(q) ||
    p.nearbyPlacesInside.some(sub => sub.name.toLowerCase().includes(q))
  );

  return matches.slice(0, limit);
}
