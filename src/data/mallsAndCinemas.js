// Curated Bangalore City Malls, PVR/INOX Multiplexes, Current Movies & BookMyShow Links

export const CITY_MALLS_DATA = [
  {
    id: 'orion-mall-brigade-gateway',
    name: 'Orion Mall & Lakeside Promenade (Brigade Gateway)',
    locality: 'Mahalakshmi Layout / Rajajinagar',
    zone: 'Bengaluru (North-West)',
    metroConnectivity: 'Green Line: Sandal Soap Factory Station (Gate A, 300m walk via dedicated pathway) or Mahalakshmi Station',
    description: 'Premier lakeside lifestyle destination nestled in the 40-acre Brigade Gateway enclave, featuring an expansive outdoor lakeside amphitheatre, European cafes, bowling alley, and premier IMAX cinema.',
    theatre: {
      name: 'PVR Orion Mall, Dr. Rajkumar Road',
      screensCount: 11,
      formats: ['IMAX with Laser', '4DX', 'P[XL]', 'PVR Gold Class', 'Dolby Atmos'],
      bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/pvr-orion-mall-dr-rajkumar-road-rajajinagar/PVOR',
      trendingMovies: [
        { title: 'Kantara: A Legend Chapter 1', language: 'Kannada / Hindi / Telugu', format: 'IMAX 2D / Atmos', rating: '9.3/10', genre: 'Action / Folklore Myth' },
        { title: 'Avatar: Fire and Ash', language: 'English / Hindi', format: 'IMAX 3D / 4DX', rating: '9.1/10', genre: 'Sci-Fi / Adventure' },
        { title: 'Toxic: A Fairy Tale for Grown-ups', language: 'Kannada / Multi-lingual', format: 'P[XL] / Dolby Atmos', rating: '9.0/10', genre: 'Action / Thriller' },
        { title: 'Dune: Part Three', language: 'English', format: 'IMAX with Laser', rating: '9.4/10', genre: 'Sci-Fi / Epic' }
      ]
    },
    nearbyComboSpots: [
      {
        name: 'ISKCON Sri Radha Krishna Temple',
        distance: '450 meters (6 mins walk)',
        routeDirections: 'Walk out of Orion Mall main gate onto Dr. Rajkumar Road or take the pedestrian skywalk directly to Hare Krishna Hill entrance.',
        whyCombine: 'Spiritual tranquility, breathtaking neo-classical Dravidian gold architecture, followed by unhurried lake stroll and cinema at Orion Mall.',
        suggestedDuration: '1.5 hrs at ISKCON + 3 hrs at Orion Mall'
      },
      {
        name: 'World Trade Center (WTC) & High Ultra Lounge',
        distance: 'Directly adjacent inside Brigade Gateway campus',
        routeDirections: 'Step across the lakeside promenade to the 31st floor of WTC tower.',
        whyCombine: 'Highest rooftop alfresco lounge in South India at 430 ft with 360-degree sunset city views.',
        suggestedDuration: '2 hrs (Sunset / Evening)'
      },
      {
        name: 'Sandal Soap Factory & Government Soap Museum',
        distance: '350 meters',
        routeDirections: 'Located right next to Sandal Soap Factory Metro Station.',
        whyCombine: 'The historic birthplace of pure Mysore Sandalwood Soap running since 1916.',
        suggestedDuration: '45 mins'
      }
    ],
    diningAtMall: ['Chili’s American Grill (Lakeside)', 'The Big Kahuna (Outdoor Lake Terrace)', 'Punjab Grill', 'Haldiram’s & Street Food Court'],
    parkingTips: 'Multi-level basement parking with EV fast charging bays. Easy weekend access via Sandal Soap Factory Metro.'
  },
  {
    id: 'mantri-square-mall',
    name: 'Mantri Square Mall',
    locality: 'Malleshwaram / Sampige Road',
    zone: 'Bengaluru (North-Central)',
    metroConnectivity: 'Direct Metro Station inside mall! (Green Line: Sampige Road Mantri Square Station has a direct private covered bridge into 1st floor)',
    description: 'One of India’s largest malls spanning 1.7 million sq ft with direct air-conditioned skybridge connection straight from Namma Metro Green Line train platform.',
    theatre: {
      name: 'INOX Mantri Square, Sampige Road',
      screensCount: 6,
      formats: ['Insignia Luxe', 'Dolby Atmos', 'RealD 3D'],
      bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/inox-mantri-square-mall-malleshwaram/INMS',
      trendingMovies: [
        { title: 'Kantara: Chapter 1', language: 'Kannada / Multi', format: 'Dolby Atmos', rating: '9.3/10', genre: 'Folklore Action' },
        { title: 'Avengers: Secret Wars', language: 'English / Hindi', format: '3D Atmos', rating: '9.2/10', genre: 'Action / Sci-Fi' },
        { title: 'Max', language: 'Kannada', format: 'Atmos', rating: '8.8/10', genre: 'High Octane Action' }
      ]
    },
    nearbyComboSpots: [
      {
        name: 'CTR (Central Tiffin Room / Shri Sagar)',
        distance: '700 meters (9 mins walk / 3 min shared auto)',
        routeDirections: 'Walk out of Malleshwaram exit down Margosa Road to 7th Cross.',
        whyCombine: 'Eat the crispest golden butter Benne Masala Dosa in India, then catch an afternoon movie at INOX.',
        suggestedDuration: '1.5 hrs CTR + 2.5 hrs Mall/Movie'
      },
      {
        name: 'Kaadu Malleshwara Temple & Nandi Teertha',
        distance: '850 meters',
        routeDirections: 'Walk along Temple Street 15th Cross.',
        whyCombine: 'Ancient 17th-century black stone Shiva shrine with natural subterranean freshwater spring.',
        suggestedDuration: '1 hr'
      }
    ],
    diningAtMall: ['Rajdhani Thali', 'Barbeque Nation', 'Taco Bell', 'Srikrishna Sweets & Chaat'],
    parkingTips: 'Directly linked to Sampige Road Metro; avoid weekend parking queues by taking Green Line train!'
  },
  {
    id: 'phoenix-marketcity-vr',
    name: 'Phoenix Marketcity & VR Bengaluru Twin Malls',
    locality: 'Whitefield Main Road / Mahadevapura',
    zone: 'Bengaluru (East)',
    metroConnectivity: 'Purple Line: Singayyanapalya Metro Station (400m walk) or Garudacharpalya Station',
    description: 'Massive dual entertainment and luxury shopping destination connected side-by-side with an open-air courtyard for live concerts, artisan flea markets, and Bangalore’s top IMAX theater.',
    theatre: {
      name: 'PVR VR Bengaluru & PVR Phoenix Marketcity',
      screensCount: 16,
      formats: ['IMAX with Laser', 'PVR Gold Class', '4DX', 'P[XL] Big Screen', 'Dolby Atmos'],
      bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/pvr-vr-bengaluru-whitefield-road/PVRB',
      trendingMovies: [
        { title: 'Dune: Part Three', language: 'English', format: 'IMAX Laser', rating: '9.4/10', genre: 'Sci-Fi' },
        { title: 'Toxic', language: 'Kannada / Multi', format: 'P[XL]', rating: '9.0/10', genre: 'Action' },
        { title: 'Spider-Man: Beyond the Spider-Verse', language: 'English / Multi', format: '4DX 3D', rating: '9.5/10', genre: 'Animation Action' }
      ]
    },
    nearbyComboSpots: [
      {
        name: 'Windmills Craftworks & Microbrewery',
        distance: '3.5 km (10 mins via Purple Line / Cab)',
        routeDirections: 'Take Purple Line to ITPL Station -> 400m walk to EPIP zone.',
        whyCombine: 'Acoustic jazz library, rare craft ales, and intimate date night ambiance.',
        suggestedDuration: '2.5 hrs'
      },
      {
        name: 'VR Bengaluru Skydeck & Rooftop Pool',
        distance: 'Inside VR Bengaluru',
        routeDirections: 'Take express elevator to 9th Floor The Waverly.',
        whyCombine: 'Sunset skyline views over East Bangalore with craft cocktails.',
        suggestedDuration: '1.5 hrs'
      }
    ],
    diningAtMall: ['Social VR Bengaluru', 'Burma Burma (Vegetarian Asian)', 'Smoke House Deli', 'Copper Chimney'],
    parkingTips: 'Huge multi-level basement parking with automated bay sensor guidance.'
  },
  {
    id: 'nexus-forum-koramangala',
    name: 'Nexus (Forum) Mall Koramangala',
    locality: 'Koramangala Hosur Road',
    zone: 'Bengaluru (South-East)',
    metroConnectivity: 'Purple Line: Trinity / MG Road (12 mins Rapido/Auto) or South End Circle Green Line',
    description: 'Bangalore’s historic first shopping mall, remaining the premier hangout for college students and film buffs with classic PVR cinemas, gaming arenas, and food street access.',
    theatre: {
      name: 'PVR Cinemas Forum Mall Koramangala',
      screensCount: 11,
      formats: ['PVR Gold Class', 'P[XL]', 'Dolby Atmos', 'RealD 3D'],
      bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/pvr-forum-mall-koramangala/PVRK',
      trendingMovies: [
        { title: 'Kantara: A Legend Chapter 1', language: 'Kannada / Hindi', format: 'P[XL] Atmos', rating: '9.3/10', genre: 'Mythological Action' },
        { title: 'Avatar: Fire and Ash', language: 'English / Multi', format: '3D Atmos', rating: '9.1/10', genre: 'Adventure' }
      ]
    },
    nearbyComboSpots: [
      {
        name: 'The Hole in the Wall Cafe (Koramangala 4th Block)',
        distance: '1.2 km (5 mins Rapido/Auto)',
        routeDirections: 'Head down 80ft road into 4th Block quiet lanes.',
        whyCombine: 'Breakfast pancakes and waffles in green garden terrace before a movie.',
        suggestedDuration: '1.5 hrs'
      },
      {
        name: 'Jyoti Nivas College (JNC) Youth Street Food',
        distance: '800 meters',
        routeDirections: 'Walk across Hosur Road towards 5th Block.',
        whyCombine: 'Momos, Boba tea, waffles, and cheap shopping.',
        suggestedDuration: '1 hr'
      }
    ],
    diningAtMall: ['Transit Food Lounge', 'McDonald’s & KFC', 'Pizza Hut Express', 'Subway'],
    parkingTips: 'Direct entry from Hosur Road; book weekend morning shows to get easy parking.'
  },
  {
    id: 'garuda-mall-mgroad',
    name: 'Garuda Mall & 1 MG-Lido Mall',
    locality: 'Magrath Road / MG Road / Brigade Road',
    zone: 'Bengaluru (Central CBD)',
    metroConnectivity: 'Purple Line: MG Road Station (Gate 2 exit, 400m walk down Brigade Road) or Trinity Station',
    description: 'Central city retail & cinema hubs located right adjacent to Church Street cobblestone pedestrian lane and MG Road colonial avenues.',
    theatre: {
      name: 'INOX Garuda Mall, Magrath Road',
      screensCount: 6,
      formats: ['Insignia Screen', 'Dolby Digital', 'RealD 3D'],
      bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/inox-garuda-mall-magrath-road/INGA',
      trendingMovies: [
        { title: 'Dune: Part Three', language: 'English', format: 'Atmos 2D', rating: '9.4/10', genre: 'Sci-Fi' },
        { title: 'Kantara: Chapter 1', language: 'Kannada / Hindi', format: 'Atmos', rating: '9.3/10', genre: 'Mythological Action' }
      ]
    },
    nearbyComboSpots: [
      {
        name: 'Church Street & Blossom Book House',
        distance: '400 meters (5 mins walk)',
        routeDirections: 'Walk up Magrath Road across Brigade Road straight into Church Street.',
        whyCombine: 'Browse 3 floors of vintage books, sip Matteo pour-over coffee, and watch street buskers.',
        suggestedDuration: '2 hrs'
      },
      {
        name: 'Cubbon Park Seshadri Iyer Memorial Hall',
        distance: '800 meters',
        routeDirections: 'Walk across Kasturba Road into Cubbon bamboo groves.',
        whyCombine: 'Peaceful tree canopy walk before evening dinner and movie.',
        suggestedDuration: '1.5 hrs'
      }
    ],
    diningAtMall: ['Kobe Sizzlers', 'Barbeque Nation', 'Nando’s Peri Peri', 'Gelato Italiano'],
    parkingTips: 'Heavy central Bangalore traffic on Saturday evenings; take Purple Line Metro to MG Road for zero parking stress.'
  },
  {
    id: 'vega-city-mall-bannerghatta',
    name: 'Vega City Mall (PVR Superplex)',
    locality: 'Bannerghatta Main Road / BTM Layout',
    zone: 'Bengaluru (South)',
    metroConnectivity: 'Green Line: Rashtriya Vidyalaya Road (RV Road) + 10 min auto or upcoming Pink Line',
    description: 'Home to South India’s premier PVR Superplex featuring 12 diverse cinema formats under one roof, including IMAX, 4DX, Play House for kids, and luxury Gold Class recliners.',
    theatre: {
      name: 'PVR Superplex, Vega City Mall',
      screensCount: 12,
      formats: ['IMAX with Laser', '4DX Motion', 'PVR Play House', 'PVR Gold Class', 'Dolby Atmos'],
      bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/pvr-superplex-vega-city-mall-bannerghatta-road/PVVC',
      trendingMovies: [
        { title: 'Kantara: Chapter 1', language: 'Kannada / Hindi / Telugu', format: 'IMAX Laser', rating: '9.3/10', genre: 'Myth' },
        { title: 'Avatar: Fire and Ash', language: 'English / Multi', format: '4DX 3D', rating: '9.1/10', genre: 'Sci-Fi' },
        { title: 'Moana 2', language: 'English / Hindi', format: 'Play House', rating: '8.9/10', genre: 'Animation' }
      ]
    },
    nearbyComboSpots: [
      {
        name: 'Ranga Shankara Cultural Theater',
        distance: '2.5 km (JP Nagar 2nd Phase)',
        routeDirections: 'Short auto down 24th Main JP Nagar.',
        whyCombine: 'Legendary live stage plays, indie literature readings, and famous Sabudana Vada at cafe.',
        suggestedDuration: '2 hrs'
      },
      {
        name: 'Bannerghatta National Park & Zoo Safari',
        distance: '12 km south down Bannerghatta Rd',
        routeDirections: 'Drive straight south along Bannerghatta Main Road (25 mins).',
        whyCombine: 'Morning lion and tiger safari followed by evening IMAX movie at Vega City.',
        suggestedDuration: '3.5 hrs'
      }
    ],
    diningAtMall: ['Chianti Italian Restaurant', 'Mainland China', 'Chili’s Grill & Bar', 'Twelve Bites Food Court'],
    parkingTips: 'Spacious dedicated multi-level basement parking with automated payment kiosks.'
  }
];

/**
 * Find mall and entertainment combos nearby any searched locality
 */
export function getMallsForLocality(localityQuery) {
  if (!localityQuery) return [];
  const q = localityQuery.toLowerCase();

  return CITY_MALLS_DATA.filter(m => 
    m.locality.toLowerCase().includes(q) ||
    m.name.toLowerCase().includes(q) ||
    m.zone.toLowerCase().includes(q) ||
    m.nearbyComboSpots.some(s => s.name.toLowerCase().includes(q) || s.whyCombine.toLowerCase().includes(q))
  );
}
