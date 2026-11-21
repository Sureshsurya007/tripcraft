import React, { useState } from 'react';
import { Utensils, Star, IndianRupee, MapPin, ThumbsUp, AlertTriangle, Sparkles, Clock, Check } from 'lucide-react';
import { DESTINATIONS } from '../data/tripsData';

export default function FoodCrawlGuide({ itinerary }) {
  const [selectedDest, setSelectedDest] = useState(itinerary?.destination || 'bangalore');

  const FOOD_DATABASE = {
    bangalore: [
      {
        name: 'CTR (Central Tiffin Room / Shri Sagar)',
        zone: 'Margosa Road, 7th Cross, Malleshwaram',
        type: 'Heritage Vegetarian Tiffin',
        rating: 4.8,
        reviewsCount: 24800,
        signatureDishes: ['Benne Masala Dosa (Crispy Butter Dosa)', 'Mangalore Bajji', 'Filter Kaapi'],
        avgCost: '₹90 - ₹140 per person',
        bestTime: '07:30 AM - 10:00 AM (Morning) or 04:30 PM - 06:30 PM (Snacks)',
        reviewSynthesis: {
          highlight: 'Widely praised as having the crispest, golden-brown crust dosa in India with fluffy cloud center.',
          pros: [
            'Drenched in fragrant white butter without being greasy',
            'Fresh coconut chutney and potato masala balance is legendary',
            'Authentic heritage diner feel running since the 1920s'
          ],
          cons: [
            'Waiting time on weekends can exceed 40 minutes (give your name at entrance immediately)',
            'Strictly quick-service dining; not meant for lingering for 2 hours'
          ],
          insiderTip: 'Ask the waiter for "Extra Crispy Benne Dosa with side of Mangalore Bajji".'
        }
      },
      {
        name: 'Champaca Rooftop Cafe',
        zone: 'Edward Road, Vasanth Nagar',
        type: 'Artisan Book & Garden Cafe',
        rating: 4.7,
        reviewsCount: 2150,
        signatureDishes: ['Pour-Over Specialty Coffee', 'Avocado Toast with Feta', 'Carrot Walnut Cake'],
        avgCost: '₹300 - ₹500 per person',
        bestTime: '03:00 PM - 06:00 PM (Golden afternoon)',
        reviewSynthesis: {
          highlight: 'Dreamy, quiet rooftop sanctuary hidden beneath avocado branches. Perfect for couples and reading.',
          pros: [
            'Total acoustic calm; completely sheltered from traffic honking',
            'Locally sourced coffee beans brewed to perfection',
            'Can read independent novels while sipping your drink'
          ],
          cons: [
            'Limited tables (fills up by 4:30 PM on Saturday)',
            'Small kitchen, so gourmet bakes take 15 mins to prepare'
          ],
          insiderTip: 'Grab the table right by the corner window looking into the green leaf canopy.'
        }
      },
      {
        name: 'VV Puram Food Street (Thindi Beedi)',
        zone: 'Old Sajjan Rao Circle, Basavanagudi',
        type: 'Midnight Vegetarian Street Food Carnival',
        rating: 4.6,
        reviewsCount: 31000,
        signatureDishes: ['Hot Paddus with Red Chutney', 'Congress Bun Butter', 'Melting Ghee Dabeli', 'Hot Badam Milk'],
        avgCost: '₹120 - ₹200 for full crawl (4-5 stalls)',
        bestTime: '07:30 PM - 10:30 PM (Vibrant night energy)',
        reviewSynthesis: {
          highlight: 'Bangalore’s most famous night street food strip. Pure vegetarian street food heaven.',
          pros: [
            'Incredible sensory experience with sizzling griddles and street vendors',
            'Very pocket-friendly; you can try 5 different dishes under ₹200',
            'Safe, family-friendly and buzzing with energy till 11 PM'
          ],
          cons: [
            'Very crowded on Sunday nights (keep personal belongings secure)',
            'Zero chair seating; you eat standing on the street like true foodies'
          ],
          insiderTip: 'Start at VB Bakery for Congress Bun Butter, then move down the street for steaming hot paddus.'
        }
      },
      {
        name: 'Nagarjuna (Residency Road & Indiranagar)',
        zone: 'Residency Road / Indiranagar',
        type: 'Fiery Andhra Cuisine Stawart',
        rating: 4.6,
        reviewsCount: 19500,
        signatureDishes: ['Signature Andhra Chilli Chicken', 'Mutton Biryani', 'Gunpowder Ghee Rice with Pappu'],
        avgCost: '₹350 - ₹500 per person',
        bestTime: '01:00 PM - 03:00 PM (Lunch)',
        reviewSynthesis: {
          highlight: 'The ultimate hearty feast for guy gangs and spice lovers. Green chilli chicken is legendary.',
          pros: [
            'Explosive traditional Andhra flavors with unlimited banana leaf meals',
            'Tender marinated meat cooked with fresh crushed green chillies',
            'Fast service even when full'
          ],
          cons: [
            'High spice level (not suitable for very sensitive palates)',
            'Long lines around 1:30 PM'
          ],
          insiderTip: 'Order the banana leaf meal and request extra Andhra gunpowder (podi) with steaming ghee.'
        }
      }
    ],
    kerala: [
      {
        name: 'Rapsy Restaurant (Munnar)',
        zone: 'Main Bazaar, Munnar Town',
        type: 'Hillside Kerala Diner',
        rating: 4.5,
        reviewsCount: 8200,
        signatureDishes: ['Kerala Malabar Parotta with Beef Fry / Chicken Roast', 'Spanish Omelette', 'Hot Ginger Tea'],
        avgCost: '₹140 - ₹220 per person',
        bestTime: '07:00 PM - 09:30 PM (Cold misty evening)',
        reviewSynthesis: {
          highlight: 'The quintessential budget mountain diner of Munnar. Flaky parottas paired with spiced meat gravies.',
          pros: ['Very reasonable prices in a tourist town', 'Warm and comforting food during cold misty weather', 'Generous portions'],
          cons: ['Simple no-frills plastic table setup', 'Crowded during holiday seasons'],
          insiderTip: 'Dip the flaky parotta into the spiced roast gravy while steaming hot.'
        }
      },
      {
        name: 'Darjeeling Cafe (Varkala)',
        zone: 'Middle of North Cliff, Varkala',
        type: 'Bohemian Sunset Cliff Cafe',
        rating: 4.7,
        reviewsCount: 6400,
        signatureDishes: ['Wood-fired Margherita Pizza', 'Fresh Mango Banana Smoothie Bowl', 'Iced Ginger Lemon Honey'],
        avgCost: '₹280 - ₹450 per person',
        bestTime: '05:00 PM - 07:30 PM (Sunset into twilight)',
        reviewSynthesis: {
          highlight: 'Bohemian floor cushions, chill ambient tunes, and front-row seats to the sun sinking into the Arabian Sea.',
          pros: ['Spectacular unobstructed ocean and cliff sunset view', 'Excellent thin crust wood-fired pizzas', 'Great vibe for couples and solo travelers'],
          cons: ['Service can be relaxed/slow during sunset rush (order all at once)'],
          insiderTip: 'Arrive by 4:45 PM to grab the front floor cushion table overlooking the cliff edge.'
        }
      }
    ]
  };

  const foodSpots = FOOD_DATABASE[selectedDest] || FOOD_DATABASE.bangalore;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Utensils className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Local Food Intel & Authentic Review Synthesis
              </h2>
              <p className="text-xs text-slate-500">
                Where real locals eat: signature dishes, genuine review sentiment, wait times & budget per meal
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
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 gap-5">
        {foodSpots.map((spot, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-300 transition-all space-y-4"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-100">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-lg text-slate-900">{spot.name}</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                    {spot.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{spot.zone}</span>
                </div>
              </div>

              {/* Rating & Cost */}
              <div className="flex items-center sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-bold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{spot.rating}</span>
                  <span className="text-[10px] text-slate-400 font-normal">({spot.reviewsCount.toLocaleString()} reviews)</span>
                </div>
                <div className="text-emerald-700 font-bold">
                  {spot.avgCost}
                </div>
              </div>
            </div>

            {/* Signature Dishes */}
            <div>
              <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">
                Must-Try Signature Dishes:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {spot.signatureDishes.map((dish, dIdx) => (
                  <span 
                    key={dIdx}
                    className="text-xs px-2.5 py-1 bg-emerald-50 text-emerald-800 font-medium rounded-lg border border-emerald-200/60"
                  >
                    🍴 {dish}
                  </span>
                ))}
              </div>
            </div>

            {/* Review Sentiment Highlight */}
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <strong className="text-slate-900">Review Consensus: </strong>
              {spot.reviewSynthesis.highlight}
            </p>

            {/* Pros & Heads up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1.5">
                <span className="font-bold text-slate-900 flex items-center gap-1 text-[11px]">
                  <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                  Why Customers Rave:
                </span>
                {spot.reviewSynthesis.pros.map((p, pIdx) => (
                  <div key={pIdx} className="text-slate-600 text-[11.5px] flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1.5">
                <span className="font-bold text-slate-900 flex items-center gap-1 text-[11px]">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  Crucial Heads-Up:
                </span>
                {spot.reviewSynthesis.cons.map((c, cIdx) => (
                  <div key={cIdx} className="text-slate-600 text-[11.5px] flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tip & Best Timing */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span><strong className="text-slate-800">Best Timing:</strong> {spot.bestTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-800 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{spot.reviewSynthesis.insiderTip}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
