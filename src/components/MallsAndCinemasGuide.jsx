import React, { useState } from 'react';
import { 
  Film, Sparkles, MapPin, Navigation, ExternalLink, 
  Ticket, Star, Compass, Train, ArrowRight, ShieldCheck, Clock
} from 'lucide-react';
import { CITY_MALLS_DATA } from '../data/mallsAndCinemas';

export default function MallsAndCinemasGuide({ onSelectComboItinerary }) {
  const [selectedFormat, setSelectedFormat] = useState('ALL');
  const [searchFilter, setSearchFilter] = useState('');

  const formats = ['ALL', 'IMAX', '4DX', 'P[XL]', 'Gold Class'];

  const filteredMalls = CITY_MALLS_DATA.filter(mall => {
    const matchesSearch = mall.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          mall.locality.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          mall.nearbyComboSpots.some(s => s.name.toLowerCase().includes(searchFilter.toLowerCase()));
    
    if (selectedFormat === 'ALL') return matchesSearch;
    return matchesSearch && mall.theatre.formats.some(f => f.toLowerCase().includes(selectedFormat.toLowerCase()));
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Film className="w-3.5 h-3.5" />
              <span>City Malls, IMAX Multiplexes & Cultural Clusters</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-200">
              Direct BookMyShow Booking
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            City Malls, Movies & Nearby Cultural Discovery
          </h1>
          <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
            Planning to visit a mall or locality like <strong className="text-white">Mahalakshmi Layout</strong> or <strong className="text-white">MG Road</strong>? Discover how to combine spiritual spots (like <strong className="text-emerald-300">ISKCON Temple</strong>) with lakeside dining at <strong className="text-emerald-300">Orion Mall</strong>, check movies playing right now in PVR IMAX, and book tickets instantly on BookMyShow.
          </p>

          {/* Quick Filters */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-slate-400 font-medium shrink-0">Filter Screens:</span>
              {formats.map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => setSelectedFormat(fmt)}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    selectedFormat === fmt
                      ? 'bg-indigo-500 text-white shadow-xs'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>

            <div className="w-full sm:w-64">
              <input
                type="search"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter by mall, locality (e.g. Mahalakshmi)..."
                className="w-full px-3 py-1.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Malls List */}
      <div className="space-y-6">
        {filteredMalls.map((mall) => (
          <div 
            key={mall.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-indigo-300 transition-all space-y-5"
          >
            {/* Mall Overview Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-extrabold text-xl text-slate-900">{mall.name}</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200">
                    {mall.zone}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-semibold text-slate-700">{mall.locality}</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {mall.description}
                </p>
              </div>

              {/* Transit Pill */}
              <div className="shrink-0 sm:max-w-xs p-2.5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs text-emerald-950">
                <span className="font-bold flex items-center gap-1.5 mb-1 text-[11px] text-emerald-800">
                  <Train className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Metro & Travel Route:</span>
                </span>
                <p className="text-[11px] text-emerald-900 leading-snug">
                  {mall.metroConnectivity}
                </p>
              </div>
            </div>

            {/* CINEMA & BOOKMYSHOW INTEGRATION */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-slate-50 border border-indigo-200/80 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-indigo-600" />
                    <h4 className="font-bold text-base text-slate-900">{mall.theatre.name}</h4>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">
                      {mall.theatre.screensCount} Screens
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {mall.theatre.formats.map((fmt, fIdx) => (
                      <span key={fIdx} className="text-[10.5px] px-2 py-0.5 rounded-md bg-white border border-indigo-200 text-indigo-900 font-semibold">
                        🎬 {fmt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DIRECT BOOKMYSHOW BUTTON */}
                <a
                  href={mall.theatre.bookMyShowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 shrink-0"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Book on BookMyShow</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Movies Playing Right Now */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-950 block mb-2">
                  🔥 Now Showing / Trending at this Cinema:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                  {mall.theatre.trendingMovies.map((movie, mIdx) => (
                    <div key={mIdx} className="p-3 bg-white rounded-xl border border-indigo-200/60 shadow-2xs text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 line-clamp-1">{movie.title}</span>
                        <span className="text-[10px] text-amber-600 font-bold flex items-center gap-0.5">
                          <Star className="w-2.5 h-2.5 fill-amber-400" />
                          {movie.rating}
                        </span>
                      </div>
                      <span className="text-[10.5px] text-slate-500 block">{movie.language}</span>
                      <div className="flex items-center justify-between text-[10px] pt-1 border-t border-slate-100">
                        <span className="text-indigo-700 font-semibold">{movie.format}</span>
                        <span className="text-slate-400">{movie.genre.split('/')[0]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NEARBY COMBO PLACES TO COVER (THE CLUSTER EXPERIENCE!) */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 mb-2.5">
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>Places to Combine & Explore Nearby in this Locality:</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {mall.nearbyComboSpots.map((combo, cIdx) => (
                  <div key={cIdx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>{combo.name}</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                        {combo.distance}
                      </span>
                    </div>

                    <p className="text-slate-600 text-[11.5px] leading-relaxed">
                      💡 <strong className="text-slate-800">Why combine:</strong> {combo.whyCombine}
                    </p>

                    <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 space-y-0.5">
                      <div><strong>🚶 Route:</strong> {combo.routeDirections}</div>
                      <div><strong>⏱️ Pacing:</strong> {combo.suggestedDuration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dining at Mall & Parking Tip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-1.5 text-slate-700 flex-wrap">
                <span className="font-bold text-slate-900">🍴 Popular Dining:</span>
                {mall.diningAtMall.map((d, dIdx) => (
                  <span key={dIdx} className="bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                    {d}
                  </span>
                ))}
              </div>

              <div className="text-[11px] text-slate-500 italic">
                🚗 {mall.parkingTips}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
