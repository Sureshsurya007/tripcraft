import React from 'react';
import { Compass, Train, Home, Utensils, CheckCircle2, Sparkles, Share2, Printer, Film } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenCustomizer, onPrint, onOpenInstall }) {
  const tabs = [
    { id: 'itinerary', label: 'Itinerary Blueprint', icon: Compass },
    { id: 'malls', label: 'City Malls & Movies', icon: Film, badge: 'BookMyShow' },
    { id: 'transit', label: 'Transit & Route Steps', icon: Train },
    { id: 'stays', label: 'Cheap Stays & Hostels', icon: Home },
    { id: 'food', label: 'Food & Cafe Intel', icon: Utensils },
    { id: 'execution', label: 'Live Day Navigator', icon: CheckCircle2, badge: 'Live' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 bg-clip-text text-transparent">
                  TripCraft
                </span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-full">
                  South India & BLR
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Smart Hyper-Local Itineraries & Multi-Modal Transit</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Install App on Phone */}
            <button
              type="button"
              onClick={onOpenInstall}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg shadow-2xs transition-all active:scale-95 cursor-pointer"
              title="Install TripCraft on your smartphone"
            >
              <span>📱</span>
              <span className="hidden sm:inline">Install on Phone</span>
              <span className="sm:hidden">Install</span>
            </button>

            <button
              type="button"
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Customize Trip</span>
              <span className="sm:hidden">Customize</span>
            </button>

            <button
              type="button"
              onClick={onPrint}
              title="Print or Save PDF"
              aria-label="Print or Save PDF"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors hidden md:inline-flex"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-2 no-scrollbar border-t border-slate-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-selected={isActive}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`px-1.5 py-0.2 text-[10px] font-bold rounded-full ${
                    tab.badge === 'Live' ? 'bg-amber-100 text-amber-800 animate-bounce' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {tab.badge}
                  </span>
                )}
                {isActive && (
                  <div className="absolute -bottom-2 left-2 right-2 h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
