import React, { useState, useEffect, useId } from 'react';
import { 
  Search, MapPin, Sparkles, Navigation, Clock, Home, Utensils, 
  ArrowRight, X, Check, ChevronDown, Film, Ticket, ExternalLink, Star, Waves, Compass, Mountain
} from 'lucide-react';
import { searchAndAnalyzePlace, getPlaceSuggestions, isBangaloreLocation } from '../utils/placeAnalyzer';

export default function PlaceSearchSpotlight({ onSelectPlaceAndGenerate }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [analyzed, setAnalyzed] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('1-day');
  const [selectedCompanion, setSelectedCompanion] = useState('girlfriend');

  const searchId = useId();

  useEffect(() => {
    if (query.trim().length > 0) {
      setSuggestions(getPlaceSuggestions(query, 5));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const triggerLiveGeneration = (place, duration = selectedDuration, companion = selectedCompanion) => {
    if (!place) return;
    onSelectPlaceAndGenerate({
      destination: place.name,
      duration,
      companion,
      selectedVibes: ['quiet', 'cafe', 'museum'],
      budgetTier: 'smart',
      analyzedPlace: place
    });
  };

  const handleSearch = (placeQuery) => {
    if (!placeQuery || placeQuery.trim().length === 0) return;
    const result = searchAndAnalyzePlace(placeQuery.trim());
    if (result) {
      setAnalyzed(result);
      setIsExpanded(true);
      setSuggestions([]);
      // Determine default duration based on place type
      const defaultDur = isBangaloreLocation(result) ? '1-day' : '3-5-days';
      setSelectedDuration(defaultDur);
      // Immediately generate live itinerary for this searched place!
      triggerLiveGeneration(result, defaultDur, selectedCompanion);
    }
  };

  const handleSelectSuggestion = (place) => {
    setQuery(place.name);
    setAnalyzed(place);
    setIsExpanded(true);
    setSuggestions([]);
    const defaultDur = isBangaloreLocation(place) ? '1-day' : '3-5-days';
    setSelectedDuration(defaultDur);
    triggerLiveGeneration(place, defaultDur, selectedCompanion);
  };

  const handleDurationChange = (dur) => {
    setSelectedDuration(dur);
    if (analyzed) {
      triggerLiveGeneration(analyzed, dur, selectedCompanion);
    }
  };

  const handleCompanionChange = (comp) => {
    setSelectedCompanion(comp);
    if (analyzed) {
      triggerLiveGeneration(analyzed, selectedDuration, comp);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Smart Place & Getaway Explorer</span>
          </span>
          <h2 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
            Explore any destination, coastal beach, hill station or city locality
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Live analyzes authentic spots, local food, step-by-step transit & cheap stays (e.g. Varkala, Munnar, Gokarna, Coorg, Indiranagar)
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearch(query);
                }
              }}
              placeholder="Search any place... e.g. Varkala, Gokarna, Munnar, Coorg, Indiranagar..."
              className="w-full pl-9 pr-20 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-600 transition-all placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={() => handleSearch(query)}
              className="absolute right-1 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
            >
              Analyze
            </button>
          </div>

          {/* Autocomplete suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-30 overflow-hidden divide-y divide-slate-100 max-h-56 overflow-y-auto">
              {suggestions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectSuggestion(item)}
                  className="w-full px-3.5 py-2 text-left hover:bg-emerald-50/70 transition-colors flex items-center justify-between gap-2 cursor-pointer group"
                >
                  <div>
                    <span className="font-semibold text-xs text-slate-900 group-hover:text-emerald-800">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-slate-400 ml-2">
                      ({item.category.split(' ')[0]})
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 line-clamp-1 max-w-[150px]">
                    {item.tagline}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Popular Fast Tags */}
      <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
        <span className="text-[10.5px] text-slate-400 font-semibold shrink-0">Popular explore:</span>
        {[
          { label: '🌊 Varkala (Cliffs & Surf)', query: 'Varkala' },
          { label: '🌴 Kerala Circuit', query: 'Kerala' },
          { label: '🏖️ Gokarna (Beach Trek)', query: 'Gokarna' },
          { label: '🌲 Coorg (Coffee & Mist)', query: 'Coorg' },
          { label: '🥖 Pondicherry', query: 'Pondicherry' },
          { label: '⛰️ Ooty (Nilgiris)', query: 'Ooty' },
          { label: '🛕 Hampi', query: 'Hampi' },
          { label: '☕ Indiranagar', query: 'Indiranagar' },
          { label: '🏛️ Malleshwaram', query: 'Malleshwaram' },
          { label: '🛍️ Mahalakshmi (ISKCON & Orion)', query: 'Mahalakshmi Layout' }
        ].map((pill) => (
          <button
            key={pill.label}
            type="button"
            onClick={() => {
              setQuery(pill.query);
              handleSearch(pill.query);
            }}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer border ${
              analyzed?.name?.toLowerCase().includes(pill.query.toLowerCase())
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold'
                : 'bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 text-slate-600 border-slate-200'
            }`}
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* Expanded Analysis Drawer */}
      {isExpanded && analyzed && (
        <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-slate-50 border-2 border-emerald-500/40 shadow-sm space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-emerald-200/80">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-lg text-slate-900">{analyzed.name}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-semibold">
                  {analyzed.category}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  • {analyzed.region}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" />
                  Active in Live Itinerary
                </span>
              </div>
              <p className="text-xs text-emerald-900 font-semibold mt-1">
                {analyzed.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                ⏱️ {analyzed.recommendedStayTime}
              </span>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
                aria-label="Dismiss analysis"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* DURATION & COMPANION QUICK-TUNERS (LIVE UPDATING) */}
          <div className="p-3 bg-white/90 rounded-xl border border-emerald-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Trip Duration:</span>
              <div className="flex items-center gap-1.5">
                {[
                  { id: '1-day', label: '1 Day Outing' },
                  { id: '3-5-days', label: '3 - 5 Days' },
                  { id: '7-10-days', label: '7 - 10 Days' }
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => handleDurationChange(d.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                      selectedDuration === d.id
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Companion:</span>
              <div className="flex items-center gap-1.5">
                {[
                  { id: 'girlfriend', label: '💑 Date' },
                  { id: 'guy_squad', label: '👬 Squad' },
                  { id: 'solo', label: '🧭 Solo' }
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleCompanionChange(c.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                      selectedCompanion === c.id
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Vibe Analysis */}
          <p className="text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Analysis & Vibe: </strong>
            {analyzed.vibe}
          </p>

          {/* Places to Visit Inside & Nearby */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-950 block mb-2">
              📍 Suggested Places to Visit Inside & Nearby:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {analyzed.nearbyPlacesInside.map((sub, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-emerald-200/80 shadow-2xs text-xs space-y-1">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span className="line-clamp-1">{sub.name}</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold shrink-0">
                      {sub.duration}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 block">{sub.type}</span>
                  <p className="text-[11.5px] text-slate-600 line-clamp-2 leading-snug">
                    {sub.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SPECIAL MALL, PVR IMAX & BOOKMYSHOW INTEGRATION (ONLY SHOWN FOR BANGALORE URBAN MALLS) */}
          {analyzed.mallAndCinema && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50/90 via-purple-50/80 to-slate-50 border border-indigo-200 shadow-2xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-indigo-200/60">
                <div>
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-indigo-600" />
                    <span className="font-extrabold text-slate-900 text-sm">
                      {analyzed.mallAndCinema.mallName} • {analyzed.mallAndCinema.theatreName}
                    </span>
                  </div>
                  <p className="text-[11.5px] text-slate-600 mt-0.5">
                    🚶 <strong>Route from nearby spot:</strong> {analyzed.mallAndCinema.walkingRoute}
                  </p>
                </div>

                <a
                  href={analyzed.mallAndCinema.bookMyShowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-xs transition-all active:scale-95 shrink-0"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Book on BookMyShow</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Live trending movies */}
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-indigo-950 block mb-1.5">
                  🎬 Movies Playing Right Now at this Theatre:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {analyzed.mallAndCinema.trendingMovies.map((mv, idx) => (
                    <div key={idx} className="p-2 bg-white rounded-lg border border-indigo-200/60 text-xs">
                      <span className="font-bold text-slate-900 block line-clamp-1">{mv.title}</span>
                      <span className="text-[10px] text-slate-500 block">{mv.lang || mv.language}</span>
                      <div className="flex items-center justify-between text-[10px] pt-1 mt-1 border-t border-slate-100">
                        <span className="text-indigo-700 font-semibold">{mv.format}</span>
                        <span className="text-amber-600 font-bold">★ {mv.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Transit, Stays & Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs">
            {/* Transit */}
            <div className="p-3 bg-white rounded-xl border border-emerald-200/80 space-y-1">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                How to Reach / Transit:
              </span>
              <p className="text-[11.5px] text-slate-600 leading-snug">
                {analyzed.metroConnectivity || analyzed.transitFromCityCenter}
              </p>
            </div>

            {/* Stays */}
            <div className="p-3 bg-white rounded-xl border border-emerald-200/80 space-y-1">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                <Home className="w-3.5 h-3.5 text-emerald-600" />
                Where to Stay Cheap:
              </span>
              <div className="space-y-0.5">
                {analyzed.budgetStays ? analyzed.budgetStays.map((st, sIdx) => (
                  <div key={sIdx} className="text-[11.5px] text-slate-700 flex justify-between">
                    <span>{st.name}</span>
                    <span className="font-bold text-emerald-700">{st.price}</span>
                  </div>
                )) : <span className="text-slate-500">Verified homestays and hostels nearby.</span>}
              </div>
            </div>

            {/* Famous Food */}
            <div className="p-3 bg-white rounded-xl border border-emerald-200/80 space-y-1">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                <Utensils className="w-3.5 h-3.5 text-emerald-600" />
                Must-Try Local Food:
              </span>
              <div className="space-y-0.5">
                {analyzed.famousFood ? analyzed.famousFood.map((food, fIdx) => (
                  <div key={fIdx} className="text-[11.5px] text-slate-700">
                    🍴 {food}
                  </div>
                )) : <span className="text-slate-500">Local signature specialties.</span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
