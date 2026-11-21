import React from 'react';
import { 
  X, Star, Clock, IndianRupee, MapPin, Navigation, 
  ThumbsUp, AlertTriangle, Sparkles, Home, Utensils, ExternalLink 
} from 'lucide-react';
import { CURATED_PLACES } from '../data/tripsData';

export default function PlaceDetailModal({ place, onClose }) {
  if (!place) return null;

  // Check if place has full enriched data in CURATED_PLACES
  const fullPlace = CURATED_PLACES.find(p => p.id === place.placeId || p.name === place.name) || place;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="place-modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
              Place Intel & Review Analysis
            </span>
            <h3 id="place-modal-title" className="text-lg font-bold text-slate-900">
              {fullPlace.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-xs sm:text-sm">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 text-[10px] uppercase font-bold block mb-0.5">Stay Duration</span>
              <span className="font-bold text-slate-900 text-xs sm:text-sm">
                ⏱️ {fullPlace.timeToSpend || fullPlace.stayDuration || '1.5 - 2 hrs'}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 text-[10px] uppercase font-bold block mb-0.5">Estimated Cost</span>
              <span className="font-bold text-emerald-700 text-xs sm:text-sm">
                💵 {fullPlace.costPerPerson || fullPlace.cost || 'Free / ₹100'}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
              <span className="text-slate-400 text-[10px] uppercase font-bold block mb-0.5">Best Time Window</span>
              <span className="font-bold text-slate-900 text-xs">
                {fullPlace.bestTime || 'Morning or Golden Hour'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              {fullPlace.description || fullPlace.activity}
            </p>
          </div>

          {/* Review Analysis & Sentiment */}
          {fullPlace.reviewAnalysis && (
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-950 flex items-center gap-1.5 text-xs">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>Visitor Review Consensus ({fullPlace.reviewAnalysis.rating}/5 from {fullPlace.reviewAnalysis.totalReviews?.toLocaleString()} reviews)</span>
                </span>
              </div>

              <p className="text-xs text-amber-900 font-medium italic">
                "{fullPlace.reviewAnalysis.vibeSentiment}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-amber-200/60">
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-1 text-[11px]">
                    <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                    Top Praises:
                  </span>
                  {fullPlace.reviewAnalysis.pros?.map((p, idx) => (
                    <div key={idx} className="text-slate-700 text-[11.5px]">• {p}</div>
                  ))}
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-1 text-[11px]">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    Watch Out For:
                  </span>
                  {fullPlace.reviewAnalysis.cons?.map((c, idx) => (
                    <div key={idx} className="text-slate-700 text-[11.5px]">• {c}</div>
                  ))}
                </div>
              </div>

              {fullPlace.reviewAnalysis.insiderTip && (
                <div className="pt-2 text-xs text-amber-950 font-medium flex items-start gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Insider Secret:</strong> {fullPlace.reviewAnalysis.insiderTip}</span>
                </div>
              )}
            </div>
          )}

          {/* Step-by-Step Transit to this Spot */}
          {fullPlace.transit && (
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2 text-xs">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-emerald-600" />
                <span>How to Reach (from {fullPlace.transit.fromHub})</span>
              </span>
              <div className="space-y-1.5 pl-2">
                {fullPlace.transit.steps?.map((step, sIdx) => (
                  <div key={sIdx} className="text-slate-700 text-[11.5px]">
                    <strong>Step {sIdx + 1}:</strong> {step}
                  </div>
                ))}
              </div>
              <div className="pt-2 flex items-center justify-between text-[11px] text-emerald-900 font-semibold border-t border-emerald-200/60">
                <span>⏱️ {fullPlace.transit.transitTime}</span>
                <span>💵 {fullPlace.transit.approxFare}</span>
              </div>
            </div>
          )}

          {/* Nearby Cheap Stays */}
          {fullPlace.budgetStayNearby && fullPlace.budgetStayNearby.length > 0 && (
            <div>
              <span className="font-bold text-slate-900 flex items-center gap-1.5 text-xs mb-2">
                <Home className="w-4 h-4 text-emerald-600" />
                <span>Cheap & Safe Stays Nearby</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {fullPlace.budgetStayNearby.map((st, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>{st.name}</span>
                      <span className="text-emerald-700 font-extrabold">{st.price}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block">{st.type}</span>
                    <span className="text-[10px] text-emerald-800 font-medium block mt-1">✨ {st.perk}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nearby Signature Food */}
          {fullPlace.foodNearby && fullPlace.foodNearby.length > 0 && (
            <div>
              <span className="font-bold text-slate-900 flex items-center gap-1.5 text-xs mb-2">
                <Utensils className="w-4 h-4 text-emerald-600" />
                <span>Must-Eat Dishes Nearby</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {fullPlace.foodNearby.map((fd, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>{fd.spot}</span>
                      <span className="text-emerald-700">{fd.cost}</span>
                    </div>
                    <span className="text-[11.5px] text-slate-600 mt-0.5 block">🍴 {fd.dish}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            >
              Close
            </button>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${fullPlace.name} ${fullPlace.zone || ''}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
