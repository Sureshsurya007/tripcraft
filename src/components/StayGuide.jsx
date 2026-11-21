import React, { useState } from 'react';
import { Home, ShieldCheck, MapPin, IndianRupee, Sparkles, Check, Clock, ThumbsUp, AlertCircle } from 'lucide-react';
import { DESTINATIONS } from '../data/tripsData';
import { DESTINATION_DETAILS } from '../utils/itineraryEngine';

export default function StayGuide({ itinerary }) {
  const [selectedDest, setSelectedDest] = useState(itinerary?.destination || 'bangalore');
  const details = DESTINATION_DETAILS[selectedDest] || DESTINATION_DETAILS.bangalore;

  const STAY_INVENTORY = {
    bangalore: [
      {
        name: 'Locul Central Indiranagar',
        type: 'Social Backpacker Hostel',
        zone: 'Indiranagar 100ft Road',
        pricePerNight: '₹600 - ₹850 / bunk',
        coupleRoom: '₹1,800 / private room',
        vibe: 'Young, energetic, rooftop work-cafe, gaming console, walking distance to metro.',
        pros: ['Only 4 mins walk from Indiranagar Metro Station', 'Surrounded by 50+ craft cafes & bakeries', 'Clean AC dorms with personal privacy curtains'],
        cons: ['Weekend social noise in common lounge', 'No car parking on narrow lane'],
        bookingTip: 'Book directly on their website to avoid 15% aggregator commission.'
      },
      {
        name: 'Cuckoo Hostel & Cultural Residency',
        type: 'Art & Eco Backpacker Hostel',
        zone: 'Koramangala 4th Block',
        pricePerNight: '₹550 - ₹750 / bunk',
        coupleRoom: '₹1,600 / private room',
        vibe: 'Peaceful, green terrace garden, indie books, hammock chill, acoustic jams.',
        pros: ['Great for couples and solo girls (high safety rating)', 'Rooftop terrace under green foliage', 'Quiet neighborhood without main road honking'],
        cons: ['A bit further from Metro line (need Rapido/Auto to Trinity/MG Road)'],
        bookingTip: 'Ask for the terrace dorm rooms for maximum natural ventilation.'
      },
      {
        name: 'Hotel Maurya (Gandhi Nagar / Central)',
        type: 'Heritage Value Hotel',
        zone: 'Near Majestic & Race Course',
        pricePerNight: '₹1,200 - ₹1,600 / double room',
        coupleRoom: '₹1,400 / double room',
        vibe: 'Traditional, spotless family/couple hotel, central hub for all transit lines.',
        pros: ['Direct walking access to Majestic Metro Interchange (Green & Purple lines)', 'In-house vegetarian South Indian restaurant with piping hot filter coffee', '24-hour check-in available'],
        cons: ['Classic 90s decor, not an aesthetic Instagram hotel'],
        bookingTip: 'Call the reception directly for best corporate/walk-in tariff.'
      }
    ],
    kerala: [
      {
        name: 'Zostel Munnar (Devikulam / Vattavada)',
        type: 'Cliffside Mountain Hostel',
        zone: 'Munnar Ghats (7,000 ft)',
        pricePerNight: '₹650 - ₹900 / bunk',
        coupleRoom: '₹2,400 / private cottage',
        vibe: 'Spectacular mountain panoramas, tea garden walks, cozy common bonfires.',
        pros: ['Floor-to-ceiling windows overlooking rolling tea mist', 'Organizes shared Kolukkumalai sunrise 4x4 jeeps at low pooled rates', 'Safe, modern, vibrant traveler community'],
        cons: ['Located 14 km from Munnar town center (catch local bus or share auto)'],
        bookingTip: 'Rooms book out 2-3 weeks in advance for weekends.'
      },
      {
        name: 'Palmy Lake Resort & Homestay',
        type: 'Riverside Village Homestay',
        zone: 'Alleppey (Kainakary Backwaters)',
        pricePerNight: '₹1,200 - ₹1,600 / private room',
        coupleRoom: '₹1,400 / private cottage',
        vibe: 'Authentic Kerala family hospitality, footsteps from canal waterways, homemade meals.',
        pros: ['Host organizes village canoe rides for ₹400 instead of ₹8,000 houseboats', 'Fresh Kerala breakfast (appam with vegetable stew) cooked by host family', 'Extreme tranquility surrounded by water lilies'],
        cons: ['Accessible via footbridge and small canal path (pack light)'],
        bookingTip: 'Request home-cooked Karimeen fish curry for dinner.'
      },
      {
        name: 'The Lost Hostels Varkala',
        type: 'Bohemian Sea Cliff Hostel',
        zone: 'North Cliff, Varkala',
        pricePerNight: '₹500 - ₹750 / bunk',
        coupleRoom: '₹1,800 / private cottage',
        vibe: 'Surfboards, hammocks, yoga mats, guitar open mics, sea breeze.',
        pros: ['Only 200 meters from North Cliff walkway and sunset cafes', 'Surfing lessons and board rentals on premises', 'Safe, welcoming environment for female solo travelers & couples'],
        cons: ['Hot water relies on solar geyser (plentiful during sunny hours)'],
        bookingTip: 'Dorm bed with balcony facing garden has the best afternoon cross breeze.'
      }
    ]
  };

  const stays = STAY_INVENTORY[selectedDest] || STAY_INVENTORY.bangalore;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Home className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Where to Stay Cheap, Safe & Well-Located
              </h2>
              <p className="text-xs text-slate-500">
                Curated hostels, budget homestays & neighborhood guides to maximize time and eliminate wasted travel
              </p>
            </div>
          </div>

          {/* Destination Selector Pill */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {DESTINATIONS.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDest(d.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                  selectedDest === d.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {d.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Pacing & Duration Recommendation */}
        <div className="mt-5 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
          <div className="font-bold text-emerald-950 flex items-center gap-2 mb-1.5">
            <Clock className="w-4 h-4 text-emerald-700" />
            <span>Optimal Duration & Pacing Formula for {details.name}</span>
          </div>
          <p className="text-emerald-900 leading-relaxed">
            {selectedDest === 'bangalore' && (
              '1 Day is ideal for a focused single-zone trail (e.g. Vasanth Nagar + Cubbon Park + Church Street) or a high-energy squad day. 2-3 Days allows covering both North heritage (Malleshwaram) and South hip culture (Indiranagar/Koramangala) without spending half the day stuck in traffic.'
            )}
            {selectedDest === 'kerala' && (
              'Do NOT rush Kerala! Spend 2 full days in Munnar (1 day for town & tea factory, 1 morning for Kolukkumalai 4x4 sunrise), 1 day in Alleppey (afternoon silent village canoe ride), and 2 days in Varkala (cliff sunsets, cafes & surf).'
            )}
            {selectedDest !== 'bangalore' && selectedDest !== 'kerala' && (
              'Plan 2-3 days per base hub. Avoid changing hotels every single night; unpack once and explore nearby beaches, trails, or monuments via public buses and rented scooters.'
            )}
          </p>
        </div>
      </div>

      {/* Neighborhood Breakdown Cards */}
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-600" />
          <span>Neighborhood Breakdown & Staying Strategy</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {details.stayCategories.map((cat, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 transition-all text-xs">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-slate-900 text-sm">{cat.area}</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {cat.budgetHostel.split(' ')[1]}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-3">
                {cat.vibe}
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11.5px]">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Hostel / Dorm</span>
                  <span className="font-medium text-slate-800">{cat.budgetHostel}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Private Room</span>
                  <span className="font-medium text-slate-800">{cat.budgetHotel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Budget Stays List */}
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Vetted Hostels & Homestays (High Review Scores & Safety)</span>
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {stays.map((stay, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-base text-slate-900">{stay.name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                      {stay.type}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {stay.zone}
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-sm font-extrabold text-emerald-700">{stay.pricePerNight}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{stay.coupleRoom}</div>
                </div>
              </div>

              <p className="text-xs text-slate-700 mt-3 leading-relaxed">
                {stay.vibe}
              </p>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-100 text-xs">
                <div className="space-y-1">
                  <span className="font-bold text-slate-800 flex items-center gap-1 text-[11px]">
                    <ThumbsUp className="w-3 h-3 text-emerald-600" />
                    Why Travelers Love It:
                  </span>
                  {stay.pros.map((p, pIdx) => (
                    <div key={pIdx} className="text-slate-600 text-[11.5px] flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-slate-800 flex items-center gap-1 text-[11px]">
                    <AlertCircle className="w-3 h-3 text-amber-600" />
                    Good to Know:
                  </span>
                  {stay.cons.map((c, cIdx) => (
                    <div key={cIdx} className="text-slate-600 text-[11.5px] flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insider Booking Hack */}
              <div className="mt-3.5 p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-[11.5px] text-slate-700 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span><strong className="text-slate-900">Booking Secret:</strong> {stay.bookingTip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
