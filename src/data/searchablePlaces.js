// Master database of searchable localities, towns, and getaways in and around Bangalore, Karnataka, Kerala & Tamil Nadu

export const SEARCHABLE_PLACES = [
  // ================= BANGALORE MASTER & LOCALITIES =================
  {
    id: 'bangalore',
    name: 'Bengaluru (Bangalore)',
    category: 'Karnataka Urban Capital',
    region: 'Bengaluru Central / CBD',
    state: 'Karnataka',
    tagline: 'Garden City Canopy, Specialty Coffee Roasters & Tech-Culture Fusion',
    vibe: 'Cosmopolitan blend of 100-year-old botanical parks, vibrant indie bookstores, cobblestone cafe avenues, and premier multiplexes.',
    metroConnectivity: 'Interchange hub at Majestic (Purple & Green Lines) connecting all 4 corners of the city seamlessly.',
    recommendedStayTime: '1 - 3 Days',
    bestFor: ['girlfriend', 'friends_gang', 'solo', 'guy_squad'],
    nearbyPlacesInside: [
      { name: 'Cubbon Park & State Central Library', type: 'Botanical Heritage', duration: '2 hrs', highlight: '300 acres of red-brick Victorian library and mahogany tree canopies' },
      { name: 'Church Street & Blossom Book House', type: 'Pedestrian Boulevard', duration: '2 hrs', highlight: 'Millions of vintage books, artisan gelatos, and street buskers' },
      { name: 'Garuda Mall & INOX Insignia Cinema', type: 'Central Mall & Luxury Movies', duration: '3 hrs', highlight: 'Premier retail fashion, luxury recliners, and Magrath Road dining' },
      { name: 'Indiranagar 100ft Road Cafe Strip', type: 'Artisanal Coffee', duration: '2 hrs', highlight: 'Third Wave, Glen’s Bakehouse & specialty roasters' }
    ],
    transitFromCityCenter: 'Namma Metro Purple Line (Whitefield - Challaghatta) and Green Line (Madavara - Silk Institute) + Rapido bike taxis.',
    budgetStays: [
      { name: 'goSTOPS Bangalore Cantonment', price: '₹550/bed', type: 'Social Backpacker Hostel' },
      { name: 'Hotel Maurya Gandhi Nagar', price: '₹1,200/room', type: 'Central Budget Hotel' }
    ],
    famousFood: [
      'CTR Crispy Benne Masala Dosa with White Butter',
      'Vidyarthi Bhavan Ghee Roast Dosa',
      'Airlines Hotel Open-Air Filter Coffee Under Banyan Tree',
      'VV Puram Food Street Midnight Paddus & Hot Badam Milk'
    ],
    mallAndCinema: {
      mallName: 'Garuda Mall (Magrath Road)',
      theatreName: 'INOX Insignia Garuda Mall',
      bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/inox-garuda-mall-magrath-road/INGA',
      walkingRoute: '5 mins stroll from MG Road Metro Exit 2 down Brigade Road into Magrath Road.',
      trendingMovies: [
        { title: 'Kantara: A Legend Chapter 1', format: 'Dolby Atmos', rating: '9.3/10', lang: 'Kannada / Hindi' },
        { title: 'Avatar: Fire and Ash', format: '3D Atmos', rating: '9.1/10', lang: 'English / Multi' },
        { title: 'Dune: Part Three', format: 'Insignia Laser', rating: '9.4/10', lang: 'English' }
      ]
    }
  },
  {
    id: 'mahalakshmi-layout',
    name: 'Mahalakshmi Layout & Rajajinagar',
    category: 'Bangalore Locality',
    region: 'Bengaluru (North-West)',
    state: 'Karnataka',
    tagline: 'ISKCON Temple, Orion Lakeside Mall, PVR IMAX & Sandalwood Heritage',
    vibe: 'Iconic combination of spiritual serenity, high-end lakeside shopping, IMAX cinema, and lush residential avenues.',
    metroConnectivity: 'Green Line: Mahalakshmi Station & Sandal Soap Factory Station (300m walk via pedestrian pathway to Orion Mall & ISKCON)',
    recommendedStayTime: 'Half Day to Full Day',
    bestFor: ['girlfriend', 'family', 'friends_gang'],
    nearbyPlacesInside: [
      { 
        name: 'ISKCON Sri Radha Krishna Temple (Hare Krishna Hill)', 
        type: 'Spiritual & Architectural Wonder', 
        duration: '1.5 - 2 hrs', 
        highlight: 'Magnificent gold-plated altar, chanting halls, Hare Krishna Hill gardens, and fresh hot Khichdi Prasadam' 
      },
      { 
        name: 'Orion Mall & Lakeside Promenade (Brigade Gateway)', 
        type: 'Lakeside Lifestyle & IMAX', 
        duration: '3 hrs', 
        highlight: 'Expansive man-made lake with European cafes, lakeside amphitheatre, and 11-screen PVR IMAX' 
      },
      { 
        name: 'World Trade Center (WTC) & High Ultra Lounge', 
        type: 'Rooftop Lounge (31st Floor)', 
        duration: '1.5 hrs', 
        highlight: 'Highest open-air lounge in South India at 430 ft with panoramic sunset vistas over Bangalore skyline' 
      },
      { 
        name: 'Government Soap Factory & Heritage Museum', 
        type: 'Historic Industrial Heritage', 
        duration: '45 mins', 
        highlight: 'The original 1916 home of fragrant pure Mysore Sandal Soap' 
      }
    ],
    transitFromCityCenter: 'Board Green Line Metro at Majestic towards Madavara/Nagasandra. Get down at Sandal Soap Factory or Mahalakshmi Station (8 mins, ₹18). Direct 5 min walk.',
    budgetStays: [
      { name: 'Hotel Grand Bee (Rajajinagar)', price: '₹1,400/room', type: 'Clean Transit Hotel' },
      { name: 'Sheraton Grand Bangalore (Brigade Gateway)', price: '₹7,500/night', type: '5-Star Luxury Lakeside' }
    ],
    famousFood: [
      'ISKCON Pure Ghee Khichdi Prasadam & Sweet Pongal',
      'Chili’s American Grill Lakeside Burger (Orion Mall)',
      'The Big Kahuna Outdoor Lake Cocktails & Mezze',
      'Navayuga Andhra Mess Mutton Biryani (Rajajinagar 1st Block)'
    ],
    mallAndCinema: {
      mallName: 'Orion Mall (Brigade Gateway)',
      theatreName: 'PVR Orion Mall (IMAX with Laser, 4DX, P[XL])',
      bookMyShowUrl: 'https://in.bookmyshow.com/cinemas/bengaluru/pvr-orion-mall-dr-rajkumar-road-rajajinagar/PVOR',
      walkingRoute: 'Walk 400m from ISKCON entrance down Hare Krishna Hill, cross Dr. Rajkumar Road directly into Orion Mall lakeside entrance.',
      trendingMovies: [
        { title: 'Kantara: A Legend Chapter 1', format: 'IMAX 2D / Dolby Atmos', rating: '9.3/10', lang: 'Kannada / Hindi' },
        { title: 'Avatar: Fire and Ash', format: 'IMAX 3D / 4DX', rating: '9.1/10', lang: 'English / Hindi' },
        { title: 'Toxic', format: 'P[XL] Big Screen', rating: '9.0/10', lang: 'Kannada / Multi' },
        { title: 'Dune: Part Three', format: 'IMAX with Laser', rating: '9.4/10', lang: 'English' }
      ]
    }
  },
  {
    id: 'indiranagar',
    name: 'Indiranagar',
    category: 'Bangalore Locality',
    region: 'Bengaluru (East)',
    state: 'Karnataka',
    tagline: 'Craft Breweries, Boutique Cafes & Leafy Avenues',
    vibe: 'Hip, lively, great for cafe hopping, romantic brunch, and guy squad nightlife.',
    metroConnectivity: 'Purple Line (Indiranagar Station & Swami Vivekananda Road Station)',
    recommendedStayTime: 'Half Day to Full Day',
    bestFor: ['girlfriend', 'guy_squad', 'friends_gang'],
    nearbyPlacesInside: [
      { name: 'Indiranagar 100ft & 12th Main Cafe Strip', type: 'Cafe Crawl', duration: '2 hrs', highlight: 'Third Wave, Glen’s Bakehouse & specialty roasters' },
      { name: 'Toit Brewpub', type: 'Craft Brewery', duration: '2 hrs', highlight: 'Legendary wood-fired pizza and craft cider' },
      { name: 'The Humming Tree & Escape Rooms', type: 'Entertainment', duration: '1.5 hrs', highlight: 'VR games and live indie music gigs' }
    ],
    transitFromCityCenter: 'Purple Line Metro from Majestic straight to Indiranagar Station (~14 mins, ₹25).',
    budgetStays: [
      { name: 'Locul Central Indiranagar', price: '₹650/bed', type: 'Social Backpacker Hostel' },
      { name: 'Bloomrooms @ Indiranagar', price: '₹2,200/room', type: 'Boutique Hotel' }
    ],
    famousFood: ['Glen’s Bakehouse Red Velvet Cupcake', 'Toit Tintin Wit & Pizza', 'Meghana Foods Biryani (CMH Road)']
  },
  {
    id: 'koramangala',
    name: 'Koramangala',
    category: 'Bangalore Locality',
    region: 'Bengaluru (South-East)',
    state: 'Karnataka',
    tagline: 'Youth Hub, Startup Pulse & Midnight Eateries',
    vibe: 'Bustling, vibrant, unmatched food density, cozy garden cafes, late night dessert parlours.',
    metroConnectivity: 'Nearest: Trinity / MG Road (Purple Line) + 12 min Rapido, or upcoming Yellow Line',
    recommendedStayTime: 'Half Day to Full Day',
    bestFor: ['girlfriend', 'friends_gang', 'solo'],
    nearbyPlacesInside: [
      { name: 'The Hole in the Wall Cafe (4th Block)', type: 'Romantic Brunch', duration: '1.5 hrs', highlight: 'Waffles, English breakfast & garden terrace' },
      { name: 'Jyoti Nivas College (JNC) Lane', type: 'Street Shopping & Bakes', duration: '1.5 hrs', highlight: 'Thick shakes, momos, and boutique fashion' },
      { name: 'Dialogues Cafe / Board Game Parlours', type: 'Quiet & Games', duration: '2 hrs', highlight: 'Rooftop reading, pay-per-hour board games' }
    ],
    transitFromCityCenter: 'Take Purple Line to MG Road -> Rapido bike taxi straight down Hosur Road (₹60, 15 mins).',
    budgetStays: [
      { name: 'Cuckoo Hostel', price: '₹600/bed', type: 'Art & Eco Backpacker Hostel' },
      { name: 'FabHotels Koramangala 5th Block', price: '₹1,300/room', type: 'Budget Hotel' }
    ],
    famousFood: ['The Hole in the Wall Blueberry Pancakes', 'Truffles All-American Cheese Burger', 'Empire Ghee Rice & Kababs']
  },
  {
    id: 'malleshwaram',
    name: 'Malleshwaram',
    category: 'Bangalore Locality',
    region: 'Bengaluru (North-West)',
    state: 'Karnataka',
    tagline: 'Old Bangalore Heritage, Crispy Dosas & Temple Culture',
    vibe: 'Nostalgic, peaceful tree canopies, authentic traditional breakfast stalls, flower markets.',
    metroConnectivity: 'Green Line (Sampige Road / Mantri Square Station & Srirampura Station)',
    recommendedStayTime: 'Half Day (Morning or Evening)',
    bestFor: ['solo', 'girlfriend', 'family', 'guy_squad'],
    nearbyPlacesInside: [
      { name: 'CTR (Central Tiffin Room / Shri Sagar)', type: 'Legendary Tiffin', duration: '1.5 hrs', highlight: 'Crispiest Benne Masala Dosa in India' },
      { name: 'Kaadu Malleshwara Temple & Nandi Teertha', type: 'Ancient Heritage', duration: '1 hr', highlight: 'Natural subterranean spring flowing from stone Nandi mouth' },
      { name: 'Malleshwaram 8th Cross & Flower Market', type: 'Cultural Walk', duration: '1.5 hrs', highlight: 'Fragrant jasmine garlands, vintage silk stores, filter coffee' },
      { name: 'Veena Stores', type: 'Standing Breakfast', duration: '45 mins', highlight: 'Soft idlis with fiery mint-coconut chutney' }
    ],
    transitFromCityCenter: 'Green Line Metro north from Majestic to Sampige Road Station (6 mins, ₹15). Walk 500m.',
    budgetStays: [
      { name: 'Hotel Janatha (Margosa Rd)', price: '₹900/night', type: 'Heritage Lodge' }
    ],
    famousFood: ['CTR Benne Masala Dosa', 'Veena Stores Khara Bath', 'Asha Sweet Center Mysore Pak']
  },
  {
    id: 'church-street-mgroad',
    name: 'Church Street & MG Road',
    category: 'Bangalore Locality',
    region: 'Bengaluru (Central CBD)',
    state: 'Karnataka',
    tagline: 'Cobblestone Street, Indie Bookstores & European Cafes',
    vibe: 'Pedestrian-friendly, book lover paradise, vibrant street buskers, romantic walking dates.',
    metroConnectivity: 'Purple Line (MG Road Station & Cubbon Park Station directly on street)',
    recommendedStayTime: '3 - 5 Hours',
    bestFor: ['girlfriend', 'solo', 'friends_gang'],
    nearbyPlacesInside: [
      { name: 'Blossom Book House & Bookworm', type: 'Book Sanctuaries', duration: '2 hrs', highlight: 'Millions of vintage, rare, and secondhand books' },
      { name: 'Matteo Coffea & Church Street Social', type: 'Aesthetic Cafes', duration: '1.5 hrs', highlight: 'Fresh brews, shakes, outdoor cobblestone patio' },
      { name: 'Rangoli Metro Art Center', type: 'Art & Gallery Walk', duration: '1 hr', highlight: 'Open-air mural gallery and shadow garden' }
    ],
    transitFromCityCenter: 'Direct Purple Line Metro from Majestic to MG Road Station (Gate 2 exit right into Church St).',
    budgetStays: [
      { name: 'goSTOPS Bangalore Cantonment', price: '₹550/bed', type: 'Social Hostel' }
    ],
    famousFood: ['Indian Coffee House Mutton Cutlet', 'Matteo Iced Mocha', 'Milano Artisan Gelato']
  },
  {
    id: 'vasanth-nagar',
    name: 'Vasanth Nagar & Palace Road',
    category: 'Bangalore Locality',
    region: 'Bengaluru (Central-North)',
    state: 'Karnataka',
    tagline: 'Art Mansions, Quiet Rain Trees & Secret Book Cafes',
    vibe: 'Serene, aristocratic, wide shaded avenues, hidden garden bistros, romantic solitude.',
    metroConnectivity: 'Dr. B.R. Ambedkar Vidhana Soudha Station (Purple Line) + 4 min auto',
    recommendedStayTime: 'Half Day',
    bestFor: ['girlfriend', 'solo'],
    nearbyPlacesInside: [
      { name: 'National Gallery of Modern Art (NGMA)', type: 'Art & Sculpture Garden', duration: '2.5 hrs', highlight: 'Heritage mansion, lotus reflection pool & tree cafe' },
      { name: 'Champaca Bookstore & Cafe', type: 'Rooftop Book Cafe', duration: '2 hrs', highlight: 'Quiet reading under avocado tree canopy' },
      { name: 'Bangalore Palace Grounds', type: 'Tudor Architecture', duration: '1.5 hrs', highlight: 'Turreted castle inspired by Windsor Castle' }
    ],
    transitFromCityCenter: 'Purple Line to Vidhana Soudha station Gate B -> 1 km Rapido/Auto down Palace Road (₹35).',
    budgetStays: [
      { name: 'Hotel Maurya Gandhi Nagar', price: '₹1,200/room', type: 'Budget Hotel' }
    ],
    famousFood: ['Champaca Avocado Toast & Cold Brew', 'NGMA Courtyard Quiche', 'Millers 46 Steak & Burgers']
  },
  {
    id: 'jayanagar-basavanagudi',
    name: 'Jayanagar & Basavanagudi',
    category: 'Bangalore Locality',
    region: 'Bengaluru (South)',
    state: 'Karnataka',
    tagline: 'Gulmohar Boulevards, Historic Eateries & Cultural Soul',
    vibe: 'Peaceful residential greenery, massive parks, vintage filter coffee, slow-paced charm.',
    metroConnectivity: 'Green Line (Jayanagar, South End Circle, National College Stations)',
    recommendedStayTime: 'Half Day to Full Day',
    bestFor: ['girlfriend', 'family', 'solo'],
    nearbyPlacesInside: [
      { name: 'Vidyarthi Bhavan (Gandhi Bazaar)', type: 'Historic Dosa Diner', duration: '1 hr', highlight: 'Signature crispy ghee roast dosa since 1943' },
      { name: 'Bull Temple (Dodda Basavana Gudi) & Bugle Rock', type: 'Heritage & Rock Garden', duration: '1.5 hrs', highlight: 'Monolithic granite bull carved in 1537 and volcanic rock park' },
      { name: 'Jayanagar 4th Block Complex & Street Market', type: 'Shopping & Snacks', duration: '2 hrs', highlight: 'Pedestrian shopping, chaats, and silk stores' },
      { name: 'MN Krishna Rao Park', type: 'Green Canopy Walk', duration: '1 hr', highlight: 'Lush tree canopy and quiet walking tracks' }
    ],
    transitFromCityCenter: 'Green Line Metro from Majestic southwards to South End Circle / Jayanagar Station (14 mins, ₹22).',
    budgetStays: [
      { name: 'Urban Pods South BLR', price: '₹550/night', type: 'Transit Pods' }
    ],
    famousFood: ['Vidyarthi Bhavan Ghee Masala Dosa', 'Brahmin’s Coffee Bar Idli Vada with Coconut Chutney', 'Cool Joint Falooda']
  },
  {
    id: 'nandi-hills',
    name: 'Nandi Hills & Devanahalli',
    category: 'Bangalore Outskirts (Day Trip)',
    region: 'Chikkaballapur (60 km from BLR)',
    state: 'Karnataka',
    tagline: 'Sea of Clouds Sunrise, Cliff Fortress & Vineyards',
    vibe: 'Early morning misty highway bike ride, breathtaking sunrise above fog, cool mountain air.',
    metroConnectivity: 'Highway NH44 Drive / KSRTC Morning Bus from Majestic (08:30 AM)',
    recommendedStayTime: 'Half Day (05:00 AM - 11:30 AM)',
    bestFor: ['girlfriend', 'guy_squad', 'friends_gang'],
    nearbyPlacesInside: [
      { name: 'Tipu’s Drop & Sunrise Viewpoint', type: 'Sunrise Cliff', duration: '2 hrs', highlight: 'Dramatic sunrise over thick white cloud blanket at 4,850 ft' },
      { name: 'Bhoga Nandeeshwara Temple (Nandi Village base)', type: '1000-yr Dravidian Temple', duration: '1 hr', highlight: 'Exquisite stone Kalyani pond and ancient pillars' },
      { name: 'Grover Zampa Vineyard Tour', type: 'Vineyard & Wine Tasting', duration: '2 hrs', highlight: 'Barrel room tour, grape stomping, and tasting session' }
    ],
    transitFromCityCenter: 'Self-drive car/bike via Bellary Road NH44 (1.5 hrs). Toll road is smooth 6-lane highway.',
    budgetStays: [
      { name: 'KSTDC Hotel Mayura Pine Top Nandi Hills', price: '₹1,600/room', type: 'Hilltop Govt Hotel' }
    ],
    famousFood: ['Nandi Foothills Kadak Chai & Mirchi Bajji', 'Indian Paratha Company (NH44 Highway)', 'Grover Wine Tasting Platter']
  },
  {
    id: 'ramanagara',
    name: 'Ramanagara (Sholay Rocks)',
    category: 'Bangalore Outskirts (Day Trip)',
    region: 'Ramanagara District (50 km from BLR)',
    state: 'Karnataka',
    tagline: 'Granite Boulders, Silk City & Adventure Rock Trekking',
    vibe: 'Raw granite boulder scrambling, movie nostalgia, highway food crawl.',
    metroConnectivity: 'Kengeri Purple Line Metro + 30 min MEMU Train / KSRTC Bus along Mysore Highway',
    recommendedStayTime: 'Half Day to Full Day',
    bestFor: ['guy_squad', 'adventure', 'friends_gang'],
    nearbyPlacesInside: [
      { name: 'Ramadevara Betta Sanctuary (Vulture Sanctuary)', type: 'Boulder Trek', duration: '2.5 hrs', highlight: 'Iconic Sholay shooting cliffs and endangered long-billed vultures' },
      { name: 'Janapada Loka Folk Museum', type: 'Rural Heritage Village', duration: '1.5 hrs', highlight: 'Folk art, shadow puppets, wooden chariots, rural crafts' },
      { name: 'Manchanabele Dam / Arkavathi Backwaters', type: 'Scenic Reservoir', duration: '1.5 hrs', highlight: 'Serene sunset waters and birdwatching' }
    ],
    transitFromCityCenter: 'Take KSRTC bus from Satellite Bus Stand (Mysore Rd) or suburban train to Ramanagaram station (45 mins).',
    budgetStays: [
      { name: 'QMango Forest Adventure Camp', price: '₹1,200/tent', type: 'Adventure Tent Stay' }
    ],
    famousFood: ['Kamat Lokaruchi Jolada Rotti Oota (Jowar Roti Meal)', 'Mysore Road Highway Dhabas', 'Ramanagara Thatte Idli']
  },

  // ================= KARNATAKA GETAWAYS =================
  {
    id: 'coorg',
    name: 'Coorg (Madikeri & Virajpet)',
    category: 'Karnataka Weekend / 3-5 Days',
    region: 'Western Ghats (260 km from BLR)',
    state: 'Karnataka',
    tagline: 'Coffee Mist, Roaring Waterfalls & Kodava Cuisine',
    vibe: 'Romantic mountain chill, lush coffee plantations, spicy pork curry, stream-side bonfires.',
    metroConnectivity: 'Overnight KSRTC Sleeper Bus from Bangalore (6 hrs) or drive via Mysuru expressway',
    recommendedStayTime: '2 - 3 Days',
    bestFor: ['girlfriend', 'friends_gang', 'family'],
    nearbyPlacesInside: [
      { name: 'Abbey Falls & Raja’s Seat Sunset', type: 'Nature & Sunset', duration: '3 hrs', highlight: 'Waterfalls roaring amidst coffee bushes and hilltop valley sunset' },
      { name: 'Namdroling Monastery (Golden Temple, Bylakuppe)', type: 'Tibetan Sanctuary', duration: '2 hrs', highlight: 'Giant 40-ft gilded Buddha statues and Tibetan momo cafes' },
      { name: 'Mandalpatti 4x4 Jeep Peak Trek', type: 'Adventure Ridge', duration: '3.5 hrs', highlight: 'Bumpy off-road jeep drive to panoramic wind-swept peak' },
      { name: 'Dubare Elephant Camp (Cauvery River)', type: 'Wildlife & River', duration: '2 hrs', highlight: 'River coracle crossing and elephant bathing in river' }
    ],
    transitFromCityCenter: 'Overnight KSRTC Airavat Club Class from Bangalore Satellite Stand (Dep 11 PM -> Arrives 5:30 AM Madikeri, ₹650).',
    budgetStays: [
      { name: 'The Hosteller Coorg', price: '₹600/bed', type: 'Coffee Estate Hostel' },
      { name: 'Silent Valley Plantation Homestay', price: '₹1,400/night', type: 'Coffee Estate Homestay' }
    ],
    famousFood: ['Authentic Pandi Curry (Coorg Spiced Pork)', 'Kadambuttu (Steamed Rice Dumplings)', 'Freshly brewed estate Robusta/Arabica coffee']
  },
  {
    id: 'gokarna',
    name: 'Gokarna',
    category: 'Karnataka Coastal / 3-5 Days',
    region: 'Uttara Kannada Coast (480 km from BLR)',
    state: 'Karnataka',
    tagline: '5-Beach Trek, Cliff Cafes & Untamed Waves',
    vibe: 'Soulful, uncommercialized, rocky beach treks, dolphin sightings, bohemian beach shacks.',
    metroConnectivity: 'Overnight Panchaganga Express Train (16595) from Bangalore or KSRTC Sleeper',
    recommendedStayTime: '2 - 4 Days',
    bestFor: ['guy_squad', 'girlfriend', 'solo', 'friends_gang'],
    nearbyPlacesInside: [
      { name: '5-Beach Cliff Trek (Kudle to Paradise Beach)', type: 'Coastal Hike', duration: '5 hrs', highlight: 'Hike rocky promontories connecting Om, Half Moon & Paradise beaches' },
      { name: 'Mahabaleshwar Temple & Kotiteertha', type: 'Atmalinga Heritage', duration: '1.5 hrs', highlight: 'Ancient stone temple tank and coastal Sanskrit culture' },
      { name: 'Mirjan Fort (20 km away)', type: 'Laterite Stone Fort', duration: '2 hrs', highlight: 'Verdant green moss-covered 16th-century fortress' }
    ],
    transitFromCityCenter: 'Board Panchaganga Express (16595) at 6:50 PM from Yeshwantpur -> Arrive Gokarna Road 08:00 AM (Sleeper ₹380 / 3AC ₹1,020).',
    budgetStays: [
      { name: 'Zostel Gokarna', price: '₹650/bed', type: 'Clifftop Sea View Hostel' },
      { name: 'Kudle Beach View Bamboo Shacks', price: '₹1,000/hut', type: 'Rustic Beach Hut' }
    ],
    famousFood: ['Namaste Cafe Spanish Breakfast', 'Fresh Fish Thali with Kokum Kadi', 'Nutella Banana Pancakes on beach']
  },
  {
    id: 'hampi',
    name: 'Hampi',
    category: 'Karnataka Heritage / 3-5 Days',
    region: 'Vijayanagara (340 km from BLR)',
    state: 'Karnataka',
    tagline: 'Giant Granite Boulders, Sunken Ruins & Coracle Drifts',
    vibe: 'Mythical, otherworldly stone landscapes, sunset boulder climbs, acoustic cafe culture.',
    metroConnectivity: 'Overnight Hampi Express Train (16592) from KSR Bengaluru to Hosapete Jn',
    recommendedStayTime: '2 - 3 Days',
    bestFor: ['solo', 'guy_squad', 'friends_gang'],
    nearbyPlacesInside: [
      { name: 'Virupaksha Temple & Hampi Bazaar', type: '7th-Century Sanctuary', duration: '2 hrs', highlight: 'Active sacred temple with monolithic elephant and stone bazaar' },
      { name: 'Vijaya Vittala Temple & Stone Chariot', type: 'UNESCO Icon', duration: '2.5 hrs', highlight: 'World-famous stone chariot and musical resonant pillars' },
      { name: 'Sanapur Lake & Tungabhadra Coracle Ride', type: 'Water & Boulders', duration: '2 hrs', highlight: 'Cliff jumping, circular woven boats, and serene granite lake' },
      { name: 'Matanga Hill Sunrise Climb', type: 'Panoramic Viewpoint', duration: '2 hrs', highlight: '360-degree sunrise over the entire ancient ruined empire' }
    ],
    transitFromCityCenter: 'Hampi Express (16592) departs KSR Bengaluru 10:00 PM -> Arrives Hosapete 07:00 AM (₹280 Sleeper). Local bus to Hampi (30 mins, ₹20).',
    budgetStays: [
      { name: 'Hampi Backpackers', price: '₹500/bed', type: 'Riverside Hostel' },
      { name: 'Gouthami Guest House', price: '₹1,100/room', type: 'Acoustic Hippie Island Stay' }
    ],
    famousFood: ['Mango Tree Restaurant Thali & Banoffee Pie', 'Israeli Shakshuka & Hummus Platters', 'South Indian Filter Coffee in mud cups']
  },
  {
    id: 'chikmagalur',
    name: 'Chikmagalur',
    category: 'Karnataka Hills / 3-5 Days',
    region: 'Chikkamagaluru (240 km from BLR)',
    state: 'Karnataka',
    tagline: 'Highest Peak in Karnataka, Waterfall Drives & Coffee Estates',
    vibe: 'Cloud blankets rolling over emerald slopes, crisp mountain chill, rugged 4x4 trails.',
    metroConnectivity: 'Direct KSRTC Airavat Club Class bus (5 hrs from BLR) or Hassan Train',
    recommendedStayTime: '2 - 3 Days',
    bestFor: ['girlfriend', 'friends_gang', 'guy_squad'],
    nearbyPlacesInside: [
      { name: 'Mullayanagiri Peak (6,330 ft)', type: 'Highest Mountain Peak', duration: '3 hrs', highlight: 'Climb 500 stone steps into swirling clouds and wind' },
      { name: 'Baba Budangiri & Manikyadhara Falls', type: 'Sacred Hill Range', duration: '3 hrs', highlight: 'Crescent mountain ridge where coffee was first planted in India in 1670' },
      { name: 'Hebbe Falls Off-Road Jeep Safari', type: 'Hidden Jungle Waterfall', duration: '3 hrs', highlight: '4x4 river-crossing jeep trek through private coffee estates' }
    ],
    transitFromCityCenter: 'KSRTC Non-AC Sleeper or Super Fast bus from Kempegowda Bus Stand Majestic (5 hrs, ₹350 - ₹550).',
    budgetStays: [
      { name: 'Zostel Chikmagalur', price: '₹650/bed', type: 'Hillview Backpacker Hostel' },
      { name: 'Valley View Homestay', price: '₹1,300/night', type: 'Traditional Plantation Homestay' }
    ],
    famousFood: ['Malnad Akki Rotti with Kaalu Huli', 'Steaming Hot Chicken Ghee Roast', 'Fresh Single-Origin Peaberry Coffee']
  },

  // ================= KERALA MASTER & DESTINATIONS =================
  {
    id: 'kerala',
    name: 'Kerala Grand Circuit',
    category: 'Statewide Coastal & Hill Circuit',
    region: 'Kochi, Munnar, Alleppey & Varkala',
    state: 'Kerala',
    tagline: 'Misty Tea Terraces, Serene Backwater Canals & Red Cliff Sunsets',
    vibe: 'God’s Own Country: colonial spice harbors, rolling 6,000 ft tea plantations, palm-fringed backwater lagoons, and bohemian ocean cliffs.',
    metroConnectivity: 'Kochi Water Metro, Scenic Coastal Railway (Ernakulam - Alleppey - Varkala), and KSRTC Super Fast mountain buses.',
    recommendedStayTime: '3 - 7 Days',
    bestFor: ['girlfriend', 'solo', 'friends_gang', 'guy_squad'],
    nearbyPlacesInside: [
      { name: 'Varkala Red Laterite Cliffs & Papanasam Beach', type: 'Ocean Cliff & Surf', duration: '1 - 2 Days', highlight: 'Pedestrian cliff strip, holy mineral springs, sunset cafes & surf lessons' },
      { name: 'Munnar Lockhart Gap & Kolukkumalai Sunrise', type: 'Tea Terraces & Peaks', duration: '2 Days', highlight: 'Crisp mountain air, highest organic tea plantation in the world' },
      { name: 'Alleppey Backwaters & Country Canoe Drift', type: 'Serene Waterways', duration: '1 Day', highlight: 'SWTD public boat or country canoe through quiet palm-fringed village canals' },
      { name: 'Fort Kochi Colonial Quarters & Chinese Fishing Nets', type: 'Arts & Spice Port', duration: '1 Day', highlight: 'Jew Town antiques, Dutch palace, art cafes, and sunset at harbor' }
    ],
    transitFromCityCenter: 'KSR Bengaluru to Ernakulam / Trivandrum overnight express train, or direct flight to Kochi (COK). Scenic coastal rail connects all hubs for under ₹100.',
    budgetStays: [
      { name: 'The Lost Hostels Varkala', price: '₹550/bed', type: 'Clifftop Backpacker Hostel' },
      { name: 'Zostel Munnar', price: '₹650/bed', type: 'Misty Mountain Valley Hostel' },
      { name: 'Palmy Lake Resort Alleppey', price: '₹1,400/night', type: 'Riverside Backwater Homestay' }
    ],
    famousFood: [
      'Appam with Fragrant Vegetable / Chicken Stew',
      'Karimeen Pollichathu (Pearl Spot Fish Steamed in Banana Leaf)',
      'Darjeeling Cafe Wood-Fired Pizza at Varkala Sunset',
      'Toddy Shop Fiery Prawn & Tapioca Roast'
    ]
  },
  {
    id: 'munnar',
    name: 'Munnar',
    category: 'Kerala Hills / 3-5 Days',
    region: 'Idukki District, Kerala (470 km from BLR)',
    state: 'Kerala',
    tagline: '7,130 ft Kolukkumalai Sunrise, Orthodox Tea Rolls & Mountain Mist',
    vibe: 'Unmatched visual emerald beauty, chilly 14°C mist, rolling tea carpet, cozy homestay dinners.',
    metroConnectivity: 'Direct KSRTC Club Class Sleeper bus from Bangalore (9 hrs) or Kochi Bus (4 hrs)',
    recommendedStayTime: '2 - 3 Days',
    bestFor: ['girlfriend', 'friends_gang', 'family'],
    nearbyPlacesInside: [
      { name: 'Kolukkumalai Sunrise 4x4 Jeep Safari', type: 'Highest Tea Plantation', duration: '5 hrs', highlight: 'Sunrise over endless sea of clouds at 7,130 ft' },
      { name: 'KDHP Tea Museum & Factory', type: 'Heritage Industrial', duration: '2 hrs', highlight: 'Live tea rolling machines from 1911 and white tea tasting' },
      { name: 'Lockhart Gap & Mattupetty Dam', type: 'Panoramic Overlook', duration: '2.5 hrs', highlight: 'Deep misty gorge and serene mountain lake' }
    ],
    transitFromCityCenter: 'Overnight KSRTC Airavat from Shanthinagar Bangalore (Dep 08:30 PM -> Arrives 06:00 AM Munnar, ₹850).',
    budgetStays: [
      { name: 'Zostel Munnar (Devikulam)', price: '₹650/bed', type: 'Mountain View Hostel' },
      { name: 'Misty Mountain Homestay', price: '₹1,300/night', type: 'Family Plantation Homestay' }
    ],
    famousFood: ['Rapsy Restaurant Beef/Chicken Roast with Flaky Malabar Parotta', 'Hot Cardamom Ginger Chai', 'Kerala Appam with Vegetable Stew']
  },
  {
    id: 'alleppey',
    name: 'Alleppey (Alappuzha)',
    category: 'Kerala Backwaters / 2-3 Days',
    region: 'Alappuzha District, Kerala (580 km from BLR)',
    state: 'Kerala',
    tagline: 'Silent Village Canals, Water Lilies & Country Wooden Canoes',
    vibe: 'Tranquil water world, kingfishers swooping, coconut palm shadows, romantic canoe rowing.',
    metroConnectivity: 'Direct coastal train from Bangalore/Kochi to Alappuzha Station (ALLP)',
    recommendedStayTime: '1 - 2 Days',
    bestFor: ['girlfriend', 'solo', 'family'],
    nearbyPlacesInside: [
      { name: 'Kainakary Village Silent Canoe Ride', type: 'Backwater Drift', duration: '4 hrs', highlight: 'Wooden rowed boat through narrow village canals without noisy motors' },
      { name: 'Alleppey Old Lighthouse & Pier Beach', type: 'Colonial Beach', duration: '1.5 hrs', highlight: '150-year-old red-and-white lighthouse and beach sunset' },
      { name: 'SWTD Public Ferry to Kottayam', type: 'Public Secret Route', duration: '2.5 hrs', highlight: 'Ride identical backwaters as ₹8,000 houseboats for just ₹25 government ticket' }
    ],
    transitFromCityCenter: 'Train 16526 Island Express from KSR Bengaluru to Alappuzha (ALLP) (Sleeper ₹380, 11 hrs).',
    budgetStays: [
      { name: 'Zostel Alleppey', price: '₹600/bed', type: 'Beachside Hostel' },
      { name: 'Palmy Lake Resort Homestay', price: '₹1,400/night', type: 'Riverside Backwater Homestay' }
    ],
    famousFood: ['Karimeen Pollichathu (Pearl Spot Fish in Banana Leaf)', 'Toddy Shop Tapioca with Fiery Fish Curry', 'Duck Mappas with Idiyappam']
  },
  {
    id: 'varkala',
    name: 'Varkala',
    category: 'Kerala Coastal / 2-3 Days',
    region: 'Thiruvananthapuram District (680 km from BLR)',
    state: 'Kerala',
    tagline: 'Red Laterite Sea Cliffs, Sunset Bohemian Cafes & Surf Waves',
    vibe: 'Laidback coastal bliss, pedestrian cliff walkway, live acoustic guitar, black sand beach.',
    metroConnectivity: 'Direct Train from Bangalore/Kochi to Varkala Sivagiri Station (VAK)',
    recommendedStayTime: '2 - 3 Days',
    bestFor: ['girlfriend', 'solo', 'friends_gang'],
    nearbyPlacesInside: [
      { name: 'North Cliff Pedestrian Walkway', type: 'Scenic Promontory', duration: '3 hrs', highlight: '1.5 km of ocean cliff cafes, Tibetan shops & sea views' },
      { name: 'Black Beach & Papanasam Holy Beach', type: 'Black Sand Beach', duration: '2 hrs', highlight: 'Natural spring water streams and surf waves' },
      { name: 'Jatayu Earth’s Center (28 km away)', type: 'World’s Largest Bird Sculpture', duration: '3 hrs', highlight: 'Giant hill-top stone sculpture and cable car ropeway' }
    ],
    transitFromCityCenter: 'Train from Bangalore or 1.5 hr coastal express from Alleppey to Varkala Sivagiri Station (VAK). Auto to Cliff is ₹100.',
    budgetStays: [
      { name: 'The Lost Hostels Varkala', price: '₹550/bed', type: 'Cliff Backpacker Hostel' },
      { name: 'Green Lawn Homestay', price: '₹1,200/night', type: 'Private Garden Cottage' }
    ],
    famousFood: ['Darjeeling Cafe Wood-Fired Pizza', 'Fresh Pineapple Ginger Juice', 'Kerala Seafood Sizzler Platter']
  },

  // ================= TAMIL NADU & PONDICHERRY =================
  {
    id: 'pondicherry',
    name: 'Pondicherry (Puducherry)',
    category: 'Tamil Nadu Coast / 2-4 Days',
    region: 'Puducherry (310 km from BLR, 150 km from Chennai)',
    state: 'Tamil Nadu & Puducherry',
    tagline: 'French Yellow Colonial Quarters, Pastel Cycles & Sea Promenade',
    vibe: 'Charming Franco-Tamil aesthetics, bougainvillea balconies, bicycle cruising, artisanal bakeries.',
    metroConnectivity: 'Direct KSRTC/PRTC Bus from Bangalore (6.5 hrs) or Scenic ECR Bus from Chennai (3 hrs)',
    recommendedStayTime: '2 - 3 Days',
    bestFor: ['girlfriend', 'solo', 'friends_gang'],
    nearbyPlacesInside: [
      { name: 'White Town French Quarter Cycling', type: 'Colonial Heritage', duration: '3 hrs', highlight: 'Mustard villas, Rue Suffren, vintage bicycle cruising' },
      { name: 'Auroville & Matrimandir Meditation Dome', type: 'Spiritual Community', duration: '3.5 hrs', highlight: 'Golden spherical meditation dome set amidst forest silence' },
      { name: 'Promenade Beach (No Vehicles 5 PM - 7 AM)', type: 'Car-Free Seafront', duration: '2 hrs', highlight: 'Evening sea breeze walk past French War Memorial and Gandhi Statue' },
      { name: 'Baker Street & French Bakeries', type: 'Artisan Patisserie', duration: '1 hr', highlight: 'Freshly baked almond croissants, sourdough baguettes, quiches' }
    ],
    transitFromCityCenter: 'KSRTC Non-AC Sleeper from Shanthinagar BLR (Dep 10:45 PM -> Arrive 06:00 AM Pondy, ₹550). Once there, rent bicycles for ₹100/day.',
    budgetStays: [
      { name: 'Micasa Hostel White Town', price: '₹600/bed', type: 'Heritage French Hostel' },
      { name: 'Auroville Youth Camp', price: '₹450/night', type: 'Forest Eco Stay' }
    ],
    famousFood: ['Baker Street Almond Croissant', 'Cafe des Arts Nutella Crepe & Hibiscus Cooler', 'Surguru Veg Thali & Filter Coffee']
  },
  {
    id: 'chennai',
    name: 'Chennai (Madras)',
    category: 'Tamil Nadu Metropolis / 1-2 Days',
    region: 'Tamil Nadu (350 km from BLR)',
    state: 'Tamil Nadu',
    tagline: 'World’s Second Longest Beach, Classical Music & Fluffy Idlis',
    vibe: 'Rich heritage, soulful coastal mornings, dramatic temple gopurams, legendary brass tumbler coffee.',
    metroConnectivity: 'Chennai Metro (Blue Line & Green Line) connects Airport to Central & Guindy',
    recommendedStayTime: '1 - 2 Days',
    bestFor: ['solo', 'family', 'food_crawl'],
    nearbyPlacesInside: [
      { name: 'Marina Beach Sunrise Walk', type: 'Iconic Coastline', duration: '2 hrs', highlight: 'Watch catamarans launch into morning waves with hot filter coffee' },
      { name: 'Mylapore Kapaleeshwarar Temple', type: 'Dravidian Architecture', duration: '1.5 hrs', highlight: 'Towering polychrome gopuram and peaceful temple tank' },
      { name: 'Santhome Cathedral Basilica', type: 'Neo-Gothic Shrine', duration: '1 hr', highlight: 'Built over the tomb of St. Thomas Apostle right beside the sea' },
      { name: 'Besant Nagar (Bessie) Beach & Elliot’s Promenade', type: 'Sunset Chill', duration: '2 hrs', highlight: 'Vibrant seaside cafes, corn cobs, and cool evening breeze' }
    ],
    transitFromCityCenter: 'Vande Bharat Express (20608) from KSR Bengaluru to Chennai Central (4 hrs 15 mins, ₹950 Chair Car).',
    budgetStays: [
      { name: 'Red Lollipop Hostel Chennai', price: '₹550/bed', type: 'Backpacker Hostel' },
      { name: 'New Woodlands Hotel Mylapore', price: '₹1,600/room', type: 'Heritage Hotel' }
    ],
    famousFood: ['Murugan Idli Shop Ghee Podi Idli', 'Rayar’s Mess Filter Coffee & Vada', 'Marina Beach Sundal (Spiced Chickpeas)']
  },
  {
    id: 'mahabalipuram',
    name: 'Mahabalipuram (Mamallapuram)',
    category: 'Tamil Nadu Coast (Day Trip)',
    region: 'Chengalpattu (55 km from Chennai)',
    state: 'Tamil Nadu',
    tagline: 'UNESCO Shore Temples, Monolithic Rathas & Coastal Sculptures',
    vibe: 'Ancient stone monoliths whispering over roaring ocean waves, rock-cut cave temples.',
    metroConnectivity: 'Scenic ECR Bus from Chennai CMBT/Thiruvanmiyur (1.5 hrs, ₹40) or taxi',
    recommendedStayTime: 'Half Day to Full Day',
    bestFor: ['girlfriend', 'solo', 'family'],
    nearbyPlacesInside: [
      { name: 'Shore Temple (7th Century Pallava Shrine)', type: 'UNESCO World Heritage', duration: '2 hrs', highlight: 'Twin stone spires lashed by salty sea spray for 1,300 years' },
      { name: 'Pancha Rathas (Five Chariots)', type: 'Monolithic Rock Carvings', duration: '1.5 hrs', highlight: 'Five distinct shrines carved out of single granite boulders' },
      { name: 'Krishna’s Butterball', type: 'Defying Gravity Boulder', duration: '45 mins', highlight: 'Gigantic 250-ton granite boulder balancing precariously on smooth rock slope' }
    ],
    transitFromCityCenter: 'Take AC bus 588 from Chennai Broadway/Thiruvanmiyur straight down East Coast Road (1.5 hrs, ₹55).',
    budgetStays: [
      { name: 'Mojo Guesthouse Mahabalipuram', price: '₹800/room', type: 'Surfer Guesthouse' }
    ],
    famousFood: ['Fresh Catch Grilled Red Snapper at Beach Shacks', 'Moonrakers Seafood Platter', 'South Indian Filter Coffee']
  },
  {
    id: 'ooty',
    name: 'Ooty (Udhagamandalam) & Nilgiris',
    category: 'Tamil Nadu Hills / 3-5 Days',
    region: 'Nilgiris District (270 km from BLR)',
    state: 'Tamil Nadu',
    tagline: 'UNESCO Mountain Toy Train, Eucalyptus Mist & Chocolate Boutiques',
    vibe: 'Colonial hill station charm, cold 10°C breeze, emerald pine forests, homemade fudge chocolates.',
    metroConnectivity: 'Overnight KSRTC/TNSTC Bus from Bangalore (7 hrs) via Bandipur tiger reserve',
    recommendedStayTime: '2 - 3 Days',
    bestFor: ['girlfriend', 'family', 'friends_gang'],
    nearbyPlacesInside: [
      { name: 'Nilgiri Mountain Railway (Toy Train to Coonoor)', type: 'UNESCO Heritage Train', duration: '3 hrs', highlight: 'Steam rack-and-pinion locomotive crossing 250 bridges and tunnels' },
      { name: 'Doddabetta Peak (8,652 ft)', type: 'Highest Nilgiri Summit', duration: '2 hrs', highlight: 'Telescope house viewing misty valleys and Chamundi Hills' },
      { name: 'Government Botanical Gardens & Ooty Lake', type: 'Colonial Parks', duration: '2.5 hrs', highlight: 'Fossil tree trunk, Italian floral terrace, and paddle boating' },
      { name: 'Pykara Waterfalls & Needle Rock Viewpoint', type: 'Wild Nature', duration: '3 hrs', highlight: 'Unspoiled pine forests and cascading dam waters' }
    ],
    transitFromCityCenter: 'Overnight KSRTC Airavat from Bangalore to Ooty (7 hrs, ₹620) passing through scenic Bandipur & Mudumalai forests.',
    budgetStays: [
      { name: 'Zostel Ooty', price: '₹650/bed', type: 'Colonial Cottage Hostel' },
      { name: 'Sherlock Hotel Homestay', price: '₹1,500/night', type: 'Victorian Estate Room' }
    ],
    famousFood: ['King Star Homemade Dark Truffles & Fudge', 'Hot Ooty Varkey (Crisp Nilgiri Pastry) with Cardamom Tea', 'Earl’s Court English Stew']
  }
];
