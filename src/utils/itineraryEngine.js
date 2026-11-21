// Smart Algorithmic Itinerary & Multi-Modal Transit Engine
import { CURATED_PLACES, PRESET_ITINERARIES, DESTINATIONS, COMPANION_TYPES } from '../data/tripsData';
import { searchAndAnalyzePlace, isBangaloreLocation } from './placeAnalyzer';
import { CITY_MALLS_DATA } from '../data/mallsAndCinemas';

export const DESTINATION_DETAILS = {
  bangalore: {
    name: 'Bengaluru (Bangalore)',
    tag: 'Garden City & Cafe Haven',
    transitHub: 'Kempegowda (Majestic) Interchange Metro Station',
    transitTips: [
      'Use Namma Metro smart card or QR tickets on WhatsApp for 5% discount.',
      'Purple line connects East-West (Whitefield <-> Indiranagar <-> MG Road <-> Majestic <-> Mysore Rd).',
      'Green line connects North-South (Madavara/Yeshwantpur <-> Malleshwaram <-> Majestic <-> Lalbagh <-> Silk Institute).',
      'For quick hops < 4 km, Rapido bike taxi is 3x faster than cabs during 5-8 PM peak traffic.',
      'BMTC AC Volvo buses (V-series) offer smooth airport transfers (KIA-9, KIA-4, etc.) at 1/3rd cab cost.'
    ],
    stayCategories: [
      { area: 'Indiranagar & Domlur', vibe: 'Hip, cafe-lined, craft breweries, 2 metro stations', budgetHostel: 'Locul Central (₹650)', budgetHotel: 'Treebo Trend (₹1,500)' },
      { area: 'Koramangala 4th/5th Block', vibe: 'Youth hub, startups, dessert spots, late night food', budgetHostel: 'Cuckoo Hostel (₹600)', budgetHotel: 'FabHotels Koramangala (₹1,300)' },
      { area: 'Malleshwaram & Rajajinagar', vibe: 'Traditional, heritage dosas, temples, green tree avenues', budgetHostel: 'Hotel Janatha (₹900)', budgetHotel: 'Grand Bee Hotel (₹1,600)' },
      { area: 'Central (MG Road / Richmond)', vibe: 'Colonial parks, museums, walking street, quiet book cafes', budgetHostel: 'goSTOPS Cantonment (₹550)', budgetHotel: 'Hotel Maurya (₹1,200)' }
    ]
  },
  varkala: {
    name: 'Varkala Beach & Cliffs',
    tag: 'Red Laterite Sea Cliffs, Sunset Bohemian Cafes & Surf Waves',
    transitHub: 'Varkala Sivagiri Railway Station (VAK) / Trivandrum Airport (TRV)',
    transitTips: [
      'Take auto from Varkala Sivagiri Station to North Cliff Helipad (₹100 fixed rate).',
      'The entire North Cliff is pedestrian-only with panoramic sea views — zero cars or honking!',
      'Rent a scooter in Varkala town for ₹350/day to visit Jatayu Earth Center (28 km) or Kappil Lake (7 km).',
      'Trains running between Varkala and Alleppey or Kochi cost only ₹45–₹140.'
    ],
    stayCategories: [
      { area: 'North Cliff Walkway', vibe: 'Bohemian cliffside, sea breeze, yoga, sunset terrace cafes', budgetHostel: 'The Lost Hostels Varkala (₹550)', budgetHotel: 'Green Lawn Homestay (₹1,200)' },
      { area: 'South Cliff & Papanasam', vibe: 'Quiet, spiritual springs, uncrowded sands', budgetHostel: 'Soul & Surf Varkala (₹950)', budgetHotel: 'Cliffe the Camp (₹1,400)' }
    ]
  },
  kerala: {
    name: 'Kerala Grand Circuit',
    tag: 'Backwaters, Tea Terraces & Cliff Sunsets',
    transitHub: 'Ernakulam Junction (ERS) / Kochi International Airport (COK)',
    transitTips: [
      'KSRTC Super Fast & Fast Passenger buses are the cheapest way to climb to Munnar (₹165) and Thekkady.',
      'For Alleppey backwaters: State Water Transport Dept (SWTD) public ferries cost just ₹25 and follow identical routes to ₹8,000 houseboats!',
      'Indian Railways coastal line (Ernakulam -> Alleppey -> Kollam -> Varkala) is incredibly scenic and costs under ₹100.',
      'Shared jeeps at Suryanelli are best for Kolukkumalai sunrise (always pool with other travelers).'
    ],
    stayCategories: [
      { area: 'Fort Kochi Heritage Zone', vibe: 'Colonial, art galleries, seaside promenade, European cafes', budgetHostel: 'goSTOPS Fort Kochi (₹500)', budgetHotel: 'Sithara Homestay (₹1,200)' },
      { area: 'Munnar Old Town / Suryanelli', vibe: 'Misty tea terraces, fresh mountain breeze, campfires', budgetHostel: 'Zostel Munnar (₹650)', budgetHotel: 'Misty Mountain Homestay (₹1,300)' },
      { area: 'Alleppey (Finishing Point & Beach)', vibe: 'Palm-fringed canals, serene water lily ponds, houseboats', budgetHostel: 'Zostel Alleppey (₹600)', budgetHotel: 'Palmy Lake Resort (₹1,400)' },
      { area: 'Varkala North Cliff', vibe: 'Bohemian red laterite sea cliffs, sunset cafes, surf waves', budgetHostel: 'The Lost Hostels (₹550)', budgetHotel: 'Green Lawn Homestay (₹1,200)' }
    ]
  },
  'karnataka-coast-hills': {
    name: 'Karnataka: Coast & Hills (Gokarna, Coorg, Hampi)',
    tag: 'Rocky Cliffs, Ancient Stone & Coffee Mist',
    transitHub: 'KSR Bengaluru / Hubli / Mangalore Junction',
    transitTips: [
      'Panchaganga Express (16595) connects Bangalore overnight directly to Gokarna, Murudeshwar & Karwar.',
      'In Gokarna, hire an auto or hike the 5-beach cliff trail on foot for the true wild experience.',
      'In Hampi, rent a bicycle (₹100/day) or moped (₹300/day) to cross the Tungabhadra river to Sanapur Lake.'
    ],
    stayCategories: [
      { area: 'Gokarna (Kudle Beach & Main Beach)', vibe: 'Laidback, beach shacks, bonfire jams, cliff sunsets', budgetHostel: 'Zostel Gokarna (₹650)', budgetHotel: 'Kudle Ocean Shacks (₹1,000)' },
      { area: 'Coorg (Madikeri & Virajpet)', vibe: 'Coffee aroma, forest streams, Kodava cuisine, rain mist', budgetHostel: 'The Hosteller Coorg (₹650)', budgetHotel: 'Silent Valley Homestay (₹1,400)' },
      { area: 'Hampi (Sanapur / Hippie Island side)', vibe: 'Granite boulders, paddy fields, coracle boats, acoustic cafes', budgetHostel: 'Hampi Backpackers (₹500)', budgetHotel: 'Gouthami Guest House (₹1,100)' }
    ]
  },
  'tamilnadu-pondy': {
    name: 'Tamil Nadu & Pondicherry',
    tag: 'Boulevards, Shore Temples & Temple Architecture',
    transitHub: 'Chennai Central (MAS) / Pondicherry New Bus Stand',
    transitTips: [
      'East Coast Road (ECR) buses from Chennai to Pondy offer endless blue ocean views on the left side of the bus.',
      'Rent a bicycle (₹80-100/day) in Pondy White Town: French grid lanes make navigation effortless.',
      'In Chennai, Chennai Metro Blue Line runs from Airport straight to Chennai Central and Wimco Nagar.'
    ],
    stayCategories: [
      { area: 'Pondicherry (White Town)', vibe: 'Mustard French colonial architecture, bicycle lanes, bakeries', budgetHostel: 'Micasa Hostel (₹600)', budgetHotel: 'Patricia Guest House (₹1,500)' },
      { area: 'Auroville (Kuilapalayam)', vibe: 'Forest groves, organic vegan cafes, bamboo workshops, peace', budgetHostel: 'Auroville Youth Camp (₹450)', budgetHotel: 'Isai Ambalam Guest House (₹1,200)' },
      { area: 'Chennai (Mylapore & Besant Nagar)', vibe: 'Classical music, filter coffee, Elliot Beach sea breeze', budgetHostel: 'Red Lollipop Hostel (₹550)', budgetHotel: 'New Woodlands Hotel (₹1,600)' }
    ]
  }
};

/**
 * Intelligent generator that creates custom multi-day or 1-day itineraries
 */
export function generateSmartItinerary({
  destination = 'bangalore',
  duration = '1-day',
  companion = 'girlfriend',
  selectedVibes = ['quiet', 'cafe'],
  budgetTier = 'smart',
  analyzedPlace = null
}) {
  const analyzed = analyzedPlace || searchAndAnalyzePlace(destination);

  // Calculate day count
  let dayCount = 1;
  if (duration === '3-5-days') {
    dayCount = 3;
  } else if (duration === '7-10-days') {
    dayCount = 7;
  }

  const companionData = COMPANION_TYPES.find(c => c.id === companion) || COMPANION_TYPES[0];
  const destName = analyzed ? analyzed.name : (DESTINATIONS.find(d => d.id === destination)?.name || destination);

  const generatedDays = [];

  for (let i = 1; i <= dayCount; i++) {
    let dayStops = [];
    let dayTitle = '';
    let dayTheme = '';

    if (dayCount === 1) {
      dayStops = generateAccurateOneDayTrail(analyzed, destination, companion, selectedVibes);
      dayTitle = `${destName}: Complete 1-Day Guide (Sight, Lunch, Cafe, Evening Promenade & Dinner)`;
      dayTheme = 'Complete Day Guide: Signature Sight, Lunch, Cafe, Evening Promenade & Dinner';
    } else {
      dayStops = generateAccurateMultiDayPlan(analyzed, destination, companion, selectedVibes, i, dayCount);
      dayTitle = getAccurateDayTitle(analyzed, destination, companion, i, dayCount);
      dayTheme = getAccurateDayTheme(analyzed, destination, i);
    }

    generatedDays.push({
      dayNumber: i,
      title: dayTitle,
      theme: dayTheme,
      stops: dayStops
    });
  }

  const generated = {
    id: `custom-${destination}-${duration}-${companion}-${Date.now()}`,
    title: `${companionData.emoji} ${destName}: ${getCustomTripTitle(companion, duration, selectedVibes)}`,
    destination,
    destinationName: destName,
    duration,
    companion,
    selectedVibes,
    budgetTier,
    tagline: analyzed?.tagline || getCustomTripTagline(companion, selectedVibes),
    budgetTotal: calculateBudgetEstimate(duration, budgetTier, dayCount),
    recommendedTransit: analyzed?.transitFromCityCenter || getTransitSummary(destination),
    days: generatedDays
  };

  return enrichItinerary(generated, budgetTier, analyzed);
}

function getCustomTripTitle(companion, duration, vibes) {
  const compLabel = companion === 'girlfriend' ? 'Date Outing' :
                    companion === 'guy_squad' ? 'Boys Squad Adventure' :
                    companion === 'solo' ? 'Solo Mindful Retreat' : 'Curated Outing';
  
  const durLabel = duration === '1-day' ? '1-Day Complete Guide' :
                   duration === '3-5-days' ? '3-Day Exploration Circuit' : '7-Day Grand Tour';

  return `${durLabel} (${compLabel})`;
}

function getCustomTripTagline(companion, vibes) {
  if (companion === 'girlfriend') {
    return 'Handcrafted for couples: tranquil spaces, scenic viewpoints, cozy cafes & candlelit dining.';
  }
  if (companion === 'guy_squad') {
    return 'Action-packed flow: morning exploration, competitive fun, epic food feasts & vibrant evening spots.';
  }
  return 'Carefully paced itinerary: from morning landmark to lunch, afternoon cafe, sunset walk, and dinner dine.';
}

function getTransitSummary(destination) {
  const d = (destination || '').toLowerCase();
  if (d.includes('varkala')) {
    return 'Train to Varkala Sivagiri (VAK) + ₹100 Auto to North Cliff (Pedestrian Promenade)';
  }
  if (d.includes('kerala') || d.includes('munnar') || d.includes('alleppey')) {
    return 'KSRTC Express Buses + Coastal Express Train + Village Country Canoe';
  }
  if (d.includes('gokarna') || d.includes('hampi') || d.includes('coorg')) {
    return 'Overnight Train (Panchaganga / Hampi Exp) + Local Autos / Rental Scooter';
  }
  return 'Namma Metro (Purple & Green Lines) + short Rapido/Auto connectors';
}

function calculateBudgetEstimate(duration, tier, dayCount) {
  let daily = tier === 'pocket' ? 750 : tier === 'smart' ? 1800 : 3800;
  let total = daily * dayCount;
  return `₹${total.toLocaleString('en-IN')} - ₹${Math.round(total * 1.35).toLocaleString('en-IN')} ${dayCount === 1 ? 'for day outing' : 'total per person'}`;
}

/**
 * 1-DAY ENGINE: STRICTLY GENERATES STOPS FOR THE SEARCHED PLACE!
 * Varkala gets Varkala; Munnar gets Munnar; Gokarna gets Gokarna; Bangalore gets Bangalore!
 */
function generateAccurateOneDayTrail(analyzed, destination, companion, selectedVibes) {
  const q = (analyzed?.name || destination || '').toLowerCase();

  // 1. VARKALA (KERALA COASTAL)
  if (q.includes('varkala')) {
    return [
      {
        phase: '🌅 Morning Sight & Holy Springs',
        time: '08:00 AM - 10:30 AM',
        name: 'Papanasam Beach & Natural Mineral Springs',
        zone: 'South Cliff, Varkala',
        activity: 'Morning walk along sacred golden sands, wash in the natural mountain mineral spring cascading down the red cliff, followed by hot Kerala Appam & Vegetable Stew at a cliffside shack.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Spiritual tranquility, pristine morning waves, and therapeutic natural cliff springs.',
        cost: 'Free entry (Breakfast ₹120)',
        reviewSnippet: 'Rating 4.8/5 - "The morning cliff spring bath followed by fresh tea overlooking the ocean is pure bliss."'
      },
      {
        transitNext: {
          type: 'walk',
          mode: 'Cliff Footpath',
          route: 'Papanasam Beach → Black Sand Beach',
          directions: 'Walk along the paved pedestrian cliff strip northwards past coconut groves.',
          time: '12 mins walk',
          fare: '₹0'
        }
      },
      {
        phase: '🌊 Midday Surf, Beach & Seafood Lunch',
        time: '11:00 AM - 02:45 PM',
        name: 'Black Sand Beach & Varkala Surf School',
        zone: 'North End, Varkala',
        activity: 'Dip in the turquoise ocean waves, take beginner surf lessons, sunbathe on black volcanic sand, followed by fresh catch grilled fish & lemon soda lunch at God’s Own Country Kitchen.',
        stayDuration: '3.5 hrs',
        whySpecial: 'Untamed black sand cove, clean surf breaks, and authentic coastal Kerala lunch.',
        cost: '₹200 - ₹400 for fresh catch lunch',
        reviewSnippet: 'Rating 4.7/5 - "Black Sand Beach is uncrowded and the beginner surf waves are amazing."'
      },
      {
        transitNext: {
          type: 'walk',
          mode: 'Cliff Steps',
          route: 'Black Sand Beach → North Cliff Walkway',
          directions: 'Walk up the paved red laterite stone steps directly onto North Cliff.',
          time: '5 mins',
          fare: '₹0'
        }
      },
      {
        phase: '☕ Aesthetic Afternoon Cliff Cafe & Bakes',
        time: '03:15 PM - 04:45 PM',
        name: 'Coffee Temple & Abba Restaurant Terrace',
        zone: 'North Cliff Promenade',
        activity: 'Relax on breezy cliff terrace with iced ginger-honey tea, cold pour-overs, and homemade Swedish apple pie overlooking passing fishing boats.',
        stayDuration: '1.5 hrs',
        whySpecial: 'Chilled ocean breeze, shaded bamboo umbrellas, intimate conversation for couples.',
        cost: '₹220 per person',
        reviewSnippet: 'Rating 4.7/5 - "Best pour-over coffee on the cliff with uninterrupted horizon views."'
      },
      {
        transitNext: {
          type: 'walk',
          mode: 'Cliff Stroll',
          route: 'Coffee Temple → North Cliff Helipad Promontory',
          directions: 'Stroll along the 1.5 km clifftop pedestrian strip.',
          time: '5 mins walk',
          fare: '₹0'
        }
      },
      {
        phase: '🌆 Evening Sunset Walk & Tibetan Street Bazaars',
        time: '05:15 PM - 07:30 PM',
        name: 'North Cliff Pedestrian Promenade Sunset Walk',
        zone: 'North Cliff Edge, Varkala',
        activity: 'Watch the blazing orange sunset sink into the Arabian Sea, spot dolphins leaping in golden light, and browse Tibetan silver jewelry, singing bowls, and bohemian linen stalls.',
        stayDuration: '2 hrs',
        whySpecial: 'Pedestrian-only red laterite cliff 100 ft above the waves; ranked top sunset spot in Kerala.',
        cost: 'Free walk + ₹150 for coconut water & snacks',
        reviewSnippet: 'Rating 4.9/5 - "The sunset walk along North Cliff is one of the most magical sights in India."'
      },
      {
        transitNext: {
          type: 'walk',
          mode: 'Evening Cliff Walk',
          route: 'Helipad → Darjeeling Cafe Courtyard',
          directions: 'Walk 100m into Darjeeling Cafe entrance.',
          time: '2 mins walk',
          fare: '₹0'
        }
      },
      {
        phase: '🍷 Night Candlelight Seaside Dinner & Wind Up',
        time: '08:00 PM - 10:30 PM',
        name: 'Darjeeling Cafe & Cafe del Mar Candlelight Dining',
        zone: 'Middle Cliff, Varkala',
        activity: 'Sit on bohemian floor cushions with fairy lights, listen to live acoustic guitar, enjoy thin-crust wood-fired pizza and grilled calamari sizzler with ocean sound.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Candlelight cliffside terrace, sound of crashing waves, and unhurried coastal finale.',
        cost: '₹750 - ₹1,100 for two',
        reviewSnippet: 'Rating 4.8/5 - "Eating pizza by candlelight while hearing the waves crash below is unforgettable."'
      }
    ];
  }

  // 2. MUNNAR (KERALA HILLS)
  if (q.includes('munnar')) {
    return [
      {
        phase: '🌅 Morning Misty Peak & Tea Trail',
        time: '08:00 AM - 10:30 AM',
        name: 'Lockhart Gap & Tea Terraces Morning Walk',
        zone: 'Lockhart Gap (6,000 ft)',
        activity: 'Walk along mountain tea terraces through swirling morning mist, sip piping hot cardamom ginger tea at roadside wooden stall.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Crisp 14°C mountain air and rolling green carpet stretching beyond the horizon.',
        cost: 'Free entry (Tea & snacks ₹60)'
      },
      {
        transitNext: { type: 'auto', mode: 'Mountain Jeep', route: 'Lockhart Gap → Tea Museum', directions: 'Scenic drive down Gap Road past waterfalls.', time: '20 mins', fare: '₹120' }
      },
      {
        phase: '🍃 Midday Heritage Industrial & Lunch',
        time: '11:00 AM - 02:30 PM',
        name: 'KDHP Historic Tea Museum & 1911 Rollers',
        zone: 'Nullatanni Estate, Munnar',
        activity: 'Watch live orthodox tea processing on rollers from 1911, taste freshly plucked silver-needle white tea, followed by lunch at Rapsy Restaurant in Munnar town.',
        stayDuration: '3.5 hrs',
        whySpecial: 'Fascinating British planter history and world-famous Kerala Malabar Parotta with chicken roast.',
        cost: '₹125 entry + ₹200 lunch'
      },
      {
        transitNext: { type: 'auto', mode: 'Auto', route: 'Munnar Town → Mattupetty', directions: 'Drive past hydel park along Mattupetty road.', time: '20 mins', fare: '₹100' }
      },
      {
        phase: '☕ Afternoon Mountain Gazebo Cafe',
        time: '03:15 PM - 04:45 PM',
        name: 'Tea Valley Gazebo Cafe & Cardamom Bakes',
        zone: 'Mattupetty Road',
        activity: 'Enjoy freshly brewed green tea and warm banana fritters (pazham pori) overlooking mountain valley.',
        stayDuration: '1.5 hrs',
        whySpecial: 'Serene mountain views and fresh tea estate breeze.',
        cost: '₹150'
      },
      {
        transitNext: { type: 'walk', mode: 'Lake Walk', route: 'Cafe → Mattupetty Dam', directions: 'Walk to lake shore.', time: '5 mins', fare: '₹0' }
      },
      {
        phase: '🌆 Evening Lake Breeze & Echo Point',
        time: '05:15 PM - 07:15 PM',
        name: 'Mattupetty Lake & Echo Point',
        zone: 'Mattupetty Hills',
        activity: 'Watch misty reflections on mountain lake, try shouting across the valley at Echo Point, and browse spice stalls.',
        stayDuration: '2 hrs',
        whySpecial: 'Surrounded by Anamudi hills and pine woods.',
        cost: '₹50 entry'
      },
      {
        transitNext: { type: 'auto', mode: 'Return Drive', route: 'Mattupetty → Old Munnar Homestay', directions: 'Drive back to homestay.', time: '25 mins', fare: '₹140' }
      },
      {
        phase: '🍷 Night Campfire Dinner & Wind Up',
        time: '07:45 PM - 10:00 PM',
        name: 'Hillside Homestay Campfire Dinner',
        zone: 'Old Munnar / Suryanelli',
        activity: 'Warm bonfire, traditional Kerala chicken roast, appams, and stargazing in the chilly mountain night.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Cozy mountain chill and crackling campfire.',
        cost: '₹500 for two'
      }
    ];
  }

  // 3. GOKARNA (KARNATAKA COAST)
  if (q.includes('gokarna')) {
    return [
      {
        phase: '🌅 Morning Heritage & Sacred Tank',
        time: '08:00 AM - 10:30 AM',
        name: 'Mahabaleshwar Temple & Kotiteertha Tank',
        zone: 'Gokarna Town',
        activity: 'Visit the 4th-century Atmalinga Shiva temple, walk around the sacred stone Kotiteertha lake, followed by South Indian breakfast of hot buns & filter coffee.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Sacred coastal Sanskrit heritage and peaceful morning bells.',
        cost: 'Free entry'
      },
      {
        transitNext: { type: 'auto', mode: 'Auto', route: 'Town → Kudle Beach', directions: 'Short auto over hill ridge to Kudle steps.', time: '10 mins', fare: '₹60' }
      },
      {
        phase: '🏖️ Midday Beach Chill, Swim & Lunch',
        time: '11:00 AM - 02:45 PM',
        name: 'Kudle Beach Sands & Little Paradise Shack',
        zone: 'Kudle Beach',
        activity: 'Swim in the warm Arabian Sea, relax on beach bamboo beds, and enjoy fresh catch fish curry thali with kokum kadi.',
        stayDuration: '3.5 hrs',
        whySpecial: 'Curved sandy bay, gentle waves, and authentic coastal seafood.',
        cost: '₹250 lunch'
      },
      {
        transitNext: { type: 'walk', mode: 'Cliff Trek', route: 'Kudle Beach → Om Beach', directions: 'Hike 15 mins across rocky hill promontory.', time: '15 mins walk', fare: '₹0' }
      },
      {
        phase: '☕ Afternoon Bohemian Beach Cafe',
        time: '03:15 PM - 04:45 PM',
        name: 'Namaste Cafe (Om Beach)',
        zone: 'Om Beach Cliff',
        activity: 'Sit on cliffside wooden benches overlooking Om-shaped ocean coves with Spanish breakfast, banana Nutella pancakes, and iced cold coffee.',
        stayDuration: '1.5 hrs',
        whySpecial: 'Gokarna’s most iconic beach cafe since 1990.',
        cost: '₹220'
      },
      {
        transitNext: { type: 'walk', mode: 'Coastal Cliff Trek', route: 'Om Beach → Half Moon & Paradise Beach', directions: 'Scenic cliff trail above breaking waves.', time: '25 mins walk', fare: '₹0' }
      },
      {
        phase: '🌆 Evening 5-Beach Cliff Sunset Hike',
        time: '05:15 PM - 07:30 PM',
        name: 'Half Moon & Paradise Beach Cliff Sunset',
        zone: 'Paradise Beach Cove',
        activity: 'Hike into secluded Paradise Beach (accessible only on foot or boat), watch dolphins leaping in sunset waves, take ₹150 fisherman boat back to Om Beach.',
        stayDuration: '2 hrs',
        whySpecial: 'Untamed, road-free nature with breathtaking sunset.',
        cost: '₹150 return boat'
      },
      {
        transitNext: { type: 'walk', mode: 'Beach Walk', route: 'Boat drop → Kudle Shacks', directions: 'Walk onto Kudle Beach.', time: '5 mins', fare: '₹0' }
      },
      {
        phase: '🍷 Night Beach Shack Bonfire Dinner',
        time: '08:00 PM - 10:30 PM',
        name: 'Kudle Beachfront Candlelight Shack Dinner',
        zone: 'Kudle Beach Sands',
        activity: 'Sit on candlelit bamboo mats directly on the sand, enjoy grilled prawns, wood-fired pizza, and stargazing with ocean sound.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Barefoot dining with waves lapping near your feet.',
        cost: '₹700 for two'
      }
    ];
  }

  // 4. COORG (KODAGU HILLS)
  if (q.includes('coorg') || q.includes('madikeri')) {
    return [
      {
        phase: '🌅 Morning Waterfalls & Spice Canopy',
        time: '08:00 AM - 10:30 AM',
        name: 'Abbey Falls & Shaded Spice Plantation',
        zone: 'Madikeri, Coorg',
        activity: 'Walk down hanging bridge across roaring waterfalls surrounded by wild pepper vines, cardamom plants, and coffee bushes, followed by hot filter coffee.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Cascading natural falls surrounded by private coffee estate greenery.',
        cost: '₹15 entry + ₹50 coffee'
      },
      {
        transitNext: { type: 'auto', mode: 'Estate Jeep', route: 'Abbey Falls → Coffee Estate', directions: 'Scenic drive through winding plantation roads.', time: '15 mins', fare: '₹90' }
      },
      {
        phase: '☕ Midday Coffee Cupping & Kodava Lunch',
        time: '11:00 AM - 02:45 PM',
        name: 'Sustainable Coffee Plantation Tour & Kodava Feast',
        zone: 'Suntikoppa / Madikeri',
        activity: 'Learn coffee berry picking and bean roasting, followed by authentic Kodava lunch: soft Akki Rotti with spicy pork Pandi Curry or bamboo shoot curry.',
        stayDuration: '3.5 hrs',
        whySpecial: 'The sensory heart of India’s coffee capital.',
        cost: '₹350 lunch & tasting'
      },
      {
        transitNext: { type: 'auto', mode: 'Auto', route: 'Estate → Madikeri Fort', directions: 'Drive into Madikeri heritage town center.', time: '12 mins', fare: '₹60' }
      },
      {
        phase: '🏛️ Afternoon Heritage & Temple Pond',
        time: '03:15 PM - 04:45 PM',
        name: 'Madikeri Fort & Omkareshwara Temple',
        zone: 'Madikeri Town',
        activity: 'Explore 17th-century fort palace, followed by the tranquil Islamic-Gothic style Omkareshwara Temple and its central goldfish water tank.',
        stayDuration: '1.5 hrs',
        whySpecial: 'Unique blend of architectural styles set amidst foggy hills.',
        cost: 'Free entry'
      },
      {
        transitNext: { type: 'walk', mode: 'Stroll', route: 'Fort → Raja’s Seat', directions: 'Walk 500m up to the cliff viewpoint.', time: '8 mins walk', fare: '₹0' }
      },
      {
        phase: '🌆 Evening Sunset Cliff Garden & Mist',
        time: '05:15 PM - 07:30 PM',
        name: 'Raja’s Seat Sunset Viewpoint & Garden',
        zone: 'Raja’s Seat Promenade',
        activity: 'Sit in the seasonal flower gardens where Coorg kings watched sunsets, overlooking rolling green valleys shrouded in evening fog.',
        stayDuration: '2 hrs',
        whySpecial: 'Spectacular sunset panorama over misty layered Western Ghats.',
        cost: '₹20 entry'
      },
      {
        transitNext: { type: 'walk', mode: 'Walk', route: 'Raja’s Seat → Raintree', directions: 'Short walk to heritage dining courtyard.', time: '5 mins', fare: '₹0' }
      },
      {
        phase: '🍷 Night Candlelight Heritage Dining',
        time: '08:00 PM - 10:30 PM',
        name: 'Raintree Heritage Courtyard Dining',
        zone: 'Madikeri',
        activity: 'Dine under timber veranda with candlelight, savoring Kodava pepper chicken, Kadamputtu (steamed rice balls), and honey wine.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Intimate colonial planter villa ambience.',
        cost: '₹800 for two'
      }
    ];
  }

  // 5. OOTY (NILGIRIS)
  if (q.includes('ooty') || q.includes('nilgiri')) {
    return [
      {
        phase: '🌅 Morning Peak & Sea of Mist',
        time: '08:00 AM - 10:30 AM',
        name: 'Doddabetta Peak (8,652 ft) Summit View',
        zone: 'Ooty Summit',
        activity: 'Breathe crisp 11°C mountain air at the highest point in the Nilgiris, telescope house views across blue mountain valleys and eucalyptus forests.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Highest peak in Tamil Nadu with sweeping panoramic horizon.',
        cost: '₹10 entry'
      },
      {
        transitNext: { type: 'auto', mode: 'Mountain Auto', route: 'Doddabetta → Ooty Railway Station', directions: 'Drive down winding ghats past cabbage terraces.', time: '20 mins', fare: '₹120' }
      },
      {
        phase: '🚂 Midday UNESCO Toy Train & Pine Walk',
        time: '11:00 AM - 02:45 PM',
        name: 'Nilgiri Mountain Railway (Toy Train to Coonoor)',
        zone: 'Ooty to Coonoor',
        activity: 'Ride the vintage steam rack-and-pinion locomotive through 16 tunnels and 250 stone viaduct bridges, lunch in Coonoor at Hopcoze Garden Cafe.',
        stayDuration: '3.5 hrs',
        whySpecial: 'World Heritage living steam locomotive journey dating from 1908.',
        cost: '₹150 train ticket + ₹250 lunch'
      },
      {
        transitNext: { type: 'auto', mode: 'Return Cab', route: 'Coonoor → Ooty Lake', directions: 'Drive back past tea factories.', time: '25 mins', fare: '₹180' }
      },
      {
        phase: '☕ Afternoon High Tea & Homemade Chocolates',
        time: '03:15 PM - 04:45 PM',
        name: 'King Star Confectionery & Heritage High Tea',
        zone: 'Commercial Road, Ooty',
        activity: 'Taste authentic melt-in-mouth homemade dark fudge chocolates, sip Nilgiri frost tea on a breezy colonial veranda.',
        stayDuration: '1.5 hrs',
        whySpecial: 'Ooty’s pioneer chocolatier since 1942.',
        cost: '₹200 per person'
      },
      {
        transitNext: { type: 'walk', mode: 'Walk', route: 'Chocolatier → Botanical Gardens', directions: 'Stroll into Government Botanical Garden entrance.', time: '10 mins', fare: '₹0' }
      },
      {
        phase: '🌆 Evening Botanical Lawns & Lake Boating Sunset',
        time: '05:15 PM - 07:30 PM',
        name: 'Government Botanical Gardens & Ooty Lake',
        zone: 'Ooty Lake',
        activity: 'Walk beneath 20-million-year-old fossil tree trunk, take a pedal boat out on Ooty Lake as mist rolls over the eucalyptus ridges.',
        stayDuration: '2 hrs',
        whySpecial: 'Victorian terraced gardens and reflective sunset waters.',
        cost: '₹40 garden + ₹100 boat'
      },
      {
        transitNext: { type: 'auto', mode: 'Auto', route: 'Lake → Savoy', directions: 'Short drive up to heritage hill.', time: '8 mins', fare: '₹50' }
      },
      {
        phase: '🍷 Night Fireplace Dining & Wind Up',
        time: '08:00 PM - 10:30 PM',
        name: 'Savoy / Earl’s Secret Victorian Fireplace Dining',
        zone: 'Havelock Road, Ooty',
        activity: 'Dine beside a crackling wooden fireplace in a 180-year-old British colonial estate with Anglo-Indian chicken shepherd’s pie and mulled spices.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Cozy warmth of real fireplace in chilly mountain night.',
        cost: '₹1,100 for two'
      }
    ];
  }

  // 6. PONDICHERRY (WHITE TOWN & FRENCH QUARTERS)
  if (q.includes('pondy') || q.includes('pondicherry') || q.includes('puducherry')) {
    return [
      {
        phase: '🌅 Morning French White Town Bicycle Cruise',
        time: '07:30 AM - 10:30 AM',
        name: 'White Town Vintage Bicycle Tour & Baker Street',
        zone: 'Rue Suffren & Dumas Street',
        activity: 'Rent pastel bicycles, cruise down French-named grid boulevards lined with mustard-yellow colonial mansions, and enjoy warm almond croissants at Baker Street.',
        stayDuration: '3 hrs',
        whySpecial: 'Peaceful morning bicycle cruising under bougainvillea arches.',
        cost: '₹100 cycle rent + ₹160 bakery'
      },
      {
        transitNext: { type: 'auto', mode: 'Auto', route: 'White Town → Auroville', directions: 'Drive north through Kuilapalayam forest groves.', time: '20 mins', fare: '₹150' }
      },
      {
        phase: '🏛️ Midday Auroville Matrimandir & Organic Lunch',
        time: '11:00 AM - 02:45 PM',
        name: 'Auroville Matrimandir Golden Sphere & Solar Kitchen',
        zone: 'Auroville International Township',
        activity: 'Walk through red-earth pine forest to the golden meditation sphere, explore bamboo craft workshops, and have organic farm-to-table lunch at Solar Kitchen.',
        stayDuration: '3.5 hrs',
        whySpecial: 'World-renowned peaceful township and iconic golden architecture.',
        cost: 'Free pass + ₹220 lunch'
      },
      {
        transitNext: { type: 'auto', mode: 'Auto', route: 'Auroville → White Town', directions: 'Return drive to coastal boulevard.', time: '20 mins', fare: '₹150' }
      },
      {
        phase: '☕ Afternoon Bohemian Courtyard Cafe',
        time: '03:15 PM - 04:45 PM',
        name: 'Cafe des Arts & Coromandel Cafe',
        zone: 'Rue Suffren, White Town',
        activity: 'Sip iced hibiscus cooler and Nutella crepes in a retro Franco-Tamil courtyard with vintage rickshaw art and book corners.',
        stayDuration: '1.5 hrs',
        whySpecial: 'Most photogenic cafe courtyard in South India.',
        cost: '₹280 per person'
      },
      {
        transitNext: { type: 'walk', mode: 'Walk', route: 'Cafe → Rock Beach', directions: 'Walk 200m east directly onto the sea promenade.', time: '3 mins walk', fare: '₹0' }
      },
      {
        phase: '🌆 Evening Promenade Beach (Car-Free Promenade)',
        time: '05:15 PM - 07:45 PM',
        name: 'Promenade Beach (Rock Beach Promenade)',
        zone: 'Goubert Avenue seafront',
        activity: 'Promenade is closed to all vehicular traffic at 5 PM! Stroll freely along the 1.5 km crashing waves, past the French War Memorial and Old Lighthouse.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Zero vehicle noise, fresh Bay of Bengal breeze, and vibrant street life.',
        cost: 'Free walk + ₹80 gelato'
      },
      {
        transitNext: { type: 'walk', mode: 'Walk', route: 'Promenade → Villa Shanti', directions: 'Walk 150m into Rue Suffren.', time: '2 mins walk', fare: '₹0' }
      },
      {
        phase: '🍷 Night Candlelight Franco-Tamil Dining',
        time: '08:00 PM - 10:30 PM',
        name: 'Villa Shanti / Carte Blanche Courtyard Dinner',
        zone: 'Rue Suffren',
        activity: 'Candlelight dining around a vertical water wall courtyard with French onion soup, seared catch fish in coconut curry, and Belgian chocolate mousse.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Romantic, understated luxury in an 18th-century French home.',
        cost: '₹1,200 for two'
      }
    ];
  }

  // 7. HAMPI (ANCIENT RUINS & BOULDERS)
  if (q.includes('hampi')) {
    return [
      {
        phase: '🌅 Morning 7th-Century Sacred Shrine & Sunrise',
        time: '06:30 AM - 10:00 AM',
        name: 'Virupaksha Temple & Hemakuta Hill Sunrise',
        zone: 'Hampi Bazaar',
        activity: 'Climb Hemakuta hill for sunrise over boulder-strewn landscapes, receive blessings from Lakshmi the temple elephant, breakfast at Mango Tree Cafe.',
        stayDuration: '3.5 hrs',
        whySpecial: 'Oldest functioning temple in India amidst mythical Kishkindha boulders.',
        cost: 'Free entry (Breakfast ₹120)'
      },
      {
        transitNext: { type: 'auto', mode: 'Electric Buggy', route: 'Hampi Bazaar → Vijaya Vittala', directions: 'Ride eco buggy through royal chariot pathways.', time: '10 mins', fare: '₹20' }
      },
      {
        phase: '🛕 Midday Stone Chariot & Musical Pillars',
        time: '10:30 AM - 02:30 PM',
        name: 'Vijaya Vittala Temple & Monolithic Stone Chariot',
        zone: 'Vittala Complex',
        activity: 'Marvel at India’s iconic stone chariot carved from granite blocks, tap the 56 musical acoustic pillars, lunch at Gouthami Restaurant.',
        stayDuration: '3.5 hrs',
        whySpecial: 'Supreme pinnacle of Vijayanagara empire architectural mastery.',
        cost: '₹40 entry + ₹250 lunch'
      },
      {
        transitNext: { type: 'auto', mode: 'Coracle Boat', route: 'Hampi Ghat → Anegundi Side', directions: 'Cross the Tungabhadra river in a circular bamboo coracle.', time: '8 mins', fare: '₹50' }
      },
      {
        phase: '☕ Afternoon Coracle Drift & Acoustic Cafe',
        time: '03:15 PM - 04:45 PM',
        name: 'Sanapur Lake & River Shanti Cafe',
        zone: 'Sanapur / Hippie Island side',
        activity: 'Float across mirror-calm freshwater lake surrounded by giant balanced boulders, sip lemon mint juice on floor mattresses.',
        stayDuration: '1.5 hrs',
        whySpecial: 'Untamed geological wonderland and acoustic guitar vibes.',
        cost: '₹150 coracle + ₹100 drink'
      },
      {
        transitNext: { type: 'auto', mode: 'Coracle & Hike', route: 'Sanapur → Matanga Hill base', directions: 'Return across river and walk to hill base.', time: '20 mins', fare: '₹50' }
      },
      {
        phase: '🌆 Evening 360° Matanga Hill Sunset Panorama',
        time: '05:15 PM - 07:15 PM',
        name: 'Matanga Hill Sunset Summit (Highest Point in Hampi)',
        zone: 'Central Hampi',
        activity: 'Scramble up stone steps to the rooftop Veerabhadra temple; watch the sun dip behind miles of golden granite ruins and lush green paddy fields.',
        stayDuration: '2 hrs',
        whySpecial: 'Considered one of the most breathtaking sunset panoramas on earth.',
        cost: 'Free climb'
      },
      {
        transitNext: { type: 'walk', mode: 'Steps Down', route: 'Summit → Bazaar', directions: 'Descend stone steps carefully with torch.', time: '15 mins', fare: '₹0' }
      },
      {
        phase: '🍷 Night Acoustic Rooftop Dinner',
        time: '07:45 PM - 10:00 PM',
        name: 'Mango Tree / Laughing Buddha Rooftop Lounge',
        zone: 'Hampi Riverfront',
        activity: 'Sit cross-legged on colorful floor mattresses, enjoy wood-fired pizza and Israeli Shakshuka while listening to acoustic world music.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Soulful Bohemian gathering under starry Deccan skies.',
        cost: '₹550 for two'
      }
    ];
  }

  // 8. KERALA MASTER CIRCUIT (FORT KOCHI & CANALS)
  if (q === 'kerala' || q.includes('kerala grand') || q.includes('circuit')) {
    return [
      {
        phase: '🌅 Morning Colonial Fort Heritage & Harbor',
        time: '08:00 AM - 10:30 AM',
        name: 'Fort Kochi Heritage Walk & Chinese Fishing Nets',
        zone: 'Fort Kochi Harborside',
        activity: 'Walk past 500-year-old Portuguese St. Francis Church, watch fishermen lower giant cantilevered Chinese fishing nets over morning tide, breakfast at Kashi Art Cafe.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Ancient spice harbor where Vasco da Gama was buried; historic colonial romance.',
        cost: 'Free walk (Breakfast ₹180)'
      },
      {
        transitNext: { type: 'auto', mode: 'Water Metro / Ferry', route: 'Fort Kochi → Mattancherry', directions: 'Short scenic ferry ride along backwaters.', time: '10 mins', fare: '₹10' }
      },
      {
        phase: '🏛️ Midday Jew Town Antiques & Spiced Seafood Lunch',
        time: '11:00 AM - 02:45 PM',
        name: 'Jew Town, Paradesi Synagogue & Dutch Palace',
        zone: 'Mattancherry Spice Quarter',
        activity: 'Aroma of whole cardamom and cloves, explore 1568 Jewish synagogue with hand-painted Chinese tiles, lunch on banana leaf Karimeen fish at Seagull Restaurant.',
        stayDuration: '3.5 hrs',
        whySpecial: 'Century-old spice warehouses and exquisite royal murals.',
        cost: '₹20 entry + ₹350 lunch'
      },
      {
        transitNext: { type: 'auto', mode: 'Auto', route: 'Mattancherry → Princess Street', directions: 'Short auto down Bazaar Road.', time: '8 mins', fare: '₹50' }
      },
      {
        phase: '☕ Afternoon Art Gallery Cafe & Spiced Bakes',
        time: '03:15 PM - 04:45 PM',
        name: 'Kashi Art Cafe & Pepper House Courtyard',
        zone: 'Burgher Street / Calvathy',
        activity: 'Relax under rain tree canopies with famous warm chocolate cake, iced spiced cold brews, and contemporary art installations.',
        stayDuration: '1.5 hrs',
        whySpecial: 'Epicenter of Kochi-Muziris Biennale arts culture.',
        cost: '₹240 per person'
      },
      {
        transitNext: { type: 'walk', mode: 'Walk', route: 'Cafe → Beach Walkway', directions: 'Walk onto Fort Kochi beach promenade.', time: '5 mins', fare: '₹0' }
      },
      {
        phase: '🌆 Evening Harborside Sunset Stroll & Kathakali',
        time: '05:15 PM - 07:30 PM',
        name: 'Fort Kochi Beach Promenade & Kerala Kathakali Center',
        zone: 'Princess Street / Beach',
        activity: 'Watch red sun sink behind passing cargo ships, then attend live Kathakali makeup and eye-expression performance.',
        stayDuration: '2 hrs',
        whySpecial: 'Vibrant cultural spectacle and ocean breeze.',
        cost: '₹300 performance ticket'
      },
      {
        transitNext: { type: 'walk', mode: 'Walk', route: 'Kathakali Center → Old Harbour', directions: 'Walk into Old Harbour Hotel courtyard.', time: '3 mins walk', fare: '₹0' }
      },
      {
        phase: '🍷 Night Waterfront Candlelight Dining',
        time: '08:00 PM - 10:30 PM',
        name: 'Old Harbour Hotel / Seagull Waterfront Dining',
        zone: 'Fort Kochi Seafront',
        activity: 'Candlelight dining beside the water, fresh grilled tiger prawns, appams, and listening to the rhythmic splash of harbor waves.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Historic 300-year-old Dutch boutique setting.',
        cost: '₹1,200 for two'
      }
    ];
  }

  // 9. MAHALAKSHMI LAYOUT / RAJAJINAGAR (BANGALORE - WITH ORION MALL & PVR) - ONLY ON SPECIFIC REQUEST!
  if (q.includes('mahalakshmi') || q.includes('orion') || q.includes('iskcon')) {
    return [
      {
        phase: '🌅 Morning Sight & Spiritual Calm',
        time: '08:30 AM - 10:30 AM',
        name: 'ISKCON Sri Radha Krishna Temple (Hare Krishna Hill)',
        zone: 'Mahalakshmi Layout / Rajajinagar',
        activity: 'Marvel at the gold-plated gopuram, peaceful morning chanting halls, hillside gardens, and enjoy fresh hot Khichdi Prasadam & sweet pongal.',
        stayDuration: '2 hrs',
        whySpecial: 'Spiritual tranquility, awe-inspiring Dravidian-modern architecture, and crisp morning light.',
        cost: 'Free entry (Prasadam ₹50)'
      },
      {
        transitNext: {
          type: 'walk',
          mode: 'Short Walk via Dr. Rajkumar Road',
          route: 'ISKCON Temple Entrance → Orion Mall Lakeside Gate',
          directions: 'Walk 400m down Hare Krishna Hill, cross Dr. Rajkumar Road directly into Orion Mall lakeside entrance.',
          time: '5 mins walk',
          fare: '₹0'
        }
      },
      {
        phase: '🛍️ City Mall, 🎬 PVR Movie & 🍽️ Lunch',
        time: '11:00 AM - 02:45 PM',
        name: 'Orion Mall (Brigade Gateway) & PVR IMAX Cinema',
        zone: 'Brigade Gateway, Dr. Rajkumar Road',
        activity: 'Explore luxury retail, catch a midday movie at PVR IMAX with Laser or 4DX, followed by lunch at Chili’s American Grill or Punjab Grill.',
        stayDuration: '3.5 hrs',
        whySpecial: '11-screen multiplex with South India’s premier IMAX with Laser and lakefront dining.',
        cost: '₹350 - ₹500 (Movie ticket) + ₹450 (Lunch)',
        cinemaInfo: {
          theatreName: 'PVR Orion Mall (IMAX with Laser & 4DX)',
          screens: 11,
          bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/pvr-orion-mall-dr-rajkumar-road-rajajinagar/PVOR',
          trendingMovies: [
            { title: 'Kantara: A Legend Chapter 1', format: 'IMAX 2D / Atmos', rating: '9.3/10', lang: 'Kannada / Hindi' },
            { title: 'Avatar: Fire and Ash', format: 'IMAX 3D / 4DX', rating: '9.1/10', lang: 'English / Hindi' },
            { title: 'Dune: Part Three', format: 'IMAX with Laser', rating: '9.4/10', lang: 'English' }
          ]
        }
      },
      {
        transitNext: {
          type: 'walk',
          mode: 'Stroll across Lakeside',
          route: 'Orion Mall Inside → Lakeside Cafe Promenade',
          directions: 'Step out of the ground floor glass doors directly onto the lakeside wooden promenade.',
          time: '2 mins walk',
          fare: '₹0'
        }
      },
      {
        phase: '☕ Aesthetic Afternoon Cafe & Dessert',
        time: '03:15 PM - 04:45 PM',
        name: 'The Big Kahuna & Lakeside Artisan Cafe',
        zone: 'Orion Mall Lakeside',
        activity: 'Sit on outdoor wicker chairs by the water fountain, sipping iced caramel macchiato and sharing warm Belgian waffles.',
        stayDuration: '1.5 hrs',
        whySpecial: 'Breezy lake view, swan fountains, relaxing conversation away from city honking.',
        cost: '₹280 per person'
      },
      {
        transitNext: {
          type: 'walk',
          mode: 'Lakeside Boardwalk',
          route: 'Lakeside Cafe → Orion Promenade Amphitheatre',
          directions: 'Stroll along the 500m paved lake boardwalk past the open-air amphitheatre.',
          time: '5 mins',
          fare: '₹0'
        }
      },
      {
        phase: '🌆 Evening Sunset Walk & Promenade',
        time: '05:15 PM - 07:30 PM',
        name: 'Brigade Gateway Lakeside Promenade & Amphitheatre',
        zone: 'Mahalakshmi / Rajajinagar',
        activity: 'Watch the golden sunset reflect over the lake waters, listen to live acoustic buskers, and browse outdoor pop-up kiosks.',
        stayDuration: '2 hrs',
        whySpecial: 'Vibrant evening atmosphere, cool water breeze, completely pedestrian-only.',
        cost: 'Free walk + ₹120 for gelato/snacks'
      },
      {
        transitNext: {
          type: 'walk',
          mode: 'Elevator Express',
          route: 'Lakeside Promenade → WTC Tower (31st Floor)',
          directions: 'Walk into World Trade Center lobby and take high-speed express elevator to 31st floor.',
          time: '3 mins',
          fare: '₹0'
        }
      },
      {
        phase: '🍷 Night Dinner Dine & Wind Up',
        time: '08:00 PM - 10:30 PM',
        name: 'High Ultra Lounge (31st Floor, World Trade Center)',
        zone: 'Brigade Gateway (430 ft above city)',
        activity: 'Pan-Asian dinner, signature mocktails, and candlelight dining with 360-degree night skyline views over illuminated Bengaluru.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Highest open-air lounge in South India; spectacular glittering night view to wind up the day.',
        cost: '₹1,200 - ₹1,800 for two'
      }
    ];
  }

  // 5. STANDARD CENTRAL BANGALORE (Cubbon Park, Garuda Mall INOX, Church St, Olive Beach)
  if (isBangaloreLocation(analyzed) || q.includes('bangalore') || q.includes('bengaluru')) {
    return [
      {
        phase: '🌅 Morning Sight & Heritage Breakfast',
        time: '08:30 AM - 10:30 AM',
        name: 'Cubbon Park Mahogany Groves & State Central Library',
        zone: 'Cubbon Park (Central CBD)',
        activity: 'Morning stroll under 100-year-old bamboo groves, admire the 1915 red-brick Seshadri Iyer Memorial Hall, and have hot filter coffee & dosas at Airlines Hotel.',
        stayDuration: '2 hrs',
        whySpecial: 'Lush green lungs, birdsong, zero vehicle noise, crisp morning air.',
        cost: 'Free entry (Breakfast ₹120)'
      },
      {
        transitNext: {
          type: 'metro',
          mode: 'Namma Metro Purple Line',
          route: 'Cubbon Park Metro → MG Road Station',
          directions: 'Board Purple Line towards Whitefield. Travel 1 stop to MG Road. Exit Gate 2 onto Brigade Road / Magrath Road.',
          time: '8 mins',
          fare: '₹15'
        }
      },
      {
        phase: '🛍️ City Mall, 🎬 INOX Movie & 🍽️ Lunch',
        time: '11:00 AM - 02:45 PM',
        name: 'Garuda Mall (Magrath Road) & INOX Insignia Cinema',
        zone: 'Magrath Road / Brigade Road',
        activity: 'Explore premier retail fashion, watch a movie at INOX Cinema (Insignia luxury recliners), followed by lunch at Kobe Sizzlers or Barbeque Nation.',
        stayDuration: '3.5 hrs',
        whySpecial: 'Multi-level entertainment with luxury cinema and top-tier dining in central Bangalore.',
        cost: '₹300 - ₹450 (Movie ticket) + ₹400 (Lunch)',
        cinemaInfo: {
          theatreName: 'INOX Garuda Mall, Magrath Road',
          screens: 6,
          bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/inox-garuda-mall-magrath-road/INGA',
          trendingMovies: [
            { title: 'Kantara: Chapter 1', format: 'Dolby Atmos', rating: '9.3/10', lang: 'Kannada / Hindi' },
            { title: 'Avatar: Fire and Ash', format: '3D Atmos', rating: '9.1/10', lang: 'English / Multi' }
          ]
        }
      },
      {
        transitNext: {
          type: 'walk',
          mode: 'Walk down Brigade Road',
          route: 'Garuda Mall → Church Street Cobblestones',
          directions: 'Walk 400m up Magrath Road across Brigade Road straight into Church Street pedestrian avenue.',
          time: '6 mins walk',
          fare: '₹0'
        }
      },
      {
        phase: '☕ Aesthetic Afternoon Cafe & Dessert',
        time: '03:15 PM - 04:45 PM',
        name: 'Champaca Bookstore & Rooftop Cafe (or Matteo Coffea)',
        zone: 'Church Street / Vasanth Nagar',
        activity: 'Relax under avocado tree foliage or on Church Street cobblestone patio with pour-over coffee, iced mochas, and warm chocolate brownies.',
        stayDuration: '1.5 hrs',
        whySpecial: 'Cozy indie book reading, artisanal coffee beans, zero traffic rush.',
        cost: '₹250 per person'
      },
      {
        transitNext: {
          type: 'walk',
          mode: 'Pedestrian Stroll',
          route: 'Cafe → Blossom Book House & Church Street Strip',
          directions: 'Stroll directly down Church Street.',
          time: '2 mins walk',
          fare: '₹0'
        }
      },
      {
        phase: '🌆 Evening Sunset Walk & Vibrant Street',
        time: '05:15 PM - 07:30 PM',
        name: 'Church Street Cobblestones & Blossom Book House',
        zone: 'Church Street',
        activity: 'Browse 3 floors of vintage secondhand novels at Blossom Book House, watch acoustic street performers, and try Italian gelato.',
        stayDuration: '2 hrs',
        whySpecial: 'Buzzing cosmopolitan energy, book hunting, cobblestone European street vibe.',
        cost: 'Free walk + ₹150 gelato'
      },
      {
        transitNext: {
          type: 'auto',
          mode: 'Short Auto Ride',
          route: 'Church Street → Richmond Town Courtyards',
          directions: 'Take a quick 1.5 km auto down Residency Road into leafy Richmond Town.',
          time: '8 mins',
          fare: '₹50'
        }
      },
      {
        phase: '🍷 Night Dinner Dine & Wind Up',
        time: '08:00 PM - 10:30 PM',
        name: 'Olive Beach / Cantan Candlelight Alfresco Dining',
        zone: 'Wood Street, Richmond Town',
        activity: 'Mediterranean mezze platters, wood-fired sourdough pizzas, and candlelight wine in a white-washed Mediterranean villa under bougainvillea.',
        stayDuration: '2.5 hrs',
        whySpecial: 'Intimate fairy-lit courtyard, soothing music, unhurried hospitality to wind up a memorable day.',
        cost: '₹1,200 - ₹1,800 for two'
      }
    ];
  }

  // 6. DYNAMIC FALLBACK FOR ANY OTHER CUSTOM SEARCHED TOWN (Coorg, Ooty, Pondy, etc.)
  const spots = analyzed?.nearbyPlacesInside || [];
  const s1 = spots[0] || { name: `${analyzed?.name || destination} Main Sight`, type: 'Landmark', duration: '2.5 hrs', highlight: 'Signature local attraction' };
  const s2 = spots[1] || { name: `${analyzed?.name || destination} Cultural Center`, type: 'Exploration', duration: '3 hrs', highlight: 'Regional highlights & local dining' };
  const s3 = spots[2] || { name: `${analyzed?.name || destination} Sunset Point`, type: 'Sunset Overlook', duration: '2 hrs', highlight: 'Panoramic golden hour views' };

  return [
    {
      phase: '🌅 Morning Sight & Local Breakfast',
      time: '08:30 AM - 10:30 AM',
      name: s1.name,
      zone: analyzed?.name || destination,
      activity: s1.highlight || `Explore the morning sights and enjoy local breakfast in ${analyzed?.name || destination}.`,
      stayDuration: s1.duration || '2 hrs',
      whySpecial: `The primary landmark that defines ${analyzed?.name || destination}.`,
      cost: 'Free / ₹100'
    },
    {
      transitNext: { type: 'auto', mode: 'Local Transit / Walk', route: `${s1.name} → ${s2.name}`, directions: 'Short local transport or stroll.', time: '12 mins', fare: '₹40' }
    },
    {
      phase: '🏞️ Midday Exploration & Regional Lunch',
      time: '11:00 AM - 02:30 PM',
      name: s2.name,
      zone: analyzed?.name || destination,
      activity: s2.highlight || `Midday discovery and regional lunch feast.`,
      stayDuration: s2.duration || '3 hrs',
      whySpecial: 'Authentic local flavors and core cultural experience.',
      cost: '₹300 lunch'
    },
    {
      transitNext: { type: 'auto', mode: 'Local Auto / Stroll', route: `${s2.name} → Local Cafe`, directions: 'Travel to local relaxation cafe.', time: '10 mins', fare: '₹35' }
    },
    {
      phase: '☕ Afternoon Cafe & Chill',
      time: '03:15 PM - 04:45 PM',
      name: `${analyzed?.name || destination} Artisan Cafe / Tea Room`,
      zone: analyzed?.name || destination,
      activity: 'Relax with artisanal brews, local snacks, and scenic views.',
      stayDuration: '1.5 hrs',
      whySpecial: 'Relaxed unhurried afternoon pacing.',
      cost: '₹180 per person'
    },
    {
      transitNext: { type: 'walk', mode: 'Scenic Walk', route: 'Cafe → Sunset Point', directions: 'Walk to evening promenade.', time: '10 mins', fare: '₹0' }
    },
    {
      phase: '🌆 Evening Sunset Walk & Street Bazaar',
      time: '05:15 PM - 07:30 PM',
      name: s3.name,
      zone: analyzed?.name || destination,
      activity: s3.highlight || 'Watch the sunset and explore local handicraft bazaars.',
      stayDuration: s3.duration || '2 hrs',
      whySpecial: 'Unrivaled sunset views and vibrant evening breeze.',
      cost: 'Free walk'
    },
    {
      transitNext: { type: 'auto', mode: 'Dinner Transit', route: `${s3.name} → Dinner Spot`, directions: 'Short transit to restaurant.', time: '8 mins', fare: '₹40' }
    },
    {
      phase: '🍷 Night Dinner Dine & Wind Up',
      time: '08:00 PM - 10:30 PM',
      name: `Celebrated Dining & Wind Up in ${analyzed?.name || destination}`,
      zone: analyzed?.name || destination,
      activity: `Savor the famous local cuisine (${analyzed?.famousFood ? analyzed.famousFood[0] : 'signature dishes'}) by candlelight to conclude the day.`,
      stayDuration: '2.5 hrs',
      whySpecial: 'Memorable local culinary finale.',
      cost: '₹600 for two'
    }
  ];
}

/**
 * MULTI-DAY ENGINE: STRICTLY ACCURATE PER DESTINATION!
 */
function generateAccurateMultiDayPlan(analyzed, destination, companion, selectedVibes, dayIndex, totalDays) {
  const q = (analyzed?.name || destination || '').toLowerCase();

  // VARKALA MULTI-DAY CIRCUIT
  if (q.includes('varkala')) {
    const varkalaDays = [
      // Day 1: North Cliff Promenade, Black Sand Beach & Darjeeling Cafe Sunset
      [
        { time: '09:00 AM - 12:30 PM', name: 'Papanasam Beach & Sacred Mineral Springs', zone: 'South Cliff, Varkala', activity: 'Bathe in mountain mineral springs cascading down the cliff face, peaceful morning swim.', stayDuration: '3.5 hrs', whySpecial: 'Cleansing waters and soft golden sand.', cost: 'Free' },
        { transitNext: { type: 'walk', mode: 'Cliff Walk', route: 'Papanasam → Black Sand Beach', directions: 'Walk northwards along cliff path.', time: '12 mins', fare: '₹0' } },
        { time: '01:30 PM - 04:30 PM', name: 'Black Sand Beach & Surfing Cove', zone: 'North Varkala', activity: 'Black volcanic sands, ocean swimming, and fresh seafood lunch at beach shacks.', stayDuration: '3 hrs', whySpecial: 'Clean uncrowded surf beach.', cost: '₹250 lunch' },
        { transitNext: { type: 'walk', mode: 'Steps', route: 'Beach → North Cliff', directions: 'Walk up stone steps onto clifftop.', time: '5 mins', fare: '₹0' } },
        { time: '05:30 PM - 09:30 PM', name: 'North Cliff Sunset Promenade & Darjeeling Cafe', zone: 'North Cliff Walkway', activity: 'Watch dolphins leaping at sunset from floor cushions, thin-crust pizza & live acoustic guitar.', stayDuration: '4 hrs', whySpecial: 'Varkala’s signature clifftop experience.', cost: '₹450' }
      ],
      // Day 2: 2000-Year Temple & Surf Lessons
      [
        { time: '08:30 AM - 11:00 AM', name: 'Janardhana Swami 2000-Year Temple', zone: 'Temple Junction, Varkala', activity: 'Ancient coastal temple dedicated to Lord Vishnu with massive Dutch bell and sacred banyan trees.', stayDuration: '2.5 hrs', whySpecial: 'Sacred coastal heritage dating back 20 centuries.', cost: 'Free' },
        { transitNext: { type: 'auto', mode: 'Auto', route: 'Temple → Main Cliff', directions: 'Short auto down beach road.', time: '8 mins', fare: '₹60' } },
        { time: '12:00 PM - 04:00 PM', name: 'Varkala Surf School & Paddleboarding', zone: 'North Cliff Beach', activity: 'Take a 2-hour beginner surf lesson with certified local instructors.', stayDuration: '4 hrs', whySpecial: 'Warm waters and consistent gentle waves for beginners.', cost: '₹1,000 lesson' },
        { transitNext: { type: 'walk', mode: 'Walk', route: 'Beach → Cafe del Mar', directions: 'Walk up onto cliff promenade.', time: '5 mins', fare: '₹0' } },
        { time: '05:30 PM - 09:30 PM', name: 'Cafe del Mar Sunset Terrace Dinner', zone: 'North Cliff Edge', activity: 'Candlelight seafood barbecue overlooking crashing waves under night stars.', stayDuration: '4 hrs', whySpecial: 'Stunning open sea view.', cost: '₹600 for two' }
      ],
      // Day 3: Jatayu Earth's Center (Giant Sculpture & Cable Car)
      [
        { time: '08:30 AM - 01:30 PM', name: 'Jatayu Earth’s Center (World’s Largest Bird Sculpture)', zone: 'Chadayamangalam (28 km from Varkala)', activity: 'Ride high-altitude cable car ropeway to mountaintop, explore the 200-ft bird sculpture, 6D theater, and rock adventure park.', stayDuration: '5 hrs', whySpecial: 'World record mythical bird sculpture perched dramatically on rugged granite hill.', cost: '₹550 entry + ropeway' },
        { transitNext: { type: 'auto', mode: 'Taxi / Rental Scooter', route: 'Jatayu → Varkala', directions: 'Scenic drive through green Kerala countryside.', time: '40 mins', fare: '₹200' } },
        { time: '03:30 PM - 06:30 PM', name: 'Kappil Lake & Beach (Backwaters Meet The Sea)', zone: 'Kappil (7 km north)', activity: 'Rent a paddleboat or kayak where serene freshwater backwaters meet open turquoise sea.', stayDuration: '3 hrs', whySpecial: 'Unique geological estuary of backwater and ocean.', cost: '₹150' },
        { time: '07:30 PM - 10:00 PM', name: 'Abba Restaurant & Bakery Dinner', zone: 'North Cliff', activity: 'Swedish cinnamon buns, fresh red snapper fish, and chilled ginger lemonade.', stayDuration: '2.5 hrs', whySpecial: 'Unrushed clifftop dining.', cost: '₹500 for two' }
      ],
      // Day 4: Anjengo Fort & Lighthouse
      [
        { time: '09:00 AM - 12:30 PM', name: 'Anjengo (Anchuthengu) 17th Century Fort & Lighthouse', zone: 'Anjengo (12 km south)', activity: 'Climb 130-ft historic lighthouse for panoramic views of palm canopies, visit 1696 British East India Company fort.', stayDuration: '3.5 hrs', whySpecial: 'Historical coastal bastion surrounded by fishing boats.', cost: '₹20' },
        { transitNext: { type: 'auto', mode: 'Auto', route: 'Anjengo → Edava Lagoon', directions: 'Coastal road drive.', time: '15 mins', fare: '₹80' } },
        { time: '01:30 PM - 05:00 PM', name: 'Edava Beach & Blue Lagoon Canoe Drift', zone: 'Edava Village', activity: 'Uncrowded white sand beach, quiet village backwater canal, watch local fishermen.', stayDuration: '3.5 hrs', whySpecial: 'Completely offbeat, tranquil fishing sanctuary.', cost: '₹150' },
        { time: '06:00 PM - 09:30 PM', name: 'Sunset Yoga & Ayurvedic Herbal Massage', zone: 'North Cliff Sanctuary', activity: 'Sunset rooftop yoga session followed by traditional Kerala Abhyanga massage.', stayDuration: '3.5 hrs', whySpecial: 'Deep relaxation and wellness.', cost: '₹800' }
      ],
      // Day 5: Kathakali Arts & Golden Sunset
      [
        { time: '09:00 AM - 01:00 PM', name: 'Odayam Beach & Secret Coastal Path', zone: 'Odayam (between North & Black Beach)', activity: 'Explore quiet hidden coastal trails and swim in shallow reef pools.', stayDuration: '4 hrs', whySpecial: 'Zero crowds, tranquil turquoise water.', cost: 'Free' },
        { time: '05:30 PM - 07:30 PM', name: 'Varkala Cultural Center: Kathakali & Kalaripayattu', zone: 'Temple Road', activity: 'Watch intricate facial makeup application and live Kathakali dance drama and martial arts.', stayDuration: '2 hrs', whySpecial: 'Classical Kerala performing arts heritage.', cost: '₹300 entry' },
        { time: '08:00 PM - 10:30 PM', name: 'Rock n Roll Cliff Lounge Dinner', zone: 'Middle Cliff', activity: 'Acoustic beach rock, mocktails, and fresh catch tiger prawns on the grill.', stayDuration: '2.5 hrs', whySpecial: 'Lively music and sea breeze.', cost: '₹650' }
      ],
      // Day 6: Ponnumthuruthu Golden Island
      [
        { time: '09:00 AM - 01:30 PM', name: 'Ponnumthuruthu (Golden Island) Country Canoe Ride', zone: 'Nedunganda (10 km)', activity: 'Board small wooden country canoe across Anjengo backwaters to a lush uninhabited island with 100-year-old Shiva temple.', stayDuration: '4.5 hrs', whySpecial: 'Hidden island sanctuary hidden by dense coconut groves.', cost: '₹300 boat' },
        { time: '04:00 PM - 07:30 PM', name: 'Tibetan Silver Jewelry & Souvenir Shopping', zone: 'North Cliff Strip', activity: 'Browse handmade gemstone rings, singing bowls, incense, and linen dresses.', stayDuration: '3.5 hrs', whySpecial: 'Unique Himalayan-coastal craft market.', cost: 'Shopping' },
        { time: '08:00 PM - 10:30 PM', name: 'Cliffside Farewell Candlelight Dinner', zone: 'North Cliff Promontory', activity: 'Final dinner overlooking waves crashing against the illuminated laterite rocks.', stayDuration: '2.5 hrs', whySpecial: 'Unforgettable farewell finale.', cost: '₹800' }
      ],
      // Day 7: Morning Ocean Meditation & Return
      [
        { time: '07:00 AM - 10:30 AM', name: 'Sunrise Ocean Meditation & Morning Waves', zone: 'Papanasam Beach', activity: 'Watch early morning sun rise behind palm trees, gentle barefoot walk along the surf.', stayDuration: '3.5 hrs', whySpecial: 'Peaceful closing memory.', cost: 'Free' },
        { time: '11:30 AM - 02:00 PM', name: 'Final Brunch at Coffee Temple', zone: 'North Cliff', activity: 'Iced pour-overs, fresh fruit bowls, and check-out.', stayDuration: '2.5 hrs', whySpecial: 'Relaxed unhurried departure.', cost: '₹250' },
        { time: '03:00 PM - 06:00 PM', name: 'Varkala Sivagiri Railway Station (VAK) / Airport Return', zone: 'Transit Hub', activity: 'Board express train or cab to Trivandrum Airport.', stayDuration: 'Departure', whySpecial: 'Seamless travel.', cost: '₹100 auto' }
      ]
    ];
    return varkalaDays[(dayIndex - 1) % varkalaDays.length];
  }

  // BANGALORE MULTI-DAY CIRCUIT (Each day is a distinct zone!)
  if (isBangaloreLocation(analyzed) || q.includes('bangalore') || q.includes('bengaluru')) {
    // If the user specifically searched for Mahalakshmi Layout, put Mahalakshmi on Day 1
    const isSpecificMahalakshmi = q.includes('mahalakshmi') || q.includes('orion') || q.includes('iskcon');

    const mahalakshmiDayStops = [
      { time: '08:30 AM - 10:30 AM', name: 'ISKCON Sri Radha Krishna Temple (Hare Krishna Hill)', zone: 'Mahalakshmi Layout', activity: 'Gold-plated sanctum, morning chanting halls, and sweet pongal prasadam.', stayDuration: '2 hrs', whySpecial: 'Architectural wonder and peaceful morning start.', cost: 'Free (Prasadam ₹50)' },
      { transitNext: { type: 'walk', mode: 'Walk', route: 'ISKCON → Orion Mall', directions: 'Walk 400m across Dr. Rajkumar Road into Orion Mall lakeside entrance.', time: '5 mins', fare: '₹0' } },
      { time: '11:00 AM - 02:45 PM', name: 'Orion Mall & PVR IMAX Cinema', zone: 'Brigade Gateway', activity: 'Catch a movie at PVR IMAX, browse premium retail, and lunch at Chili’s or Punjab Grill.', stayDuration: '3.5 hrs', whySpecial: '11-screen multiplex with IMAX Laser and lakefront dining.', cost: '₹350 Movie + ₹400 Lunch', cinemaInfo: { theatreName: 'PVR Orion Mall (IMAX & 4DX)', bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/pvr-orion-mall-dr-rajkumar-road-rajajinagar/PVOR', trendingMovies: [{ title: 'Kantara: Chapter 1', format: 'IMAX 2D', rating: '9.3/10' }, { title: 'Avatar: Fire and Ash', format: 'IMAX 3D', rating: '9.1/10' }] } },
      { transitNext: { type: 'walk', mode: 'Walk', route: 'Orion Mall → Lakeside Promenade', directions: 'Step out onto the open-air wooden promenade.', time: '2 mins', fare: '₹0' } },
      { time: '03:15 PM - 05:00 PM', name: 'The Big Kahuna & Lakeside Promenade Cafe', zone: 'Orion Lakeside', activity: 'Iced caramel macchiato and waffles by the fountain lake.', stayDuration: '1.5 hrs', whySpecial: 'Scenic lake view in central Bangalore.', cost: '₹250' },
      { transitNext: { type: 'walk', mode: 'Walk', route: 'Lakeside → WTC Elevator', directions: 'Enter World Trade Center tower.', time: '3 mins', fare: '₹0' } },
      { time: '05:30 PM - 08:00 PM', name: 'Brigade Gateway Lakeside Sunset Walk', zone: 'Mahalakshmi', activity: 'Watch golden sunset reflect on the water, browse pop-up kiosks.', stayDuration: '2.5 hrs', whySpecial: 'Pedestrian lake breeze.', cost: 'Free' },
      { time: '08:15 PM - 10:30 PM', name: 'High Ultra Lounge (31st Floor WTC)', zone: 'Brigade Gateway (430 ft)', activity: 'Pan-Asian dinner with 360-degree night skyline views over Bangalore.', stayDuration: '2.5 hrs', whySpecial: 'Highest open-air rooftop dinner in South India.', cost: '₹1,200 for two' }
    ];

    const centralBangaloreDayStops = [
      { time: '08:30 AM - 10:30 AM', name: 'Cubbon Park Mahogany Groves & State Central Library', zone: 'Cubbon Park (Central CBD)', activity: 'Morning stroll under 100-year-old bamboo groves, admire 1915 red-brick Seshadri Iyer Memorial Hall, breakfast at Airlines Hotel.', stayDuration: '2 hrs', whySpecial: 'Lush green lungs, crisp morning air, zero vehicle noise.', cost: 'Free (Breakfast ₹120)' },
      { transitNext: { type: 'metro', mode: 'Purple Line Metro', route: 'Cubbon Park → MG Road', directions: '1 stop on Purple Line to MG Road. Exit Gate 2 onto Magrath Road.', time: '8 mins', fare: '₹15' } },
      { time: '11:00 AM - 02:45 PM', name: 'Garuda Mall (Magrath Road) & INOX Cinema', zone: 'Magrath Road / Brigade Road', activity: 'Explore retail fashion, watch a movie at INOX Insignia, lunch at Kobe Sizzlers.', stayDuration: '3.5 hrs', whySpecial: 'Luxury cinema and dining in heart of central Bangalore.', cost: '₹300 Movie + ₹400 Lunch', cinemaInfo: { theatreName: 'INOX Garuda Mall, Magrath Road', bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/inox-garuda-mall-magrath-road/INGA', trendingMovies: [{ title: 'Kantara: Chapter 1', format: 'Dolby Atmos', rating: '9.3/10' }, { title: 'Avatar: Fire and Ash', format: '3D Atmos', rating: '9.1/10' }] } },
      { transitNext: { type: 'walk', mode: 'Walk', route: 'Garuda Mall → Church Street', directions: 'Walk 400m up Magrath Road into Church Street cobblestone avenue.', time: '6 mins', fare: '₹0' } },
      { time: '03:15 PM - 04:45 PM', name: 'Champaca Bookstore & Rooftop Cafe', zone: 'Church Street / Vasanth Nagar', activity: 'Relax with artisanal pour-overs under avocado tree canopy, browse curated indie literature.', stayDuration: '1.5 hrs', whySpecial: 'Peaceful indie sanctuary away from traffic.', cost: '₹250 per person' },
      { transitNext: { type: 'walk', mode: 'Walk', route: 'Cafe → Blossom Books', directions: 'Walk 200m down Church Street.', time: '2 mins', fare: '₹0' } },
      { time: '05:15 PM - 07:30 PM', name: 'Church Street Cobblestones & Blossom Book House', zone: 'Church Street', activity: 'Browse 3 floors of vintage books, listen to live street buskers, Italian gelato.', stayDuration: '2 hrs', whySpecial: 'Cosmopolitan pedestrian European street energy.', cost: 'Free walk + ₹150 gelato' },
      { time: '08:00 PM - 10:30 PM', name: 'Olive Beach Candlelight Alfresco Dining', zone: 'Wood Street, Richmond Town', activity: 'Mediterranean dining under bougainvillea in a white-washed villa with wine and wood-fired pizza.', stayDuration: '2.5 hrs', whySpecial: 'Intimate fairy-lit courtyard finale.', cost: '₹1,400 for two' }
    ];

    const bangaloreMultiDays = [
      // Day 1
      isSpecificMahalakshmi ? mahalakshmiDayStops : centralBangaloreDayStops,
      // Day 2: Malleshwaram & Mantri Square
      [
        { time: '08:00 AM - 10:00 AM', name: 'CTR (Central Tiffin Room / Shri Sagar)', zone: 'Margosa Rd, Malleshwaram 7th Cross', activity: 'Crispiest Benne Masala Dosa in India drenched in white butter, Mangalore bajjis, hot filter coffee.', stayDuration: '2 hrs', whySpecial: 'The undisputed king of crispy golden dosas since 1920.', cost: '₹120 per person' },
        { transitNext: { type: 'walk', mode: 'Walk', route: 'CTR → Temple Street', directions: 'Walk 400m down 8th Cross flower market into Temple Street.', time: '5 mins', fare: '₹0' } },
        { time: '10:15 AM - 11:45 AM', name: 'Kaadu Malleshwara Temple & Nandi Teertha', zone: 'Malleshwaram 15th Cross', activity: '17th-century stone Shiva temple with subterranean freshwater spring flowing continuously from Nandi mouth.', stayDuration: '1.5 hrs', whySpecial: 'Ancient green stone serenity and sacred temple tank.', cost: 'Free' },
        { transitNext: { type: 'auto', mode: 'Auto / Metro', route: 'Temple St → Mantri Square', directions: 'Short auto down Margosa Road to Sampige Road.', time: '8 mins', fare: '₹40' } },
        { time: '12:00 PM - 03:00 PM', name: 'Mantri Square Mall & INOX Cinema', zone: 'Sampige Road', activity: 'Browse 250+ retail stores, watch a movie at INOX, and lunch at Rajdhani Thali.', stayDuration: '3 hrs', whySpecial: 'Direct private skywalk from Green Line Metro train platform.', cost: '₹280 Movie + ₹350 Lunch', cinemaInfo: { theatreName: 'INOX Mantri Square', bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/inox-mantri-square-mall-malleshwaram/INMS', trendingMovies: [{ title: 'Dune: Part Three', format: 'Atmos', rating: '9.4/10' }, { title: 'Toxic', format: 'P[XL]', rating: '9.0/10' }] } },
        { transitNext: { type: 'auto', mode: 'Auto', route: 'Mantri Square → Sankey Tank', directions: 'Quick 1.5 km auto to Sadashivanagar gate.', time: '8 mins', fare: '₹45' } },
        { time: '03:30 PM - 05:30 PM', name: 'Sankey Tank Lakeside Walk & Paddle Boating', zone: 'Sadashivanagar', activity: 'Walk shaded 2.5 km perimeter track under mahogany trees, watch painted storks and ducks.', stayDuration: '2 hrs', whySpecial: 'Tranquil water body built in 1882.', cost: 'Free (Boating ₹60)' },
        { time: '06:00 PM - 08:00 PM', name: 'Malleshwaram 8th Cross Flower & Spice Walk', zone: '8th Cross Market', activity: 'Aroma of fresh jasmine garlands, Mysore sandal soaps, and filter coffee at Veena Stores.', stayDuration: '2 hrs', whySpecial: 'Vibrant authentic old Bangalore street culture.', cost: '₹100 snacks' },
        { time: '08:30 PM - 10:30 PM', name: 'Halli Mane Traditional Village Feast', zone: 'Malleshwaram 3rd Cross', activity: 'Traditional Karnataka Akki Rotti, Holige, and unlimited banana leaf meal.', stayDuration: '2 hrs', whySpecial: 'Rural authentic Karnataka culinary experience.', cost: '₹260 per person' }
      ],
      // Day 3: South Culture & Koramangala
      [
        { time: '08:30 AM - 10:30 AM', name: 'Vidyarthi Bhavan (Gandhi Bazaar)', zone: 'Basavanagudi', activity: 'Heritage crispy thick ghee masala dosa served by waiters balancing 20 plates stacked on arms.', stayDuration: '2 hrs', whySpecial: 'Vintage nostalgia running since 1943.', cost: '₹110 per person' },
        { transitNext: { type: 'walk', mode: 'Walk', route: 'Gandhi Bazaar → Bull Temple', directions: 'Stroll 600m along leafy Bull Temple Road.', time: '8 mins', fare: '₹0' } },
        { time: '10:45 AM - 12:30 PM', name: 'Dodda Basavana Gudi (Bull Temple) & Bugle Rock', zone: 'Basavanagudi', activity: 'Massive monolithic granite bull carved in 1537 from a single stone, set amidst volcanic rock formations.', stayDuration: '1.5 hrs', whySpecial: 'One of the world’s largest Nandi monolithic sculptures.', cost: 'Free' },
        { transitNext: { type: 'metro', mode: 'Green Line Metro', route: 'National College → South End Circle', directions: 'Quick 2 stops on Green Line.', time: '6 mins', fare: '₹15' } },
        { time: '01:00 PM - 03:30 PM', name: 'Nexus (Forum) Mall Koramangala & PVR Cinema', zone: 'Hosur Road, Koramangala', activity: 'Explore Bangalore’s first historic mall, catch a movie at PVR, and lunch at Transit Food Lounge.', stayDuration: '2.5 hrs', whySpecial: 'Vibrant college hub with premier PVR multiplex.', cost: '₹300 Movie + ₹350 Lunch', cinemaInfo: { theatreName: 'PVR Forum Koramangala', bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/pvr-forum-mall-koramangala/PVRK', trendingMovies: [{ title: 'Kantara: Chapter 1', format: 'P[XL]', rating: '9.3/10' }, { title: 'Moana 2', format: 'Atmos', rating: '8.9/10' }] } },
        { transitNext: { type: 'auto', mode: 'Rapido / Auto', route: 'Forum Mall → 4th Block', directions: 'Ride into Koramangala 4th Block tree avenues.', time: '8 mins', fare: '₹40' } },
        { time: '04:00 PM - 06:00 PM', name: 'The Hole in the Wall Cafe & Terrace Bakes', zone: 'Koramangala 4th Block', activity: 'Blueberry pancakes, waffles, and iced cold brew on a lush garden terrace.', stayDuration: '2 hrs', whySpecial: 'Bangalore’s most famous youth garden cafe.', cost: '₹300' },
        { transitNext: { type: 'metro', mode: 'Green Line Metro', route: 'South End Circle → National College', directions: 'Green Line south into Basavanagudi.', time: '10 mins', fare: '₹18' } },
        { time: '07:30 PM - 10:30 PM', name: 'VV Puram Food Street (Thindi Beedi) Night Crawl', zone: 'VV Puram (Basavanagudi)', activity: 'Hot paddus with red chutney, Congress bun butter, hot badam milk, and spiral potatoes.', stayDuration: '3 hrs', whySpecial: 'Bangalore’s ultimate midnight street food carnival.', cost: '₹180 per person' }
      ],
      // Day 4: East Bangalore Roasters & Whitefield
      [
        { time: '09:00 AM - 11:30 AM', name: 'Indiranagar 100ft Road Cafe Crawl & Artisanal Coffee', zone: 'Indiranagar 12th Main', activity: 'Artisan pour-overs at Third Wave Coffee Roasters, freshly baked sourdough at Glen’s Bakehouse.', stayDuration: '2.5 hrs', whySpecial: 'The capital of Indian specialty coffee culture.', cost: '₹350' },
        { transitNext: { type: 'metro', mode: 'Purple Line Metro', route: 'Indiranagar → Singayyanapalya', directions: 'Board Purple Line eastwards towards Whitefield.', time: '20 mins', fare: '₹30' } },
        { time: '12:00 PM - 03:30 PM', name: 'Phoenix Marketcity & VR Bengaluru (PVR IMAX with Laser)', zone: 'Whitefield Main Road', activity: 'Watch an epic blockbuster on Bangalore’s largest IMAX Laser screen, luxury shopping, and lunch at Burma Burma.', stayDuration: '3.5 hrs', whySpecial: '16 screens with IMAX Laser and open-air concert courtyard.', cost: '₹450 Movie + ₹500 Lunch', cinemaInfo: { theatreName: 'PVR VR Bengaluru & Phoenix', bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/pvr-vr-bengaluru-whitefield-road/PVRB', trendingMovies: [{ title: 'Dune: Part Three', format: 'IMAX Laser', rating: '9.4/10' }, { title: 'Avatar: Fire and Ash', format: '4DX 3D', rating: '9.1/10' }] } },
        { transitNext: { type: 'auto', mode: 'Auto', route: 'Phoenix → Ulsoor Lake', directions: 'Drive back along Old Madras Road.', time: '25 mins', fare: '₹120' } },
        { time: '04:30 PM - 06:30 PM', name: 'Ulsoor Lake Promenade & Gurdwara Sunset', zone: 'Ulsoor / Halasuru', activity: 'Stroll around tree-shaded islands in the lake and admire the golden dome of Sri Guru Singh Sabha.', stayDuration: '2 hrs', whySpecial: 'Historic 16th-century lake built by Kempe Gowda.', cost: 'Free' },
        { transitNext: { type: 'walk', mode: 'Walk', route: 'Ulsoor → 100ft Road', directions: 'Short auto into Indiranagar.', time: '10 mins', fare: '₹50' } },
        { time: '07:30 PM - 10:30 PM', name: 'Toit Brewpub (Indiranagar)', zone: '100ft Road', activity: 'Wood-fired sourdough pizza, craft cider (Tintin Wit), and lively evening banter with friends.', stayDuration: '3 hrs', whySpecial: 'India’s pioneer craft microbrewery.', cost: '₹800 per person' }
      ],
      // Day 5: Turahalli / Bannerghatta & Vega City
      [
        { time: '07:30 AM - 10:30 AM', name: 'Turahalli Scrub Forest Hill & Boulder Sunrise', zone: 'Kanakapura Road', activity: 'Morning rock scramble on granite boulders overlooking Bangalore’s southern horizons.', stayDuration: '3 hrs', whySpecial: 'Bangalore’s last surviving natural scrub forest.', cost: 'Free' },
        { transitNext: { type: 'auto', mode: 'Auto / Cab', route: 'Turahalli → Bannerghatta', directions: 'Drive via NICE Road connector.', time: '25 mins', fare: '₹180' } },
        { time: '11:15 AM - 02:30 PM', name: 'Bannerghatta National Park Safari & Butterfly Dome', zone: 'Bannerghatta', activity: 'AC bus safari into protected forest spotting Bengal tigers, lions, and circular butterfly conservatory.', stayDuration: '3.5 hrs', whySpecial: 'Encounter big cats roaming freely in open wilderness.', cost: '₹380 entry' },
        { transitNext: { type: 'auto', mode: 'Auto up Bannerghatta Rd', route: 'Bannerghatta → Vega City Mall', directions: 'Straight 12 km drive north.', time: '20 mins', fare: '₹140' } },
        { time: '03:15 PM - 06:30 PM', name: 'Vega City Mall & PVR Superplex (12 Screens)', zone: 'Bannerghatta Main Road / BTM', activity: 'Watch an evening movie in 4DX motion recliners, followed by coffee and snack crawl.', stayDuration: '3 hrs', whySpecial: '12-screen Superplex with IMAX, 4DX, and luxury recliners.', cost: '₹350 Movie + ₹200 snacks', cinemaInfo: { theatreName: 'PVR Superplex Vega City Mall', bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/pvr-superplex-vega-city-mall-bannerghatta-road/PVVC', trendingMovies: [{ title: 'Kantara: Chapter 1', format: 'IMAX Laser', rating: '9.3/10' }, { title: 'Avatar: Fire and Ash', format: '4DX 3D', rating: '9.1/10' }] } },
        { time: '07:30 PM - 10:00 PM', name: 'Ranga Shankara Cultural Theater Cafe Dinner', zone: 'JP Nagar 2nd Phase', activity: 'Famous hot Sabudana Vada, ginger chai, and dinner at Chianti Italian restaurant.', stayDuration: '2.5 hrs', whySpecial: 'Soulful theatrical arts hub of South Bangalore.', cost: '₹450' }
      ],
      // Day 6: Nandi Hills Mountain Sunrise
      [
        { time: '05:00 AM - 08:30 AM', name: 'Nandi Hills Sea-of-Clouds Sunrise & Tipu’s Drop (4,850 ft)', zone: 'Chikkaballapur (60 km from BLR)', activity: 'Watch spectacular sunrise above thick white clouds blanket at 4,850 ft, crisp 12°C mountain breeze.', stayDuration: '3.5 hrs', whySpecial: 'Ranked top morning sunrise spectacle in Karnataka.', cost: '₹20 entry + ₹100 toll' },
        { transitNext: { type: 'auto', mode: 'Drive down ghat', route: 'Nandi Hills summit → Nandi Village base', directions: 'Descend 8 km hill road.', time: '15 mins', fare: '₹50' } },
        { time: '09:00 AM - 10:45 AM', name: 'Bhoga Nandeeshwara 1000-Year Ancient Temple Pond', zone: 'Nandi Village Base', activity: 'Marvel at 9th-century Nolamba and Chola dynasty stone carvings and massive stepped Kalyani water pond.', stayDuration: '1.5 hrs', whySpecial: 'One of the oldest surviving intact temples in South India.', cost: 'Free' },
        { transitNext: { type: 'auto', mode: 'Short Drive', route: 'Nandi Village → Grover Zampa', directions: 'Scenic rural road past grape farms.', time: '12 mins', fare: '₹60' } },
        { time: '11:30 AM - 02:30 PM', name: 'Grover Zampa Vineyard Tour & Cellar Wine Tasting Lunch', zone: 'Devanahalli Foothills', activity: 'Oak barrel room tour, vineyard stroll, wine tasting session, and French-inspired lunch.', stayDuration: '3 hrs', whySpecial: 'Pioneer Indian wine estate with peaceful mountain backdrop.', cost: '₹850 per person' },
        { time: '04:00 PM - 06:30 PM', name: 'Indian Paratha Company (NH44 Highway Stop)', zone: 'Bellary Road Highway', activity: 'Crisp aloo cheese parathas and chai before driving back into Bangalore.', stayDuration: '2.5 hrs', whySpecial: 'Iconic highway biker pitstop.', cost: '₹220' }
      ],
      // Day 7: Ramanagara Sholay Rocks Adventure
      [
        { time: '08:00 AM - 11:30 AM', name: 'Ramadevara Betta Sanctuary (Sholay Boulder Cliffs)', zone: 'Ramanagara District (50 km)', activity: 'Trek up granite monolithic boulders where the movie Sholay was filmed; spot endangered long-billed vultures.', stayDuration: '3.5 hrs', whySpecial: 'Rugged rock scrambling and panoramic 360-degree hill vistas.', cost: '₹25 entry' },
        { transitNext: { type: 'auto', mode: 'Highway Drive', route: 'Ramadevara Betta → Janapada Loka', directions: 'Drive 6 km along Bangalore-Mysore expressway.', time: '10 mins', fare: '₹50' } },
        { time: '12:00 PM - 02:30 PM', name: 'Kamat Lokaruchi Authentic Jolada Rotti Oota Feast', zone: 'Mysore Highway, Ramanagara', activity: 'Unlimited rural Karnataka meal: jowar rotti with butter, brinjal curry (enne gai), sprouts, and sweet payasam.', stayDuration: '2.5 hrs', whySpecial: 'Undisputed culinary temple of authentic rural Karnataka food.', cost: '₹280 per person' },
        { time: '03:00 PM - 05:30 PM', name: 'Janapada Loka (Folk Lore World Heritage Village)', zone: 'Ramanagara', activity: '15-acre open-air museum preserving 5,000 folk artifacts, puppet shows, and live village potter wheels.', stayDuration: '2.5 hrs', whySpecial: 'Preserves the living soul of ancient Kannada village arts.', cost: '₹50 entry' },
        { time: '06:00 PM - 08:30 PM', name: 'Manchanabele Dam Scenic Reservoir Sunset & Return', zone: 'Arkavathi River Backwaters', activity: 'Watch golden hour over tranquil water reflections before relaxed drive back to Bangalore.', stayDuration: '2.5 hrs', whySpecial: 'Peaceful, uncrowded backwaters wind-up.', cost: 'Free' }
      ]
    ];
    return bangaloreMultiDays[(dayIndex - 1) % bangaloreMultiDays.length];
  }

  // FALLBACK DYNAMIC STOPS FOR OTHER REGIONS
  const spots = analyzed?.nearbyPlacesInside || [];
  const curSpot = spots[(dayIndex - 1) % spots.length] || { name: `${analyzed?.name || destination} Discovery`, type: 'Explore', duration: '3 hrs', highlight: 'Signature local experience' };
  
  return [
    { time: '08:30 AM - 11:30 AM', name: curSpot.name, zone: analyzed?.name || destination, activity: curSpot.highlight || `Explore the morning sights of ${curSpot.name}.`, stayDuration: curSpot.duration || '3 hrs', whySpecial: 'Core attraction of the region.', cost: '₹150' },
    { transitNext: { type: 'auto', mode: 'Local Transport', route: `${curSpot.name} → Local Dining`, directions: 'Travel to local dining spot.', time: '15 mins', fare: '₹50' } },
    { time: '12:30 PM - 03:30 PM', name: `${analyzed?.name || destination} Traditional Lunch & Market`, zone: analyzed?.name || destination, activity: 'Savor authentic regional dishes and browse local spice stalls.', stayDuration: '3 hrs', whySpecial: 'Authentic local immersion.', cost: '₹300' },
    { time: '05:00 PM - 07:30 PM', name: `${analyzed?.name || destination} Sunset Viewpoint`, zone: analyzed?.name || destination, activity: 'Golden hour photography and evening breeze.', stayDuration: '2.5 hrs', whySpecial: 'Scenic sunset panorama.', cost: 'Free' }
  ];
}

function getAccurateDayTitle(analyzed, destination, companion, dayNum, totalDays) {
  const q = (analyzed?.name || destination || '').toLowerCase();
  
  if (q.includes('varkala')) {
    const titles = [
      'Day 1: North Cliff Promenade, Black Sand Beach & Darjeeling Cafe Sunset',
      'Day 2: Sacred Papanasam Mineral Springs & Varkala Surf Lessons',
      'Day 3: Jatayu Earth’s Center (Giant Hill Sculpture & Cable Car)',
      'Day 4: Anjengo 17th-Century British Fort, Lighthouse & Edava Lagoon',
      'Day 5: Odayam Hidden Beach & Kathakali Traditional Cultural Center',
      'Day 6: Ponnumthuruthu Golden Island Country Canoe Exploration',
      'Day 7: Sunrise Ocean Meditation, Tibetan Crafts & Departure'
    ];
    return titles[dayNum - 1] || `Day ${dayNum}: Varkala Discoveries`;
  }

  if (q.includes('kerala')) {
    const titles = [
      'Day 1: Fort Kochi Colonial Lanes, Art Biennale & Harbourside',
      'Day 2: Scenic Mountain Climb to Munnar & Tea Valley Mist',
      'Day 3: Kolukkumalai Cloud Sunrise & Tea Plantation Hikes',
      'Day 4: Thekkady & Periyar Wildlife Safari & Spice Trails',
      'Day 5: Alleppey Backwaters & Country Canoe Village Drift',
      'Day 6: Varkala Red Laterite Cliffs, Yoga & Sunset Cafes',
      'Day 7: Papanasam White Sand Beach & Return Journey'
    ];
    return titles[dayNum - 1] || `Day ${dayNum}: Kerala Discoveries`;
  }

  const isSpecificMahalakshmi = q.includes('mahalakshmi') || q.includes('orion') || q.includes('iskcon');

  const bTitles = [
    isSpecificMahalakshmi 
      ? 'Day 1: The Iconic Cluster: ISKCON Temple, Orion Lakeside Mall & PVR IMAX'
      : 'Day 1: Central Heritage & Boulevard: Cubbon Park, Garuda Mall INOX & Church Street',
    'Day 2: North Heritage: CTR Butter Dosa, Ancient Stone Temples & Mantri Square',
    'Day 3: South Culture: Vidyarthi Bhavan, Bull Temple & Koramangala Cafes',
    'Day 4: East Hub: Indiranagar Specialty Roasters, Phoenix Marketcity & Toit',
    'Day 5: Nature & Thrills: Turahalli Scrub Forest, Tiger Safari & Vega City PVR',
    'Day 6: Mountain Day Trip: Nandi Hills Cloud Sunrise & Grover Vineyard Tasting',
    'Day 7: Adventure Day Trip: Ramanagara Sholay Boulders & Rural Folk Feast'
  ];
  return bTitles[dayNum - 1] || `Day ${dayNum}: Curated City Explorations`;
}

function getAccurateDayTheme(analyzed, destination, dayNum) {
  const q = (analyzed?.name || destination || '').toLowerCase();

  if (q.includes('varkala')) {
    const themes = [
      'Bohemian Cliff Walk & Black Sand Surf',
      'Sacred Spring Waters & Turquoise Waves',
      'World-Record Mountaintop Sculpture & Cable Car',
      'Colonial Coastal Bastions & Estuary Backwaters',
      'Hidden Sands & Classical Kerala Performing Arts',
      'Uninhabited Golden Island Backwater Drift',
      'Peaceful Ocean Horizon Farewell'
    ];
    return themes[dayNum - 1] || 'Coastal Discovery';
  }

  if (q.includes('kerala')) {
    const themes = [
      'Colonial Art & Harbor History',
      'Misty Mountain Ascent & Tea Terraces',
      'Highest Tea Peak Sunrise in Asia',
      'Wild Jungle Sanctuary & Spices',
      'Silent Backwater Village Canoe Drift',
      'Bohemian Cliff Sunset & Surfing',
      'Coastal Relaxation & Departure'
    ];
    return themes[dayNum - 1] || 'Regional Discovery';
  }

  const isSpecificMahalakshmi = q.includes('mahalakshmi') || q.includes('orion') || q.includes('iskcon');

  const bThemes = [
    isSpecificMahalakshmi
      ? 'Spiritual Grandeur, Lakeside Mall & IMAX Cinema'
      : 'Botanical Heritage, Indie Books & Candlelight Courtyards',
    'Nostalgic 1920s Tiffin & Sacred Subterranean Springs',
    'Old Bangalore Heritage, Volcanic Rocks & Night Food Street',
    'Artisanal Pour-Overs, Mega Malls & Pioneer Craft Brewery',
    'Scrub Forest Trekking, Big Cats Safari & 4DX Movies',
    'Sea of Clouds Sunrise & Vineyard Barrel Cellar Tour',
    'Granite Boulder Scrambling & Authentic Rural Karnataka Feast'
  ];
  return bThemes[dayNum - 1] || 'City Discovery';
}

function enrichItinerary(itinerary, budgetTier, analyzed) {
  const q = (itinerary.destination || '').toLowerCase();
  let defaultInfo = DESTINATION_DETAILS.bangalore;
  if (q.includes('varkala')) defaultInfo = DESTINATION_DETAILS.varkala;
  else if (q.includes('kerala') || q.includes('munnar') || q.includes('alleppey')) defaultInfo = DESTINATION_DETAILS.kerala;
  else if (q.includes('gokarna') || q.includes('coorg') || q.includes('hampi')) defaultInfo = DESTINATION_DETAILS['karnataka-coast-hills'];
  else if (q.includes('pondy') || q.includes('pondicherry') || q.includes('chennai')) defaultInfo = DESTINATION_DETAILS['tamilnadu-pondy'];

  const destInfo = {
    name: analyzed?.name || itinerary.destination,
    tag: analyzed?.tagline || defaultInfo.tag,
    transitHub: analyzed?.metroConnectivity || defaultInfo.transitHub,
    transitTips: defaultInfo.transitTips || [analyzed?.transitFromCityCenter || 'Book local public transport or rental scooter.'],
    stayCategories: analyzed?.budgetStays?.map(s => ({
      area: analyzed.name,
      vibe: analyzed.vibe,
      budgetHostel: `${s.name} (${s.price})`,
      budgetHotel: `${s.name} (${s.price})`
    })) || defaultInfo.stayCategories
  };

  return {
    ...itinerary,
    destInfo,
    analyzedPlace: analyzed || null,
    verifiedStays: destInfo.stayCategories,
    transitTips: destInfo.transitTips
  };
}
