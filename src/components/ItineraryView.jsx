import React, { useState } from 'react';
import { 
  Clock, MapPin, Navigation, IndianRupee, Star, AlertCircle, 
  ExternalLink, CheckCircle, Sparkles, Train, Bus, Car, Bike, Footprints, 
  Compass, Shield, Bookmark, ChevronRight, Info, Film, Ticket
} from 'lucide-react';
import { COMPANION_TYPES, VIBE_FILTERS } from '../data/tripsData';

export default function ItineraryView({ 
  itinerary, 
  onSelectPlace, 
  onSwitchToExecution,
  onOpenCustomizer 
}) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  if (!itinerary || !itinerary.days || itinerary.days.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200">
        <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3 animate-spin" />
        <h3 className="text-lg font-bold text-slate-800">No Itinerary Loaded</h3>
        <p className="text-sm text-slate-500 mt-1">Click the button below to generate a tailored trip.</p>
        <button
          type="button"
          onClick={onOpenCustomizer}
          className="mt-4 px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg shadow cursor-pointer hover:bg-emerald-700"
        >
          Customize Trip Now
        </button>
      </div>
    );
  }

  const currentDay = itinerary.days[activeDayIndex] || itinerary.days[0];
  const companionInfo = COMPANION_TYPES.find(c => c.id === itinerary.companion) || COMPANION_TYPES[0];

  const getTransitIcon = (type) => {
    switch (type) {
      case 'metro': return <Train className="w-4 h-4 text-emerald-600" />;
      case 'train': return <Train className="w-4 h-4 text-blue-600" />;
      case 'bus': return <Bus className="w-4 h-4 text-amber-600" />;
      case 'cab': return <Car className="w-4 h-4 text-indigo-600" />;
      case 'auto': return <Car className="w-4 h-4 text-amber-500" />;
      case 'rapido': return <Bike className="w-4 h-4 text-orange-600" />;
      case 'walk': return <Footprints className="w-4 h-4 text-emerald-600" />;
      default: return <Navigation className="w-4 h-4 text-teal-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Trip Master Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <span>{companionInfo.emoji}</span>
              <span>{companionInfo.label}</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-200">
              {itinerary.duration === '1-day' ? '1 Day Paced Trail' : itinerary.duration === '3-5-days' ? '3 - 5 Days Getaway' : '7 - 10 Days Grand Circuit'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              💰 Budget: {itinerary.budgetTotal}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            {itinerary.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {itinerary.tagline}
          </p>

          {/* Quick Route Intelligence bar */}
          <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-slate-400 font-medium">Recommended Transit</span>
                <span className="font-semibold text-slate-100">{itinerary.recommendedTransit}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-lg bg-teal-500/20 text-teal-300">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-slate-400 font-medium">Vibe & Safety Calibration</span>
                <span className="font-semibold text-slate-100">{companionInfo.vibeTag}</span>
              </div>
            </div>

            <div className="flex items-center md:justify-end">
              <button
                type="button"
                onClick={onSwitchToExecution}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <span>Launch Live Day Navigator</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Day Navigation Tabs (Accessible as per Modern Web Guidance) */}
      {itinerary.days.length > 1 && (
        <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
          <div 
            className="flex items-center space-x-2 overflow-x-auto no-scrollbar"
            role="tablist"
            aria-label="Trip Days"
          >
            {itinerary.days.map((day, idx) => {
              const isSelected = idx === activeDayIndex;
              return (
                <button
                  key={day.dayNumber}
                  type="button"
                  role="tab"
                  id={`day-tab-${day.dayNumber}`}
                  aria-selected={isSelected}
                  onClick={() => setActiveDayIndex(idx)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <span>Day {day.dayNumber}</span>
                  <span className={`text-[11px] font-normal ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                    ({day.stops.filter(s => !s.transitNext).length} spots)
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Day Header Info */}
      <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-xl border border-slate-200">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Day {currentDay.dayNumber} of {itinerary.days.length}
          </span>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            {currentDay.title}
          </h2>
        </div>
        {currentDay.theme && (
          <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-medium rounded-full hidden sm:inline-block">
            {currentDay.theme}
          </span>
        )}
      </div>

      {/* Timeline Stops & Transit Steps */}
      <div className="space-y-4">
        {currentDay.stops.map((stop, idx) => {
          // If this stop is an inter-place transit connector
          if (stop.transitNext) {
            const transit = stop.transitNext;
            return (
              <div 
                key={`transit-${idx}`} 
                className="my-3 mx-2 sm:mx-6 p-3.5 bg-gradient-to-r from-emerald-50/80 via-teal-50/60 to-cyan-50/80 rounded-xl border border-emerald-200/80 shadow-xs flex items-start gap-3.5 transition-all hover:border-emerald-300"
              >
                <div className="p-2 rounded-lg bg-white shadow-xs border border-emerald-200 text-emerald-700 mt-0.5">
                  {getTransitIcon(transit.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                    <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                      <span>{transit.mode}</span>
                      <span className="text-emerald-600 font-normal">({transit.route})</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                        ⏱️ {transit.time}
                      </span>
                      <span className="font-semibold text-emerald-900 bg-white px-2 py-0.5 rounded border border-emerald-200">
                        💵 {transit.fare}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    👉 <strong className="text-slate-900">Step:</strong> {transit.directions}
                  </p>
                </div>
              </div>
            );
          }

          // Otherwise it's a destination stop
          return (
            <div 
              key={`stop-${idx}`}
              className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all shadow-xs hover:shadow-md overflow-hidden"
            >
              <div className="p-5 sm:p-6">
                {/* 1-Day Chronological Phase Tag (Morning, Mall & Movie, Cafe, Street, Dinner) */}
                {stop.phase && (
                  <div className="mb-2.5">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 inline-flex items-center gap-1 shadow-2xs">
                      {stop.phase}
                    </span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        {stop.time}
                      </span>
                      {stop.zone && (
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {stop.zone}
                        </span>
                      )}
                      <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        ⌛ Stay: {stop.stayDuration || '1.5 - 2 hrs'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 pt-1">
                      {stop.name}
                    </h3>
                  </div>

                  {/* Estimated Cost Pill */}
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-semibold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg inline-block">
                      Est. {stop.cost || 'Free / ₹100'}
                    </span>
                  </div>
                </div>

                {/* Activity Description */}
                <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                  {stop.activity}
                </p>

                {/* CINEMA & BOOKMYSHOW CARD IF PRESENT */}
                {stop.cinemaInfo && (
                  <div className="mt-3.5 p-3.5 rounded-xl bg-gradient-to-r from-indigo-50/90 via-purple-50/80 to-slate-50 border border-indigo-200 text-xs space-y-2.5 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-indigo-200/60">
                      <div className="flex items-center gap-2">
                        <Film className="w-4 h-4 text-indigo-600" />
                        <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
                          {stop.cinemaInfo.theatreName}
                        </span>
                      </div>
                      <a
                        href={stop.cinemaInfo.bookMyShowUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-xs transition-all active:scale-95 shrink-0"
                      >
                        <Ticket className="w-3.5 h-3.5" />
                        <span>Book on BookMyShow</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {stop.cinemaInfo.trendingMovies && (
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-950 block mb-1">
                          🎬 Movies Playing Right Now:
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {stop.cinemaInfo.trendingMovies.map((mv, mIdx) => (
                            <div key={mIdx} className="p-2 bg-white rounded-lg border border-indigo-200/60 text-[11px]">
                              <span className="font-bold text-slate-900 block line-clamp-1">{mv.title}</span>
                              <div className="flex items-center justify-between text-[10px] text-slate-500 mt-0.5">
                                <span className="text-indigo-700 font-semibold">{mv.format}</span>
                                <span className="text-amber-600 font-bold">★ {mv.rating}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Why Special for this group */}
                {stop.whySpecial && (
                  <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Why it fits {companionInfo.label}: </span>
                      <span>{stop.whySpecial}</span>
                    </div>
                  </div>
                )}

                {/* Review Snippet */}
                {stop.reviewSnippet && (
                  <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-600 italic">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                    <span>{stop.reviewSnippet}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectPlace(stop)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Review Intel & Stays</span>
                    </button>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${stop.name} ${stop.zone || ''} ${itinerary.destination}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-emerald-700 font-medium transition-colors"
                  >
                    <span>Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
