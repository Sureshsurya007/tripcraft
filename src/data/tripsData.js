// Master curated destination, place, transit, and stay dataset for South India & Bangalore

export const DESTINATIONS = [
  {
    id: 'bangalore',
    name: 'Bengaluru (Bangalore)',
    state: 'Karnataka',
    tagline: 'Garden City, Cafe Capital & Tech-Culture Fusion',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80',
    types: ['1-day', 'weekend', 'staycation'],
    metroAvailable: true,
    metroLines: ['Purple Line (Whitefield - Challaghatta)', 'Green Line (Madavara - Silk Institute)', 'Yellow Line (RV Road - Bommasandra)'],
    highlights: ['Cubbon Park & MG Road', 'Koramangala & Indiranagar Cafes', 'Malleshwaram Heritage & CTR Dosa', 'NGMA & Book Cafes', 'Electronic City & Sarjapur Go-karting']
  },
  {
    id: 'kerala',
    name: 'Kerala Grand Circuit',
    state: 'Kerala',
    tagline: "God's Own Country: Mist, Canals & Cliff Sunsets",
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    types: ['3-5-days', '7-10-days'],
    metroAvailable: true, // Kochi metro
    hubs: ['Fort Kochi', 'Munnar', 'Thekkady', 'Alleppey Backwaters', 'Varkala Beach'],
    highlights: ['Heritage Biennale art in Fort Kochi', 'Tea plantations & Kolukkumalai Sunrise', 'Alleppey overnight canoe & houseboat', 'Varkala cliffside sunset cafes']
  },
  {
    id: 'karnataka-coast-hills',
    name: 'Karnataka: Coast & Heritage',
    state: 'Karnataka',
    tagline: 'Ancient Ruins, Pristine Beaches & Cloud Hills',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f421a182?auto=format&fit=crop&w=1000&q=80',
    types: ['3-5-days', '7-10-days'],
    hubs: ['Gokarna', 'Murudeshwar', 'Coorg (Madikeri)', 'Chikmagalur', 'Hampi'],
    highlights: ['5-Beach trek in Gokarna', 'Coffee plantation stays in Coorg', 'Sunset atop Mullayanagiri peak', 'Bouldering & coracle rides in Hampi']
  },
  {
    id: 'tamilnadu-pondy',
    name: 'Tamil Nadu & Pondicherry',
    state: 'Tamil Nadu & Puducherry',
    tagline: 'French Bohemian Boulevards & Temple Splendour',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    types: ['1-day', '3-5-days', '7-10-days'],
    hubs: ['Chennai', 'Mahabalipuram', 'Pondicherry (White Town)', 'Ooty & Nilgiris', 'Madurai'],
    highlights: ['Chennai Marina beach sunrise & filter coffee', 'White Town pastel cycling & French cafes', 'Auroville Matrimandir silence gardens', 'Mahabalipuram shore temple shore breeze']
  }
];

export const COMPANION_TYPES = [
  {
    id: 'girlfriend',
    label: 'Girlfriend / Date Outing',
    emoji: '💑',
    desc: 'Aesthetic cafes, romantic sunsets, quiet conversations, photogenic corners, peaceful art galleries, pottery & book cafes.',
    vibeTag: 'Romantic & Aesthetic'
  },
  {
    id: 'guy_squad',
    label: 'Guy Squad / Boys Only',
    emoji: '👬',
    desc: 'Go-karting, gaming arenas, biryani trails, highway rides, late night dhabas, sports hangouts & rugged nature.',
    vibeTag: 'Action, Food & Chill'
  },
  {
    id: 'friends_gang',
    label: 'Friends Gang (Mixed)',
    emoji: '👥',
    desc: 'Fun group activities, board game cafes, viewpoint picnics, street food crawls, bowling & lively rooftop spots.',
    vibeTag: 'Social & Fun'
  },
  {
    id: 'solo',
    label: 'Solo Wanderer',
    emoji: '🧘',
    desc: 'Peaceful libraries, offbeat museums, hidden tranquil gardens, quiet indie bookshops, reflective heritage walks.',
    vibeTag: 'Tranquil & Mindful'
  },
  {
    id: 'family',
    label: 'Family & Elder-Friendly',
    emoji: '👨‍👩‍👧‍👦',
    desc: 'Comfortable pacing, low walking fatigue, iconic heritage monuments, clean restrooms & legendary pure-veg stalwarts.',
    vibeTag: 'Relaxed & Wholesome'
  }
];

export const VIBE_FILTERS = [
  { id: 'quiet', label: 'Quiet & Offbeat', emoji: '🤫', desc: 'Peaceful, uncrowded, meditative spots' },
  { id: 'museum', label: 'Museums & Art', emoji: '🏛️', desc: 'Modern galleries, science centers, palaces' },
  { id: 'library', label: 'Libraries & Books', emoji: '📚', desc: 'Indie bookstores, heritage reading halls, cafe-libraries' },
  { id: 'cafe', label: 'Aesthetic Cafes', emoji: '☕', desc: 'Specialty pour-overs, garden brunches, cozy vibes' },
  { id: 'street_food', label: 'Legendary Food Crawl', emoji: '🍛', desc: 'Iconic local dosas, biryanis, night food streets' },
  { id: 'nature', label: 'Nature & Parks', emoji: '🌲', desc: 'Botanical gardens, forest trails, lake promenades' },
  { id: 'adventure', label: 'Adventure & Games', emoji: '🏎️', desc: 'Go-karting, boulder climbing, escape rooms, arcade' },
  { id: 'night', label: 'Night Owl & Dhabas', emoji: '🌙', desc: 'Midnight food spots, highway stops, sunset viewpoints' }
];

export const BUDGET_TIERS = [
  { id: 'pocket', label: 'Pocket Saver (Backpacker)', range: '₹400 - ₹900 / day', desc: 'Hostels, Metro/BMTC public transport, legendary local tiffin spots.' },
  { id: 'smart', label: 'Smart Explorer (Balanced)', range: '₹1,200 - ₹2,500 / day', desc: 'Cozy homestays, mix of auto/rapido and metro, cute cafes & activities.' },
  { id: 'comfort', label: 'Comfort & Experiential', range: '₹3,000 - ₹5,000+ / day', desc: 'Boutique heritage stays, private cabs, fine dine & full activities.' }
];

// Rich curated places with genuine review breakdowns, transit steps, budget stay recommendations and food intel
export const CURATED_PLACES = [
  // BANGALORE - ROMANTIC / QUIET / LIBRARIES / CAFES
  {
    id: 'ngma-blr',
    city: 'bangalore',
    name: 'National Gallery of Modern Art (NGMA)',
    zone: 'Palace Road / Vasanth Nagar',
    category: 'museum',
    suitableFor: ['girlfriend', 'solo', 'friends_gang'],
    vibes: ['quiet', 'museum', 'cafe'],
    timeToSpend: '2 - 2.5 hours',
    bestTime: '10:30 AM - 1:00 PM (Quiet morning light, avoid Mondays)',
    costPerPerson: '₹50 (Entry) + ₹200 (Courtyard cafe)',
    description: 'Set in the heritage Manikyavelu Mansion surrounded by century-old heritage trees, mirror reflection pool, and an open-air sculpture courtyard.',
    reviewAnalysis: {
      rating: 4.6,
      totalReviews: 8420,
      vibeSentiment: 'Serene, extremely peaceful, romantic without being loud.',
      pros: [
        'Massive shaded green campus with minimal crowds on weekdays',
        'Cozy cafe inside serving hot filter coffee and sandwiches under huge rain trees',
        'Incredible collection of Jamini Roy, Amrita Sher-Gil and modern Indian masters'
      ],
      cons: [
        'Strict camera rules (DSLR requires paid permit, phone photography only in gardens)',
        'Closed on Mondays and national holidays'
      ],
      insiderTip: 'Sit on the wooden benches next to the lotus pond for the quietest conversation spot in central Bangalore.'
    },
    transit: {
      fromHub: 'Majestic Metro / Cubbon Park Metro',
      steps: [
        'Take Namma Metro Purple Line to Dr. B.R. Ambedkar Station (Vidhana Soudha) or Cubbon Park Station',
        'Exit from Gate B (Palace Road direction)',
        'Take a quick Rapido bike (₹25, 4 mins) or Auto (₹40, 5 mins) straight to Manikyavelu Mansion, Palace Road'
      ],
      approxFare: '₹20 Metro + ₹30 Auto/Rapido',
      transitTime: '15 mins from city center'
    },
    budgetStayNearby: [
      { name: 'Cuckoo Hostel (Koramangala/Richmond area)', type: 'Boutique Backpackers', price: '₹650/bed', perk: 'Rooftop garden & book exchange' },
      { name: 'Hotel Maurya (Gandhi Nagar)', type: 'Clean Budget Hotel', price: '₹1,200/room', perk: '5 mins from Metro station' }
    ],
    foodNearby: [
      { spot: 'NGMA Cafe Courtyard', dish: 'Iced Cinnamon Cappuccino & Quiche', cost: '₹180' },
      { spot: 'Ummrao & Millers 46', dish: 'Signature Steak / Pasta (500m away)', cost: '₹450' }
    ]
  },
  {
    id: 'champaca-bookstore',
    city: 'bangalore',
    name: 'Champaca Bookstore, Library & Cafe',
    zone: 'Edward Road, Off Queens Road (Vasanth Nagar)',
    category: 'library',
    suitableFor: ['girlfriend', 'solo'],
    vibes: ['quiet', 'library', 'cafe'],
    timeToSpend: '1.5 - 2 hours',
    bestTime: '3:00 PM - 6:00 PM',
    costPerPerson: '₹250 - ₹400 for coffee & bakes',
    description: 'An independently owned, women-run bookstore and rooftop cafe nestled right beneath the canopy of an old avocado tree.',
    reviewAnalysis: {
      rating: 4.7,
      totalReviews: 2150,
      vibeSentiment: 'Unmatched tranquility, cozy intimate wooden aesthetics, perfect date spot for reading lovers.',
      pros: [
        'Quiet policy indoors; ideal for deep conversations, journaling, or reading together',
        'Curated selection of independent fiction, poetry, feminist essays and regional translations',
        'Delicious homemade seasonal cakes and hot pour-over coffees'
      ],
      cons: [
        'Limited seating (around 20-25 seats), can get full by 5 PM on Saturday',
        'Narrow lane parking, best to arrive by Metro + Auto'
      ],
      insiderTip: 'Grab the corner table by the window overlooking the leafy avocado branches.'
    },
    transit: {
      fromHub: 'Cubbon Park Metro / MG Road',
      steps: [
        'Take Namma Metro Purple Line to Cubbon Park Metro Station',
        'Exit towards Queens Road (Gate A)',
        'Walk 650 meters (8 mins) along leafy Edward Road or take a ₹35 Auto'
      ],
      approxFare: '₹15 Metro + ₹0 (Walk) or ₹35 Auto',
      transitTime: '10 mins from Cubbon Park'
    },
    budgetStayNearby: [
      { name: 'goSTOPS Bangalore (Cantonment)', type: 'Social Hostel', price: '₹550/bed', perk: 'Walking distance to Cubbon Park & cafes' }
    ],
    foodNearby: [
      { spot: 'Champaca Cafe', dish: 'Avocado Toast & Cold Brew', cost: '₹220' },
      { spot: 'Airlines Hotel (Drive-in)', dish: 'Heritage Chutney Masala Dosa & Filter Coffee', cost: '₹120' }
    ]
  },
  {
    id: 'cubbon-state-library',
    city: 'bangalore',
    name: 'State Central Library (Seshadri Iyer Memorial Hall) & Cubbon Bamboo Groves',
    zone: 'Cubbon Park',
    category: 'library',
    suitableFor: ['solo', 'girlfriend', 'family'],
    vibes: ['quiet', 'library', 'nature'],
    timeToSpend: '1.5 - 2 hours',
    bestTime: '7:30 AM - 10:30 AM or 4:00 PM - 6:00 PM',
    costPerPerson: 'Free entry',
    description: 'Iconic Tuscan-styled red-brick neo-classical monument built in 1915 housing over 300,000 rare books, set amidst 300 acres of bamboo groves.',
    reviewAnalysis: {
      rating: 4.6,
      totalReviews: 12500,
      vibeSentiment: 'Historic soul of green Bangalore; feels like stepping into 19th-century colonial calm.',
      pros: [
        'Motorized vehicles banned on Sundays, giving unmatched serenity',
        'Towering bamboo groves right behind the library create natural shade and acoustic insulation from traffic noise',
        'Free to explore the exterior grounds and public reading room'
      ],
      cons: [
        'Books cannot be checked out by casual visitors (reading room reference only)',
        'Mosquitoes near damp bamboo thickets around sunset; carry repellent'
      ],
      insiderTip: 'Bring a picnic mat, two coffees from nearby Church Street, and sit under the Silver Oak trees behind the library.'
    },
    transit: {
      fromHub: 'Any Metro Line',
      steps: [
        'Take Namma Metro Purple Line directly to Dr. B.R. Ambedkar Vidhana Soudha Station or Cubbon Park Station',
        'Direct gate opens into Cubbon Park grounds',
        'Stroll 400 meters along the shaded tree-lined pathway towards the Red Library building'
      ],
      approxFare: '₹15 - ₹30 Metro (Zero cab needed!)',
      transitTime: '5 mins walking from metro exit'
    },
    budgetStayNearby: [
      { name: 'Hotel RR International (Majestic)', type: 'Transit Budget', price: '₹950/night', perk: 'Direct access to Green & Purple lines' }
    ],
    foodNearby: [
      { spot: 'Indian Coffee House (Church St)', dish: 'Mutton Cutlet & Filter Coffee', cost: '₹90' },
      { spot: 'MTR (Lalbagh/K.R. Market)', dish: 'Rava Idli with Ghee Cup', cost: '₹110' }
    ]
  },
  // BANGALORE - BOYS ONLY / ADVENTURE / FOOD CRAWLS
  {
    id: 'torq03-gokarting',
    city: 'bangalore',
    name: 'Torq03 E-Karting & Bowling Arena',
    zone: 'Marathahalli / Bellandur Ring Road',
    category: 'adventure',
    suitableFor: ['guy_squad', 'friends_gang'],
    vibes: ['adventure'],
    timeToSpend: '2.5 - 3 hours',
    bestTime: '2:00 PM - 5:00 PM (Before evening weekend rush)',
    costPerPerson: '₹450 - ₹750 (Karting heat + Laser tag/Bowling)',
    description: 'High-torque twin-engine go-karts and fast asphalt outdoor racing circuit with live digital timing telemetry.',
    reviewAnalysis: {
      rating: 4.4,
      totalReviews: 6800,
      vibeSentiment: 'High adrenaline, competitive rush, supreme fun for guy gangs.',
      pros: [
        'Well-maintained karts with responsive brakes and tight hairpin corners',
        'Includes bowling alley, arcade simulators, laser tag, and pub under one roof',
        'Great competitive lap timing printed on leaderboard'
      ],
      cons: [
        'Long waiting queue on Saturday evenings after 6 PM (pre-book slot online)',
        'Closed shoes mandatory for karting'
      ],
      insiderTip: 'Book the "Combo Heat" on their website beforehand to skip the ticket booth queue.'
    },
    transit: {
      fromHub: 'Indiranagar / MG Road',
      steps: [
        'Take Purple Line Metro to Indiranagar Metro Station',
        'Book an Uber XL or 2 Rapido bikes down Old Airport Road past HAL (approx 7.5 km, ₹90 on Rapido, ₹220 for Uber cab)',
        'Alternatively: BMTC Bus 500-D from Marathahalli bridge drops right at the flyover stop'
      ],
      approxFare: '₹25 Metro + ₹80 Rapido',
      transitTime: '30 mins'
    },
    budgetStayNearby: [
      { name: 'Locul Central (Indiranagar)', type: 'Party & Gamer Hostel', price: '₹600/bed', perk: 'Pool table & PS5 lounge' }
    ],
    foodNearby: [
      { spot: 'Meghana Foods (Marathahalli / Indiranagar)', dish: 'Special Chicken Biryani with fiery gravy', cost: '₹340' },
      { spot: 'Empire Restaurant', dish: 'Ghee Rice, Coin Parotta & Butter Chicken', cost: '₹260' }
    ]
  },
  {
    id: 'malleshwaram-dosa-trail',
    city: 'bangalore',
    name: 'Malleshwaram Heritage Food Crawl: CTR, Veena Stores & 8th Cross',
    zone: 'Malleshwaram 7th & 8th Cross',
    category: 'street_food',
    suitableFor: ['guy_squad', 'friends_gang', 'solo', 'family'],
    vibes: ['street_food', 'quiet'],
    timeToSpend: '2 - 3 hours',
    bestTime: '7:30 AM - 10:30 AM (Breakfast) or 4:30 PM - 7:00 PM (Snacks)',
    costPerPerson: '₹120 - ₹200 for full food spread',
    description: 'The legendary culinary heart of old Bangalore. Butter-drenched Benne Masala Dosa, melt-in-mouth Idli Vada with mint chutney, and steaming brass tumbler filter coffee.',
    reviewAnalysis: {
      rating: 4.8,
      totalReviews: 24000,
      vibeSentiment: 'Pure nostalgia, unbeatable crispy golden crust dosas, vibrant old-school streets.',
      pros: [
        'CTR (Shri Sagar) Benne Masala Dosa has the undisputed crunchiest golden crust in India',
        'Veena Stores standing breakfast has world-class soft idlis and fiery coconut-pudina chutney',
        'Walking through 8th Cross flower market and Kaadu Malleshwara Temple is free and deeply cultural'
      ],
      cons: [
        'CTR waiting time on weekend mornings is 30-45 minutes (give your name to the door captain immediately)',
        'Veena Stores has no seating; you eat standing on the clean pavement like true locals'
      ],
      insiderTip: 'Order the "Benne Masala Dosa" at CTR with extra chutney, then walk 400m to Veena Stores for a cup of Khara Bath and Filter Kaapi.'
    },
    transit: {
      fromHub: 'Majestic / Any station',
      steps: [
        'Take Namma Metro Green Line to Sampige Road (Mantri Square) Station or Srirampura Station',
        'Walk 500 meters or take a shared auto for ₹20 down Margosa Road to 7th Cross',
        'Everything is easily walkable along Margosa Road and Temple Street'
      ],
      approxFare: '₹15 Metro + ₹20 Auto',
      transitTime: '15 mins from Majestic'
    },
    budgetStayNearby: [
      { name: 'Hotel Janatha (Malleshwaram)', type: 'Heritage Lodge', price: '₹900/night', perk: 'Right in the heart of traditional eateries' }
    ],
    foodNearby: [
      { spot: 'CTR (Central Tiffin Room)', dish: 'Benne Masala Dosa + Mangalore Bajji', cost: '₹85' },
      { spot: 'Veena Stores', dish: 'Khara Bath + Filter Coffee', cost: '₹55' }
    ]
  },
  {
    id: 'turahalli-forest-view',
    city: 'bangalore',
    name: 'Turahalli Forest & Hilltop Bouldering Point',
    zone: 'Kanakapura Road / Banashankari 6th Stage',
    category: 'nature',
    suitableFor: ['guy_squad', 'solo'],
    vibes: ['nature', 'quiet', 'adventure'],
    timeToSpend: '2 hours',
    bestTime: '6:00 AM - 8:30 AM (Cool morning breeze & sunrise views)',
    costPerPerson: 'Free entry',
    description: "Bangalore's last surviving natural scrub forest reserve with rugged granite boulder formations, birdwatching trails, and panoramic sunrise views over South Bangalore.",
    reviewAnalysis: {
      rating: 4.5,
      totalReviews: 4300,
      vibeSentiment: 'Raw, uncommercialized, rocky outdoor workout and peaceful morning meditation.',
      pros: [
        'Zero ticket cost; great spot for group bike rides or cycling workout',
        'Natural granite rocks great for natural bouldering and rock scrambling',
        'Quiet escape from city traffic noise'
      ],
      cons: [
        'Vehicles not allowed inside forest gate; must hike 1 km uphill',
        'No food or water stalls inside; bring your own bottles and take back your trash'
      ],
      insiderTip: 'Reach the summit temple rock before 7:00 AM to see the morning mist hovering over NICE Road.'
    },
    transit: {
      fromHub: 'Majestic / Central Bangalore',
      steps: [
        'Take Namma Metro Green Line southwards towards Silk Institute',
        'Deboard at Vajarahalli Metro Station or Thalaghattapura Metro Station',
        'Take Rapido bike or Auto for ₹50 (2.5 km) to Turahalli Forest Gate'
      ],
      approxFare: '₹35 Metro + ₹50 Auto',
      transitTime: '35 mins from Majestic'
    },
    budgetStayNearby: [
      { name: 'Urban Pods (Kanakapura Road)', type: 'Budget Transit Pods', price: '₹500/night', perk: 'Near Green Line metro' }
    ],
    foodNearby: [
      { spot: 'Vidyarthi Bhavan (Gandhi Bazaar branch)', dish: 'Thick Ghee Masala Dosa', cost: '₹75' },
      { spot: 'Udupi Grand (Vajarahalli)', dish: 'Hot Pongal & Vada Sambar', cost: '₹60' }
    ]
  },
  // KERALA - MULTI-DAY & BACKWATERS & HILLS
  {
    id: 'munnar-tea-peaks',
    city: 'kerala',
    name: 'Munnar: Kolukkumalai Sunrise & Lockhart Tea Trail',
    zone: 'Idukki District, Western Ghats',
    category: 'nature',
    suitableFor: ['girlfriend', 'friends_gang', 'guy_squad'],
    vibes: ['nature', 'quiet', 'adventure'],
    timeToSpend: '2 Days / 1 Night',
    bestTime: 'September to March (Crisp 14°C mist)',
    costPerPerson: '₹1,500 - ₹3,000 for 4x4 Jeep + Tea Museum',
    description: 'The highest tea plantation in the world at 7,130 ft, offering a sea-of-clouds sunrise, organic orthodox tea tastings, and trekking through rolling mist valleys.',
    reviewAnalysis: {
      rating: 4.8,
      totalReviews: 31000,
      vibeSentiment: 'Breathtaking rolling emerald hills, romantic morning fog, refreshing cool mountain breeze.',
      pros: [
        'Sunrise above the cloud blanket at Kolukkumalai is one of India top 3 visual spectacles',
        'Fresh hand-plucked tea tasting directly at heritage factory',
        'Pleasant weather year-round compared to humid plains'
      ],
      cons: [
        '4x4 Jeep road to Kolukkumalai is very bumpy (1.5 hrs of rough rocky terrain)',
        'Munnar town center has traffic during Diwali/Christmas peak'
      ],
      insiderTip: 'Stay in Suryanelli or Old Munnar homestays instead of crowded Munnar town center.'
    },
    transit: {
      fromHub: 'Kochi (Ernakulam) or Bangalore',
      steps: [
        'From Bangalore: Take overnight KSRTC Airavat Club Class bus (Bangalore to Munnar, 9h, ₹850)',
        'Or from Kochi: Take KSRTC Fast Passenger bus from Ernakulam KSRTC Stand (4.5 hrs, ₹165)',
        'In Munnar: Hire shared 4x4 Jeep from Suryanelli base camp for Kolukkumalai sunrise (₹2,500 split by 6 = ₹420/person)'
      ],
      approxFare: '₹850 KSRTC Sleeper + ₹420 Jeep',
      transitTime: 'Direct overnight from Bangalore'
    },
    budgetStayNearby: [
      { name: 'Zostel Munnar (Vattavada / Devikulam)', type: 'Scenic Backpacker Hostel', price: '₹650/bed', perk: 'Perched right over tea terraces' },
      { name: 'Misty Mountain Homestay', type: 'Local Homestay', price: '₹1,300/night', perk: 'Homemade Kerala appam & stew breakfast included' }
    ],
    foodNearby: [
      { spot: 'Rapsy Restaurant (Munnar Town)', dish: 'Kerala Beef Fry / Chicken Roast with Malabar Parotta', cost: '₹160' },
      { spot: 'Saravana Bhavan (Munnar)', dish: 'Unlimited Kerala Veg Thali on plantain leaf', cost: '₹130' }
    ]
  },
  {
    id: 'alleppey-backwater-canoe',
    city: 'kerala',
    name: 'Alleppey (Alappuzha): Narrow Village Canal Shikkara & Canoe',
    zone: 'Kuttanad & Vembanad Lake',
    category: 'nature',
    suitableFor: ['girlfriend', 'solo', 'family', 'friends_gang'],
    vibes: ['quiet', 'nature', 'cafe'],
    timeToSpend: '1 - 2 Days',
    bestTime: 'October to February (Golden hour sunset)',
    costPerPerson: '₹400 - ₹800 (for 3-hr Village Canoe, NOT ₹8000 houseboat)',
    description: 'Skip the expensive, loud, diesel-fuming motor houseboats! Take a silent wooden country canoe rowed by a local boatman through silent canal networks under swaying coconut palms.',
    reviewAnalysis: {
      rating: 4.9,
      totalReviews: 18500,
      vibeSentiment: 'Pure tranquility; water lilies, duck farms, village life, ultra-romantic for couples.',
      pros: [
        'Small wooden canoes can enter shallow village canals where big houseboats cannot fit',
        'Completely silent manually rowed boats, birdwatching heaven (kingfishers, eagles)',
        'Authentic Karimeen Pollichathu (pearl spot fish in banana leaf) served at village stops'
      ],
      cons: [
        'Afternoon sun can be sharp between 12 PM - 2:30 PM; go at 6:30 AM or 3:30 PM',
        'Canoes have simple wooden benches (carry a light cushion or towel)'
      ],
      insiderTip: 'Ask the boatman to take you through "Kainakary village canal" and stop at a local toddy shop for fresh coconut water and tapioca.'
    },
    transit: {
      fromHub: 'Ernakulam (Kochi) / Trivandrum',
      steps: [
        'Take local express train from Ernakulam Jn (ERS) to Alappuzha (ALLP) (1 hour, ₹45 unreserved / ₹140 CC)',
        'From Alleppey Railway station, take an auto for ₹80 to Finishing Point Jetty',
        'State Water Transport Dept (SWTD) government public ferries run to Kottayam for just ₹25!'
      ],
      approxFare: '₹45 Train + ₹80 Auto + ₹350 Shared Canoe',
      transitTime: '1.5 hrs from Kochi'
    },
    budgetStayNearby: [
      { name: 'Zostel Alleppey', type: 'Beachside Hostel', price: '₹600/bed', perk: 'Common room overlooking the Arabian Sea' },
      { name: 'Palmy Lake Resort Homestay', type: 'Riverside Cottage', price: '₹1,400/night', perk: 'Steps from the backwater canal' }
    ],
    foodNearby: [
      { spot: 'Brothers Hotel (Alleppey Town)', dish: 'Fish Curry Meals & Duck Roast', cost: '₹220' },
      { spot: 'Cafe Catamaran (Beach Rd)', dish: 'Cold Coffee & Wood-fired Pizza', cost: '₹280' }
    ]
  },
  {
    id: 'varkala-cliff-sunset',
    city: 'kerala',
    name: 'Varkala: North Cliff Walk, Tibetan Cafes & Black Sand Beach',
    zone: 'Varkala, Thiruvananthapuram',
    category: 'cafe',
    suitableFor: ['girlfriend', 'solo', 'friends_gang'],
    vibes: ['cafe', 'quiet', 'nature', 'night'],
    timeToSpend: '2 - 3 Days',
    bestTime: '4:00 PM - 10:00 PM (Sunset & Cliff Lanterns)',
    costPerPerson: '₹300 - ₹700 (Cafe meals + sunset smoothie)',
    description: 'Unique red laterite cliffs jutting straight into the Arabian Sea with bohemian rooftop cafes, yoga retreats, surf schools, and sunset candlelight dining.',
    reviewAnalysis: {
      rating: 4.7,
      totalReviews: 22000,
      vibeSentiment: 'Chill bohemian paradise; laid-back vibes, candlelit cliff terraces, ocean breeze.',
      pros: [
        'Pedestrian-only cliff pathway with continuous sea view for over 1.5 kilometers',
        'Surfboard rentals and beginners surf lessons available on the beach (₹1,000/hr)',
        'Incredible seafood barbecues and vegan smoothie bowls'
      ],
      cons: [
        'Steep stairs down from cliff to beach can tire elderly travelers',
        'Strong ocean undercurrents in certain spots (swim only in flagged zones)'
      ],
      insiderTip: 'Watch the sunset from Cafe del Mar or Darjeeling Cafe, then head down to Black Beach for night bioluminescence walk.'
    },
    transit: {
      fromHub: 'Trivandrum / Kollam / Alleppey',
      steps: [
        'Take train to Varkala Sivagiri Railway Station (VAK) (direct train from Bangalore, Ernakulam, or Trivandrum)',
        'From station, take an auto for ₹120 to North Cliff Helipad',
        'Entire cliff strip is pedestrian only—walk everywhere with breeze!'
      ],
      approxFare: '₹120 Auto from station',
      transitTime: '10 mins from Varkala Station'
    },
    budgetStayNearby: [
      { name: 'The Lost Hostels Varkala', type: 'Cliff Backpacker Hostel', price: '₹550/bed', perk: 'Hammocks, guitar jams & surf vibe' },
      { name: 'Green Lawn Homestay', type: 'Private Cliff Homestay', price: '₹1,200/night', perk: '3 mins walk to North Cliff' }
    ],
    foodNearby: [
      { spot: 'Darjeeling Cafe', dish: 'Wood-fired Thin Crust Pizza & Fresh Ginger Lemon Honey', cost: '₹320' },
      { spot: 'Abba Restaurant', dish: 'Grilled Calamari & Swedish Apple Pie', cost: '₹360' }
    ]
  },
  // KARNATAKA - GOKARNA & COORG
  {
    id: 'gokarna-beach-trek',
    city: 'karnataka-coast-hills',
    name: 'Gokarna: 5-Beach Trek (Kudle to Paradise Beach)',
    zone: 'Uttara Kannada Coast',
    category: 'adventure',
    suitableFor: ['guy_squad', 'friends_gang', 'solo'],
    vibes: ['adventure', 'nature', 'quiet'],
    timeToSpend: '1 Full Day',
    bestTime: 'October to March (Early morning 6:30 AM start)',
    costPerPerson: '₹200 - ₹500 (Trek is free; return boat ₹200)',
    description: 'Hike across coastal cliff edges and rocky promontories connecting Kudle Beach, Om Beach, Half Moon Beach, and secluded Paradise Beach.',
    reviewAnalysis: {
      rating: 4.8,
      totalReviews: 19500,
      vibeSentiment: 'Rugged, soulful, breathtaking ocean panoramas, untamed alternative to crowded Goa.',
      pros: [
        'Paradise Beach and Half Moon Beach are accessible only by hike or boat—no road vehicles!',
        'Dolphin sightings frequent from cliff trails between Om Beach and Half Moon',
        'Budget-friendly beach shacks serving banana Nutella pancakes and fresh catch'
      ],
      cons: [
        'Rocky climbs between Half Moon and Paradise can be slippery; wear shoes with good tread',
        'No phone network at Paradise Beach'
      ],
      insiderTip: 'Start early morning at Kudle Beach, hike to Paradise Beach, and take a ₹200 fisherman motorboat back to Om Beach so you do not have to hike back in the afternoon heat.'
    },
    transit: {
      fromHub: 'Bangalore / Hubli / Goa',
      steps: [
        'From Bangalore: Take overnight KSRTC Non-AC Sleeper or Airavat bus to Gokarna Cross (9.5 hrs, ₹750)',
        'Or take train 16595 Panchaganga Express from KSR Bengaluru to Gokarna Road Station (GOK)',
        'From Gokarna town, shared auto for ₹40 to Kudle Beach hill gate'
      ],
      approxFare: '₹750 Train/Bus + ₹40 Auto',
      transitTime: 'Overnight journey'
    },
    budgetStayNearby: [
      { name: 'Zostel Gokarna', type: 'Cliff Top Hostel', price: '₹650/bed', perk: 'Panoramic sea view cliff common room' },
      { name: 'Kudle Beach View Shacks', type: 'Rustic Beach Bamboo Hut', price: '₹900 - ₹1,200/hut', perk: 'Wake up 10 steps from the waves' }
    ],
    foodNearby: [
      { spot: "Namaste Cafe (Om Beach)", dish: 'Spanish Breakfast & Nutella Pancakes', cost: '₹220' },
      { spot: 'Little Paradise Shack', dish: 'Fresh Fish Thali with Kokum Kadi', cost: '₹180' }
    ]
  },
  // TAMIL NADU - PONDICHERRY & CHENNAI
  {
    id: 'pondy-white-town',
    city: 'tamilnadu-pondy',
    name: 'Pondicherry: White Town French Quarter & Promenade Beach',
    zone: 'French Quarter / Promenade',
    category: 'cafe',
    suitableFor: ['girlfriend', 'friends_gang', 'solo'],
    vibes: ['cafe', 'quiet', 'museum'],
    timeToSpend: '1 - 2 Days',
    bestTime: 'November to February (Morning cycling & evening promenade breeze)',
    costPerPerson: '₹100 (Bicycle rental) + ₹400 (Cafe pastries)',
    description: 'Vibrant mustard-yellow colonial villas with bougainvillea draped over French wrought-iron balconies, clean cobblestone lanes, and car-free evening seafront promenade.',
    reviewAnalysis: {
      rating: 4.8,
      totalReviews: 28000,
      vibeSentiment: 'Charming Franco-Tamil aesthetics, relaxed slow-living pace, romantic bicycle strolling.',
      pros: [
        'Promenade Beach road is completely closed to motor vehicles every day from 5 PM to 7 AM',
        'Bicycles rent for just ₹80-₹120/day; easy and fun to navigate the grid lanes',
        'Top-tier authentic French bakeries (croissants, sourdough, baguettes, gelato)'
      ],
      cons: [
        'Afternoon humidity can rise in summer; plan outdoor cycling before 10:30 AM and after 4 PM',
        'Alcohol permit checks at Tamil Nadu border if driving private car'
      ],
      insiderTip: 'Rent a pastel vintage bicycle from Baker Street, grab a chocolate croissant, and cycle down Rue Suffren towards Dumas Street.'
    },
    transit: {
      fromHub: 'Chennai (Guindy / Koyambedu) or Bangalore',
      steps: [
        'From Chennai: Take ECR (East Coast Road) express bus from Koyambedu CMBT or Thiruvanmiyur (3 hrs, ₹140) with scenic sea views',
        'From Bangalore: Direct KSRTC/PRTC sleeper bus (6.5 hrs, ₹550)',
        'In White Town: Everything is walkable or bike-friendly; zero cab required once you arrive!'
      ],
      approxFare: '₹140 Bus + ₹100 Bicycle rent for full day',
      transitTime: '3 hrs from Chennai'
    },
    budgetStayNearby: [
      { name: 'Micasa Hostel (White Town)', type: 'Heritage Backpacker Hostel', price: '₹600/bed', perk: 'Located right inside French Quarter' },
      { name: 'Auroville Youth Camp', type: 'Forest Eco-Stays', price: '₹450/night', perk: 'Surrounded by organic greenery' }
    ],
    foodNearby: [
      { spot: 'Baker Street', dish: 'Almond Croissant & Quiche Lorraine', cost: '₹160' },
      { spot: 'Cafe des Arts', dish: 'Nutella Crepe & Hibiscus Iced Tea', cost: '₹220' }
    ]
  }
];

// Curated full ready-to-go itineraries showcasing exact transit and scheduling
export const PRESET_ITINERARIES = [
  {
    id: 'blr-date-day',
    title: 'Bangalore Dream Date: Secret Book Cafes, Modern Art & Candlelight Garden',
    destination: 'bangalore',
    duration: '1-day',
    companion: 'girlfriend',
    tagline: 'Zero traffic stress, leafy heritage walks, quiet conversations & aesthetic food.',
    budgetTotal: '₹1,400 - ₹2,200 for 2 people',
    recommendedTransit: 'Namma Metro Purple Line + 2 short Rapido/Auto hops',
    days: [
      {
        dayNumber: 1,
        title: 'The Art, Stories & Sunset Trail',
        stops: [
          {
            time: '09:30 AM - 11:00 AM',
            placeId: 'champaca-bookstore',
            name: 'Champaca Bookstore & Rooftop Cafe',
            activity: 'Quiet breakfast, pour-over coffee, browse indie books under the avocado tree.',
            stayDuration: '1.5 hrs',
            whySpecial: 'Zero honking, gentle jazz, intimate seating for two.',
            cost: '₹450 for two'
          },
          {
            transitNext: {
              type: 'auto',
              mode: 'Auto / Rapido',
              route: 'Edward Road to Manikyavelu Mansion (Palace Road)',
              directions: 'Take a short 1.2 km auto ride via Cunningham Road directly to the NGMA gate.',
              time: '6 mins',
              fare: '₹40'
            }
          },
          {
            time: '11:15 AM - 01:45 PM',
            placeId: 'ngma-blr',
            name: 'National Gallery of Modern Art (NGMA)',
            activity: 'Stroll through the shaded sculpture garden, reflection pool, and art halls.',
            stayDuration: '2.5 hrs',
            whySpecial: 'High canopy rain trees, quiet benches, aesthetic photo spots.',
            cost: '₹100 for two entry tickets'
          },
          {
            transitNext: {
              type: 'metro',
              mode: 'Namma Metro Purple Line',
              route: 'Vidhana Soudha Metro -> MG Road / Church Street',
              directions: 'Walk to Dr. B.R. Ambedkar Vidhana Soudha station. Board Purple Line towards Whitefield. Exit at MG Road (Gate 2).',
              time: '12 mins',
              fare: '₹20/person (₹40 total)'
            }
          },
          {
            time: '02:00 PM - 04:00 PM',
            placeId: 'church-street-lunch',
            name: 'Church Street & Blossom Book House Lunch Crawl',
            activity: 'Lunch at cozy cellar cafe, followed by browsing 3 floors of second-hand books.',
            stayDuration: '2 hrs',
            whySpecial: 'Vibrant pedestrian walkway, book hunting, artisan gelato.',
            cost: '₹600 for lunch & dessert'
          },
          {
            transitNext: {
              type: 'walk',
              mode: 'Shaded Walk',
              route: 'Church Street directly into Cubbon Park Bandstand',
              directions: 'Cross Kasturba Road directly into the shaded bamboo avenues of Cubbon Park.',
              time: '7 mins walk',
              fare: '₹0 (Free)'
            }
          },
          {
            time: '04:15 PM - 06:15 PM',
            placeId: 'cubbon-state-library',
            name: 'Cubbon Park Bamboo Groves & Seshadri Iyer Memorial',
            activity: 'Golden hour walk under centuries-old mahogany trees and red colonial library.',
            stayDuration: '2 hrs',
            whySpecial: 'Gentle breeze, peaceful sunset walk away from traffic.',
            cost: 'Free'
          },
          {
            transitNext: {
              type: 'auto',
              mode: 'Auto to Richmond Town',
              route: 'Cubbon Park -> Wood Street / Richmond Town',
              directions: 'Quick 2 km auto to romantic courtyard restaurant.',
              time: '10 mins',
              fare: '₹60'
            }
          },
          {
            time: '07:00 PM - 09:30 PM',
            placeId: 'romantic-dinner',
            name: 'Candlelight Courtyard Dinner (Olive Beach / Grasshopper)',
            activity: 'Mediterranean mezze, wood-fired sourdough, candlelit alfresco seating.',
            stayDuration: '2.5 hrs',
            whySpecial: 'Fairy lights, warm hospitality, unhurried romantic finale.',
            cost: '₹1,200 - ₹1,800 for two'
          }
        ]
      }
    ]
  },
  {
    id: 'blr-guys-day',
    title: 'Bangalore Guy Squad Day Out: Go-Karting, Dosa Trail, Gaming & Night Food',
    destination: 'bangalore',
    duration: '1-day',
    companion: 'guy_squad',
    tagline: 'High torque racing, crispy benne dosas, arcade rivalries & legendary midnight food.',
    budgetTotal: '₹900 - ₹1,400 per person',
    recommendedTransit: 'Namma Metro Green Line + Rapido bikes',
    days: [
      {
        dayNumber: 1,
        title: 'Action, Butter & Adrenaline',
        stops: [
          {
            time: '08:00 AM - 10:00 AM',
            placeId: 'malleshwaram-dosa-trail',
            name: 'CTR (Central Tiffin Room) & Malleshwaram 8th Cross',
            activity: 'Wolf down crispy Benne Masala Dosas, Mangalore bajjis, and piping hot filter coffee.',
            stayDuration: '2 hrs',
            whySpecial: 'Unbeatable crust crunch, old-school banter with friends.',
            cost: '₹130 per person'
          },
          {
            transitNext: {
              type: 'metro',
              mode: 'Green Line Metro -> Purple Line',
              route: 'Sampige Road Metro to Indiranagar Metro',
              directions: 'Board Green Line at Sampige Road -> Interchange at Majestic -> Purple Line to Indiranagar Station.',
              time: '25 mins',
              fare: '₹35'
            }
          },
          {
            time: '10:30 AM - 01:30 PM',
            placeId: 'torq03-gokarting',
            name: 'Torq03 E-Karting & Bowling Arena',
            activity: 'High-speed go-kart heats, race telemetry challenge, laser tag showdown.',
            stayDuration: '3 hrs',
            whySpecial: 'Bragging rights for fastest lap time, tight hairpin drifts.',
            cost: '₹600 per person'
          },
          {
            transitNext: {
              type: 'cab',
              mode: 'Shared Auto / Rapido',
              route: 'Marathahalli to Indiranagar 100ft Road',
              directions: 'Hop into a shared auto down Old Airport Road.',
              time: '18 mins',
              fare: '₹40 per person'
            }
          },
          {
            time: '02:00 PM - 03:30 PM',
            placeId: 'nagarjuna-biryani',
            name: 'Nagarjuna Andhra Chilli Chicken & Biryani Feast',
            activity: 'Feast on fiery green chilli chicken, mutton biryani, and gun powder ghee rice.',
            stayDuration: '1.5 hrs',
            whySpecial: 'Heavy, spicy, deeply satisfying squad meal.',
            cost: '₹380 per person'
          },
          {
            transitNext: {
              type: 'metro',
              mode: 'Namma Metro Green Line',
              route: 'National College Station towards VV Puram',
              directions: 'Take Green Line to National College station -> 400m walk to Food Street.',
              time: '20 mins',
              fare: '₹25'
            }
          },
          {
            time: '07:30 PM - 10:30 PM',
            placeId: 'vv-puram-night-food',
            name: 'VV Puram Food Street (Thindi Beedi)',
            activity: 'Street food sprint: Paddus, Congress bun butter, hot Badam Milk, and twisted potato chips.',
            stayDuration: '2.5 hrs',
            whySpecial: 'Buzzing night atmosphere, cheap eats, open till late.',
            cost: '₹150 per person'
          }
        ]
      }
    ]
  },
  {
    id: 'kerala-5day-circuit',
    title: 'Kerala 5-Day Mist & Waters: Fort Kochi -> Munnar Hills -> Alleppey Canals',
    destination: 'kerala',
    duration: '3-5-days',
    companion: 'girlfriend',
    tagline: 'Art cafes, highest tea peaks, and silent wooden canoe backwaters on a smart budget.',
    budgetTotal: '₹6,500 - ₹9,500 per person (Includes stays & travel)',
    recommendedTransit: 'Train + KSRTC Super Fast Bus + Local Village Canoe',
    days: [
      {
        dayNumber: 1,
        title: 'Fort Kochi Heritage, Art Biennale & Street Cafes',
        stops: [
          {
            time: 'Morning & Afternoon',
            name: 'Fort Kochi Jew Town, Synagogue & David Hall Art Cafe',
            activity: 'Walk beneath raintree avenues, browse vintage spice shops, explore art exhibits.',
            stayDuration: 'Full Day',
            whySpecial: 'Cobblestone streets, Portuguese architecture, sea breeze.',
            cost: '₹400 for meals + entry'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Scenic Climb to Munnar & Tea Terraces',
        stops: [
          {
            time: 'Early Morning Travel',
            name: 'KSRTC Scenic Ghat Ride (Kochi to Munnar)',
            activity: 'Watch the plains transform into misty green waterfalls along NH85.',
            stayDuration: '4.5 hrs transit',
            whySpecial: 'Spectacular mountain views for just ₹165 bus ticket!',
            cost: '₹165'
          },
          {
            time: 'Afternoon & Sunset',
            name: 'Lockhart Tea Gap & Sunset Viewpoint',
            activity: 'Tea plantation walk and fresh cardamom tea at local stall.',
            stayDuration: '3 hrs',
            whySpecial: 'Cool 15°C breeze, emerald carpet rolling to horizon.',
            cost: '₹100'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Kolukkumalai Sunrise & Organic Tea Factory',
        stops: [
          {
            time: '04:30 AM - 11:30 AM',
            placeId: 'munnar-tea-peaks',
            name: 'Kolukkumalai 4x4 Jeep Sunrise Safari',
            activity: 'Watch sunrise over cloud blanket at 7,130 ft, traditional tea tasting.',
            stayDuration: '6 hrs',
            whySpecial: 'Ranked top sunrise spot in South India.',
            cost: '₹500 per person (shared Jeep)'
          }
        ]
      },
      {
        dayNumber: 4,
        title: 'Descent to Alleppey & Village Canoe Ride',
        stops: [
          {
            time: '02:00 PM - 06:30 PM',
            placeId: 'alleppey-backwater-canoe',
            name: 'Silent Country Canoe Canal Exploration',
            activity: 'Gliding through narrow water lily canals under palm canopies.',
            stayDuration: '4 hrs',
            whySpecial: 'Zero engine noise, pure romantic peace, authentic Karimeen fry.',
            cost: '₹450 per person'
          }
        ]
      },
      {
        dayNumber: 5,
        title: 'Marari Beach Sunrise & Return',
        stops: [
          {
            time: '07:00 AM - 11:30 AM',
            name: 'Marari Fishermen Beach & Coconut Groves',
            activity: 'Quiet morning beach stroll, fresh tender coconut, and train back to Kochi/Bangalore.',
            stayDuration: '3 hrs',
            whySpecial: 'Clean, crowd-free white sand beach.',
            cost: '₹80'
          }
        ]
      }
    ]
  }
];
