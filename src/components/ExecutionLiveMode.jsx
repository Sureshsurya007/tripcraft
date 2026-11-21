import React, { useState } from 'react';
import { 
  CheckCircle2, Circle, ArrowRight, Navigation, MapPin, 
  ExternalLink, Clock, Phone, AlertCircle, Sparkles, Shield, IndianRupee, RotateCcw
} from 'lucide-react';

export default function ExecutionLiveMode({ itinerary }) {
  const allStops = (itinerary?.days || []).flatMap((d, dIdx) => 
    d.stops
      .filter(s => !s.transitNext)
      .map(s => ({ ...s, dayNumber: d.dayNumber }))
  );

  const [completedIds, setCompletedIds] = useState([]);
  const [currentStopIndex, setCurrentStopIndex] = useState(0);

  const toggleComplete = (idx) => {
    if (completedIds.includes(idx)) {
      setCompletedIds(completedIds.filter(i => i !== idx));
    } else {
      setCompletedIds([...completedIds, idx]);
      if (idx === currentStopIndex && currentStopIndex < allStops.length - 1) {
        setCurrentStopIndex(currentStopIndex + 1);
      }
    }
  };

  const resetProgress = () => {
    setCompletedIds([]);
    setCurrentStopIndex(0);
  };

  const currentStop = allStops[currentStopIndex] || allStops[0];
  const nextStop = allStops[currentStopIndex + 1] || null;

  // Find corresponding transit step for current stop if exists
  const transitStep = (itinerary?.days || []).flatMap(d => d.stops).find((s, idx, arr) => {
    const prev = arr[idx - 1];
    return prev && prev.name === currentStop?.name && s.transitNext;
  })?.transitNext;

  const percentComplete = allStops.length > 0 
    ? Math.round((completedIds.length / allStops.length) * 100) 
    : 0;

  return (
    <div className="space-y-6">
      {/* Execution Control Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Live Execution Companion Mode
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-white">
              {itinerary?.title || 'Active Trip Trail'}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Follow along step-by-step: track progress, check next transit steps & open navigation
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Progress</span>
              <span className="text-lg font-bold text-emerald-400">
                {completedIds.length} of {allStops.length} done
              </span>
            </div>
            <button
              type="button"
              onClick={resetProgress}
              title="Reset progress"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 w-full bg-slate-800 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
      </div>

      {/* Active "Where You Are Right Now" Card */}
      {currentStop && (
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white rounded-2xl border-2 border-emerald-500/60 p-6 shadow-md relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-600 text-white mb-2 shadow-xs">
                <span>Current Destination</span>
                <span>• Day {currentStop.dayNumber}</span>
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                {currentStop.name}
              </h3>
              <p className="text-xs text-slate-600 mt-1 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>{currentStop.time}</span>
                <span>• Stay Duration: {currentStop.stayDuration || '2 hrs'}</span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleComplete(currentStopIndex)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                completedIds.includes(currentStopIndex)
                  ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white active:scale-95'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{completedIds.includes(currentStopIndex) ? 'Marked as Visited' : 'Mark as Done'}</span>
            </button>
          </div>

          <p className="text-sm text-slate-700 mt-3 leading-relaxed">
            {currentStop.activity}
          </p>

          <div className="mt-4 pt-3 border-t border-emerald-200/60 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-emerald-900 font-medium">
              💡 {currentStop.whySpecial || 'Enjoy the local atmosphere!'}
            </span>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${currentStop.name} ${currentStop.zone || ''} ${itinerary?.destination}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Navigate in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Transit Connector to Next Stop */}
      {nextStop && (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-800 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              <Navigation className="w-3.5 h-3.5 text-emerald-600" />
              <span>Upcoming Transit Leg</span>
            </span>
            <span className="text-slate-500 font-medium">
              Next Stop: <strong className="text-slate-900">{nextStop.name}</strong>
            </span>
          </div>

          <div className="mt-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <span>{transitStep?.mode || 'Metro / Auto / Cab'}</span>
                <span className="text-slate-500 font-normal">({currentStop.name} → {nextStop.name})</span>
              </span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">
                {transitStep?.time || '~15-20 mins'} • {transitStep?.fare || '₹30-₹50'}
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11.5px]">
              {transitStep?.directions || 'Board nearest Metro line or book a quick Rapido/Auto. Follow main thoroughfare directly to the next destination.'}
            </p>
          </div>
        </div>
      )}

      {/* Full Stop Checklist */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Complete Itinerary Checklist</span>
        </h3>

        <div className="space-y-2.5">
          {allStops.map((stop, idx) => {
            const isCompleted = completedIds.includes(idx);
            const isCurrent = idx === currentStopIndex;
            return (
              <div
                key={idx}
                onClick={() => setCurrentStopIndex(idx)}
                className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                  isCurrent
                    ? 'border-emerald-500 bg-emerald-50/50 ring-1 ring-emerald-500/20'
                    : isCompleted
                    ? 'border-slate-200 bg-slate-50/80 opacity-75'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete(idx);
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                      isCompleted 
                        ? 'bg-emerald-600 text-white' 
                        : 'border-2 border-slate-300 text-transparent hover:border-emerald-600'
                    }`}
                  >
                    ✓
                  </button>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold ${isCompleted ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {stop.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">Day {stop.dayNumber}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block">{stop.time} • {stop.zone}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-slate-700">{stop.cost}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Emergency & Safe Transit Helpline Contacts */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs">
        <div className="flex items-center gap-2 text-slate-900 font-bold mb-3">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>Local Emergency & Tourist Assistance Helplines</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <span className="text-slate-400 text-[10px] uppercase font-bold block">Namma Metro BLR</span>
            <span className="font-bold text-slate-900 block text-xs">Toll-Free: 1800-425-12345</span>
            <span className="text-[11px] text-slate-500">WhatsApp QR: +91 81055 56677</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <span className="text-slate-400 text-[10px] uppercase font-bold block">Women Safety / Pink Hoysala</span>
            <span className="font-bold text-slate-900 block text-xs">Police SOS: 112</span>
            <span className="text-[11px] text-slate-500">Pink Hoysala Patrols</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <span className="text-slate-400 text-[10px] uppercase font-bold block">Tourist Police India</span>
            <span className="font-bold text-slate-900 block text-xs">Toll-Free: 1363</span>
            <span className="text-[11px] text-slate-500">Multilingual 24x7 help</span>
          </div>
        </div>
      </div>
    </div>
  );
}
