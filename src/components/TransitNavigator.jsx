import React, { useState } from 'react';
import { 
  Train, Bus, Car, Bike, Footprints, Navigation, MapPin, 
  ArrowRight, ShieldCheck, AlertTriangle, IndianRupee, Clock, CheckCircle2, Info
} from 'lucide-react';

export default function TransitNavigator({ itinerary }) {
  const dest = itinerary?.destination || 'bangalore';

  // Preset multi-modal route lookup helpers
  const PRESET_ROUTES = {
    bangalore: [
      {
        from: 'Majestic (KSR Interchange)',
        to: 'NGMA (National Gallery of Modern Art, Palace Rd)',
        totalTime: '18 mins',
        totalFare: '₹45',
        modeBadge: 'Metro + Rapido',
        steps: [
          { mode: 'metro', line: 'Purple Line (Platform 1)', detail: 'Board towards Whitefield. Travel 2 stations to Dr. B.R. Ambedkar Vidhana Soudha.', time: '6 mins', fare: '₹15' },
          { mode: 'walk', detail: 'Exit from Gate B (High Court / Palace Road exit). Walk towards Cunningham Road.', time: '2 mins', fare: '₹0' },
          { mode: 'rapido', detail: 'Book Rapido Bike (or take auto for ₹40) straight down Palace Road to Manikyavelu Mansion.', time: '5 mins', fare: '₹25' }
        ]
      },
      {
        from: 'MG Road / Church Street',
        to: 'CTR Malleshwaram (Benne Dosa)',
        totalTime: '24 mins',
        totalFare: '₹40',
        modeBadge: 'Purple -> Green Line Metro',
        steps: [
          { mode: 'metro', line: 'Purple Line', detail: 'Board at MG Road towards Challaghatta. Travel to Kempegowda Majestic Interchange.', time: '8 mins', fare: '₹18' },
          { mode: 'metro', line: 'Green Line (Interchange)', detail: 'Switch to Green Line Platform towards Madavara/Nagasandra. Get down at Sampige Road (Mantri Square).', time: '6 mins', fare: '₹12' },
          { mode: 'walk', detail: 'Exit Gate A. Stroll 500 meters or take shared auto (₹15) to Margosa Road 7th Cross.', time: '6 mins', fare: '₹10' }
        ]
      },
      {
        from: 'Indiranagar 100ft Road',
        to: 'VV Puram Food Street (Thindi Beedi)',
        totalTime: '28 mins',
        totalFare: '₹45',
        modeBadge: 'Metro Interchange + Walk',
        steps: [
          { mode: 'metro', line: 'Purple Line', detail: 'Board at Indiranagar Metro towards Challaghatta to Majestic.', time: '14 mins', fare: '₹25' },
          { mode: 'metro', line: 'Green Line', detail: 'Change to Green Line south towards Silk Institute. Get down at National College Station (Platform 2).', time: '8 mins', fare: '₹15' },
          { mode: 'walk', detail: 'Exit Gate A. Walk 350 meters straight along Sajjan Rao Circle to food street mouth.', time: '5 mins', fare: '₹0' }
        ]
      },
      {
        from: 'Koramangala 5th Block',
        to: 'Champaca Book Cafe (Vasanth Nagar)',
        totalTime: '22 mins',
        totalFare: '₹65',
        modeBadge: 'Rapido / Auto Direct',
        steps: [
          { mode: 'rapido', detail: 'Take Rapido Bike down Hosur Road past Richmond Circle into Edward Road.', time: '18 mins', fare: '₹65' },
          { mode: 'walk', detail: 'Walk into Edward Road gate under the avocado tree canopy.', time: '2 mins', fare: '₹0' }
        ]
      }
    ],
    kerala: [
      {
        from: 'Bangalore (KSR / Shanthinagar)',
        to: 'Munnar Tea Hills',
        totalTime: '9.5 hrs (Overnight)',
        totalFare: '₹850 - ₹1,200',
        modeBadge: 'Overnight KSRTC Airavat Sleeper',
        steps: [
          { mode: 'bus', line: 'KSRTC Airavat Club Class', detail: 'Departs Shanthinagar Bus Stand 08:30 PM. Arrives Munnar Town Stand 06:00 AM.', time: '9.5 hrs', fare: '₹850' },
          { mode: 'auto', detail: 'From Munnar Central Stand, take local auto/jeep to your homestay in Suryanelli or Old Munnar.', time: '15 mins', fare: '₹120' }
        ]
      },
      {
        from: 'Munnar Hill Station',
        to: 'Alleppey (Alappuzha) Backwaters',
        totalTime: '4.5 hrs',
        totalFare: '₹220',
        modeBadge: 'Ghat Bus + Local Train',
        steps: [
          { mode: 'bus', line: 'KSRTC Fast Passenger', detail: 'Catch morning 7:30 AM bus from Munnar stand down to Ernakulam KSRTC Stand.', time: '3.5 hrs', fare: '₹165' },
          { mode: 'train', line: 'Southern Railway Express', detail: 'Walk 10 mins to Ernakulam Jn (ERS). Take train to Alappuzha (ALLP).', time: '1 hr', fare: '₹45' },
          { mode: 'auto', detail: 'Take auto from Alleppey station to Finishing Point Jetty (boat embarkation).', time: '8 mins', fare: '₹70' }
        ]
      },
      {
        from: 'Alleppey (Alappuzha)',
        to: 'Varkala North Cliff',
        totalTime: '1 hr 45 mins',
        totalFare: '₹70',
        modeBadge: 'Coastal Express Train',
        steps: [
          { mode: 'train', line: 'Netravati / Venad Express', detail: 'Board scenic train running alongside Kerala lagoons to Varkala Sivagiri (VAK).', time: '1h 35m', fare: '₹60' },
          { mode: 'auto', detail: 'Take auto from Varkala station up to North Cliff Helipad.', time: '10 mins', fare: '₹100' }
        ]
      }
    ]
  };

  const routesForDest = PRESET_ROUTES[dest] || PRESET_ROUTES.bangalore;

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Train className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Multi-Modal Transit & Step-by-Step Logistics
            </h2>
            <p className="text-xs text-slate-500">
              How to travel efficiently: Metro lines, train connections, public buses, and smart auto/rapido hops
            </p>
          </div>
        </div>

        {/* Namma Metro & State Transit Cheat Sheet */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
            <div className="font-bold text-emerald-950 flex items-center gap-1.5 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
              <span>Green Line Metro (BLR)</span>
            </div>
            <p className="text-emerald-800 text-[11px] leading-relaxed">
              Connects North (Madavara, Yeshwantpur, Malleshwaram) to South (National College, Lalbagh, JP Nagar, Silk Institute).
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-purple-50/80 border border-purple-200">
            <div className="font-bold text-purple-950 flex items-center gap-1.5 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 inline-block" />
              <span>Purple Line Metro (BLR)</span>
            </div>
            <p className="text-purple-800 text-[11px] leading-relaxed">
              Connects East (Whitefield, Indiranagar, MG Road, Cubbon Park) to West (Majestic, Mysore Road, Kengeri).
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200">
            <div className="font-bold text-amber-950 flex items-center gap-1.5 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" />
              <span>Interstate Trains & Buses</span>
            </div>
            <p className="text-amber-800 text-[11px] leading-relaxed">
              KSRTC Airavat & Super Fast hill buses + IRCTC coastal express trains save up to 70% vs private cabs.
            </p>
          </div>
        </div>
      </div>

      {/* Pre-mapped Route Blueprints */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Navigation className="w-4 h-4 text-emerald-600" />
            <span>Curated Step-by-Step Route Blueprints</span>
          </h3>
          <span className="text-xs text-slate-500 font-medium">Real timings & ticket estimates</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {routesForDest.map((route, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all"
            >
              {/* Route Summary Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900">{route.from}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-bold text-sm text-emerald-700">{route.to}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {route.modeBadge}
                  </span>
                  <span className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-medium">
                    ⏱️ {route.totalTime}
                  </span>
                  <span className="text-xs text-slate-900 bg-slate-200 px-2 py-0.5 rounded font-bold">
                    💵 {route.totalFare}
                  </span>
                </div>
              </div>

              {/* Step Sequence */}
              <div className="mt-4 space-y-3">
                {route.steps.map((st, stepIdx) => (
                  <div key={stepIdx} className="flex items-start gap-3 text-xs">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px] border border-slate-200 mt-0.5">
                      {stepIdx + 1}
                    </div>
                    <div className="flex-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex items-center justify-between font-semibold text-slate-900 mb-0.5">
                        <span className="capitalize flex items-center gap-1.5">
                          {st.mode === 'metro' && <Train className="w-3.5 h-3.5 text-emerald-600" />}
                          {st.mode === 'bus' && <Bus className="w-3.5 h-3.5 text-amber-600" />}
                          {st.mode === 'rapido' && <Bike className="w-3.5 h-3.5 text-orange-600" />}
                          {st.mode === 'walk' && <Footprints className="w-3.5 h-3.5 text-emerald-600" />}
                          {st.mode === 'train' && <Train className="w-3.5 h-3.5 text-blue-600" />}
                          {st.mode === 'auto' && <Car className="w-3.5 h-3.5 text-amber-500" />}
                          <span>{st.line || st.mode.toUpperCase()}</span>
                        </span>
                        <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                          <span>{st.time}</span>
                          <span className="font-bold text-slate-800">{st.fare}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-[11.5px]">{st.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local Commuter Survival Hacks */}
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-5 border border-amber-200 text-xs">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-3">
          <ShieldCheck className="w-4 h-4 text-amber-700" />
          <span>Local Transit Survival Guide (Bangalore & South India)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-amber-950">
          <div className="p-3 bg-white/80 rounded-xl border border-amber-200/60">
            <strong className="block text-slate-900 mb-1">🚇 Namma Metro Smart Tip</strong>
            <span>Purchase QR tickets directly on WhatsApp (+91 81055 56677) to skip long ticket counter queues and receive 5% discount automatically.</span>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-amber-200/60">
            <strong className="block text-slate-900 mb-1">🛺 Auto Meter Etiquette</strong>
            <span>Insist on "Meter haaki" (put meter) in Bangalore. If drivers refuse during peak hours, use Uber Auto or Rapido Auto which have upfront fares without surge haggling.</span>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-amber-200/60">
            <strong className="block text-slate-900 mb-1">🚌 BMTC V-Series AC Airport Buses</strong>
            <span>Taking an Uber to Bangalore Airport costs ₹1,200 - ₹1,800. BMTC V-Series Volvo bus costs just ₹250-₹300 and has dedicated luggage bays and free AC.</span>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-amber-200/60">
            <strong className="block text-slate-900 mb-1">🚣 Backwater Secret Ferry</strong>
            <span>In Alleppey, don't pay ₹8,000 for a houseboat if on a budget! The SWTD public passenger boat runs between Alleppey and Kottayam through the identical backwaters for ₹25.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
