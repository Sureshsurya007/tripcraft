import React, { useState, useEffect, useId } from 'react';
import { 
  X, Sparkles, MapPin, Calendar, Users, Sliders, Check, 
  Search, ArrowRight, Clock, Navigation, Utensils, Home, Info, AlertCircle, ChevronRight, Film, Ticket, ExternalLink
} from 'lucide-react';
import { DESTINATIONS, COMPANION_TYPES, VIBE_FILTERS, BUDGET_TIERS } from '../data/tripsData';
import { searchAndAnalyzePlace, getPlaceSuggestions } from '../utils/placeAnalyzer';

export default function TripBuilderModal({ isOpen, onClose, onGenerate, initialQuery = '' }) {
  const [destination, setDestination] = useState('bangalore');
  const [duration, setDuration] = useState('1-day');
  const [companion, setCompanion] = useState('girlfriend');
  const [selectedVibes, setSelectedVibes] = useState(['quiet', 'cafe', 'library']);
  const [budgetTier, setBudgetTier] = useState('smart');

  // Search & Analysis States
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [analyzedPlace, setAnalyzedPlace] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchInputId = useId();

  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
      handlePerformAnalysis(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setSuggestions(getPlaceSuggestions(searchQuery, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  const handlePerformAnalysis = (query) => {
    if (!query || query.trim().length === 0) return;
    setIsSearching(true);
    const result = searchAndAnalyzePlace(query.trim());
    setAnalyzedPlace(result);
    setDestination(result.id);
    setIsSearching(false);
  };

  const handleSelectSuggestion = (place) => {
    setSearchQuery(place.name);
    setAnalyzedPlace(place);
    setDestination(place.id);
    setSuggestions([]);
  };

  const toggleVibe = (id) => {
    if (selectedVibes.includes(id)) {
      if (selectedVibes.length > 1) {
        setSelectedVibes(selectedVibes.filter(v => v !== id));
      }
    } else {
      setSelectedVibes([...selectedVibes, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({
      destination: analyzedPlace ? analyzedPlace.name : destination,
      duration,
      companion,
      selectedVibes,
      budgetTier,
      analyzedPlace
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 id="modal-title" className="text-lg font-bold text-slate-900">
                Custom Trip & Outing Generator
              </h2>
              <p className="text-xs text-slate-500">
                Tailored for who you're with, your vibe filters & realistic multi-modal transit
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* STEP 1: Search & Explore Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor={searchInputId} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Where do you want to explore?</span>
              </label>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Search ANY locality, town, or getaway
              </span>
            </div>

            {/* Smart Search Bar */}
            <div className="relative">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  id={searchInputId}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handlePerformAnalysis(searchQuery);
                    }
                  }}
                  placeholder="Search locality or place... e.g. Indiranagar, Nandi Hills, Ooty, Coorg, Hampi, Gokarna..."
                  className="w-full pl-10 pr-24 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-600 transition-all placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => handlePerformAnalysis(searchQuery)}
                  className="absolute right-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  Analyze
                </button>
              </div>

              {/* Autocomplete Suggestions Dropdown */}
              {suggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-30 overflow-hidden divide-y divide-slate-100 max-h-60 overflow-y-auto">
                  {suggestions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectSuggestion(item)}
                      className="w-full px-4 py-2.5 text-left hover:bg-emerald-50/70 transition-colors flex items-center justify-between gap-2 cursor-pointer group"
                    >
                      <div>
                        <div className="font-semibold text-xs text-slate-900 group-hover:text-emerald-800">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {item.tagline}
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium shrink-0">
                        {item.category.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* QUICK POPULAR PILLS */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 text-xs">
              <span className="text-[11px] text-slate-400 font-medium shrink-0">Quick explore:</span>
              {['Varkala', 'Kerala', 'Gokarna', 'Coorg', 'Indiranagar', 'Ooty', 'Pondicherry', 'Hampi', 'Malleshwaram', 'Mahalakshmi Layout'].map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => {
                    setSearchQuery(pill);
                    handlePerformAnalysis(pill);
                  }}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer border ${
                    searchQuery.toLowerCase() === pill.toLowerCase()
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 border-slate-200'
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* INSTANT PLACE ANALYSIS CARD */}
            {analyzedPlace && (
              <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-cyan-50/80 border-2 border-emerald-500/50 shadow-sm space-y-3.5 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-2.5 border-b border-emerald-200/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-base text-slate-900">{analyzedPlace.name}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-600 text-white font-semibold">
                        {analyzedPlace.category}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-900 mt-1 font-medium leading-relaxed">
                      {analyzedPlace.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                      ⏱️ {analyzedPlace.recommendedStayTime}
                    </span>
                  </div>
                </div>

                {/* Vibe Summary */}
                <p className="text-xs text-slate-700 leading-relaxed">
                  💡 <strong className="text-slate-900">Vibe & Atmosphere:</strong> {analyzedPlace.vibe}
                </p>

                {/* Places to Visit Inside / Nearby */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-950 block mb-1.5">
                    📍 Recommended Places to Visit Inside & Nearby:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {analyzedPlace.nearbyPlacesInside.map((sub, sIdx) => (
                      <div key={sIdx} className="p-2.5 bg-white/95 rounded-xl border border-emerald-200/80 text-xs shadow-2xs">
                        <div className="flex items-center justify-between font-bold text-slate-900 mb-0.5">
                          <span className="line-clamp-1">{sub.name}</span>
                          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold shrink-0">
                            {sub.duration}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 block">{sub.type}</span>
                        <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-snug">
                          {sub.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SPECIAL MALL & BOOKMYSHOW CARD */}
                {analyzedPlace.mallAndCinema && (
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-50/90 via-purple-50/80 to-slate-50 border border-indigo-200 shadow-2xs space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-indigo-200/60">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <Film className="w-4 h-4 text-indigo-600" />
                          <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
                            {analyzedPlace.mallAndCinema.mallName} • {analyzedPlace.mallAndCinema.theatreName}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          🚶 <strong>Route:</strong> {analyzedPlace.mallAndCinema.walkingRoute}
                        </p>
                      </div>

                      <a
                        href={analyzedPlace.mallAndCinema.bookMyShowUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-xs transition-all active:scale-95 shrink-0"
                      >
                        <Ticket className="w-3.5 h-3.5" />
                        <span>Book on BookMyShow</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-950 block mb-1">
                        🎬 Now Showing at this Cinema:
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                        {analyzedPlace.mallAndCinema.trendingMovies.map((mv, idx) => (
                          <div key={idx} className="p-2 bg-white rounded-lg border border-indigo-200/60 text-[11px]">
                            <span className="font-bold text-slate-900 block line-clamp-1">{mv.title}</span>
                            <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1">
                              <span className="text-indigo-700 font-semibold">{mv.format}</span>
                              <span className="text-amber-600 font-bold">★ {mv.rating}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Transit & Stay Info Quick-Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 bg-white/90 rounded-xl border border-emerald-200/80 flex items-start gap-2">
                    <Navigation className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block text-[11px]">How to Travel:</strong>
                      <span className="text-slate-600 text-[11px] leading-snug block mt-0.5">
                        {analyzedPlace.metroConnectivity || analyzedPlace.transitFromCityCenter}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-white/90 rounded-xl border border-emerald-200/80 flex items-start gap-2">
                    <Home className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block text-[11px]">Where to Stay Cheap:</strong>
                      <span className="text-slate-600 text-[11px] leading-snug block mt-0.5">
                        {analyzedPlace.budgetStays ? analyzedPlace.budgetStays.map(s => `${s.name} (${s.price})`).join(' • ') : 'Verified homestays and hostels nearby.'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Confirm selection banner */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Trip will be centered around {analyzedPlace.name}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                    Selected ✓
                  </span>
                </div>
              </div>
            )}

            {/* Standard Regional Preset Cards (Fallbacks / Alternatives) */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 font-medium block mb-2">Or choose a broad regional circuit:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DESTINATIONS.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => {
                      setDestination(dest.id);
                      setAnalyzedPlace(null);
                      setSearchQuery('');
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      destination === dest.id && !analyzedPlace
                        ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs sm:text-sm text-slate-900">{dest.name}</span>
                      {destination === dest.id && !analyzedPlace && (
                        <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                          ✓
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{dest.tagline}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 2: Duration */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>How long is your trip?</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: '1-day', label: '1 Day Outing', sub: 'Paced day trail' },
                { id: '3-5-days', label: '3 - 5 Days', sub: 'Weekend / Getaway' },
                { id: '7-10-days', label: '7 - 10 Days', sub: 'Grand multi-hub circuit' }
              ].map((dur) => (
                <button
                  key={dur.id}
                  type="button"
                  onClick={() => setDuration(dur.id)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    duration === dur.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-2 ring-emerald-500/20'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-medium">{dur.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{dur.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3: Companion Archetype */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Who are you going with? (Vibe & Dynamic)</span>
              </label>
              <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                Tailors safety, romance & pacing
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {COMPANION_TYPES.map((comp) => (
                <button
                  key={comp.id}
                  type="button"
                  onClick={() => {
                    setCompanion(comp.id);
                    if (comp.id === 'girlfriend') {
                      setSelectedVibes(['quiet', 'cafe', 'library']);
                    } else if (comp.id === 'guy_squad') {
                      setSelectedVibes(['adventure', 'street_food', 'night']);
                    } else if (comp.id === 'solo') {
                      setSelectedVibes(['quiet', 'library', 'museum']);
                    }
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    companion === comp.id
                      ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{comp.emoji}</span>
                      <span className="font-semibold text-xs sm:text-sm text-slate-900">{comp.label}</span>
                    </div>
                    {companion === comp.id && (
                      <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{comp.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 4: Vibe Filters */}
          <div>
            <label className="flex items-center justify-between text-sm font-semibold text-slate-800 mb-2">
              <span className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-600" />
                <span>Select your vibe filters (Pick 1 to 4)</span>
              </span>
              <span className="text-xs text-slate-500 font-normal">
                {selectedVibes.length} selected
              </span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {VIBE_FILTERS.map((vibe) => {
                const isSelected = selectedVibes.includes(vibe.id);
                return (
                  <button
                    key={vibe.id}
                    type="button"
                    onClick={() => toggleVibe(vibe.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/90 font-medium ring-1 ring-emerald-500/30'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-lg">{vibe.emoji}</span>
                      {isSelected && (
                        <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                          ✓
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-slate-800 mt-1.5">{vibe.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 5: Budget Tier */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-2">
              <span>💰</span>
              <span>Budget & Stay Comfort</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {BUDGET_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setBudgetTier(tier.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    budgetTier === tier.id
                      ? 'border-emerald-600 bg-emerald-50 text-slate-900 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="font-semibold text-xs text-slate-900">{tier.label}</div>
                  <div className="text-xs font-bold text-emerald-700 mt-0.5">{tier.range}</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-snug">{tier.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {analyzedPlace 
                  ? `Generate Itinerary Around ${analyzedPlace.name}` 
                  : 'Generate My Tailored Itinerary'}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
