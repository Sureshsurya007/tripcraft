import React from 'react';
import { Compass, Film, Train, Home, CheckCircle2, Sparkles, Download } from 'lucide-react';

export default function MobileBottomNav({ 
  activeTab, 
  setActiveTab, 
  onOpenCustomizer,
  onOpenInstallModal,
  isInstallable
}) {
  const tabs = [
    { id: 'itinerary', label: 'Itinerary', icon: Compass },
    { id: 'malls', label: 'Malls', icon: Film, badge: 'PVR' },
    { id: 'transit', label: 'Transit', icon: Train },
    { id: 'stays', label: 'Stays', icon: Home },
    { id: 'execution', label: 'Live Day', icon: CheckCircle2, badge: 'Live' }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-2 py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-around gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all cursor-pointer ${
                isActive 
                  ? 'text-emerald-700 font-bold' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-600 scale-110' : 'text-slate-400'}`} />
                {tab.badge && (
                  <span className={`absolute -top-1 -right-2 px-1 py-0.2 text-[8.5px] font-extrabold rounded-full ${
                    tab.badge === 'Live' ? 'bg-amber-500 text-white animate-pulse' : 'bg-red-500 text-white'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight truncate max-w-[56px]">
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-emerald-600 mt-0.5" />
              )}
            </button>
          );
        })}

        {/* Quick Install Action on Phone */}
        <button
          type="button"
          onClick={onOpenInstallModal}
          className="flex flex-col items-center justify-center py-1 px-1 text-emerald-800 hover:text-emerald-900 cursor-pointer"
          title="Install App"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shadow-2xs">
            <Download className="w-4 h-4 text-emerald-700" />
          </div>
          <span className="text-[9.5px] font-bold mt-0.5 text-emerald-700">
            Install
          </span>
        </button>
      </div>
    </div>
  );
}
