import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ItineraryView from './components/ItineraryView';
import TransitNavigator from './components/TransitNavigator';
import StayGuide from './components/StayGuide';
import FoodCrawlGuide from './components/FoodCrawlGuide';
import ExecutionLiveMode from './components/ExecutionLiveMode';
import TripBuilderModal from './components/TripBuilderModal';
import PlaceDetailModal from './components/PlaceDetailModal';
import PlaceSearchSpotlight from './components/PlaceSearchSpotlight';
import MallsAndCinemasGuide from './components/MallsAndCinemasGuide';
import InstallAppModal from './components/InstallAppModal';
import MobileBottomNav from './components/MobileBottomNav';
import { PRESET_ITINERARIES, DESTINATIONS, COMPANION_TYPES } from './data/tripsData';
import { generateSmartItinerary } from './utils/itineraryEngine';
import { Sparkles, Compass, MapPin, Users, Calendar, ArrowRight, Check, Film, Smartphone, Download, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [currentItinerary, setCurrentItinerary] = useState(() => {
    return generateSmartItinerary({
      destination: 'bangalore',
      duration: '1-day',
      companion: 'girlfriend',
      selectedVibes: ['quiet', 'cafe', 'library', 'museum'],
      budgetTier: 'smart'
    });
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectedPlaceForModal, setSelectedPlaceForModal] = useState(null);
  const [builderInitialQuery, setBuilderInitialQuery] = useState('');

  // PWA & Phone Install States
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showMobileInstallBanner, setShowMobileInstallBanner] = useState(true);

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  // Quick preset loader
  const handleSelectPreset = (presetId) => {
    const found = PRESET_ITINERARIES.find(p => p.id === presetId);
    if (found) {
      const enriched = generateSmartItinerary({
        destination: found.destination,
        duration: found.duration,
        companion: found.companion,
        selectedVibes: ['quiet', 'cafe'],
        budgetTier: 'smart'
      });
      setCurrentItinerary(enriched);
      setActiveTab('itinerary');
    }
  };

  const handleGenerateCustom = (params) => {
    const generated = generateSmartItinerary(params);
    setCurrentItinerary(generated);
    setActiveTab('itinerary');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased">
      {/* Top Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenCustomizer={() => {
          setBuilderInitialQuery('');
          setIsCustomizerOpen(true);
        }}
        onPrint={handlePrint}
        onOpenInstall={() => setIsInstallModalOpen(true)}
      />

      {/* Mobile Phone Install Alert Banner */}
      {showMobileInstallBanner && (
        <div className="md:hidden bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-3.5 py-2 flex items-center justify-between text-xs shadow-sm">
          <div className="flex items-center gap-2 truncate">
            <span className="text-base">📱</span>
            <span className="truncate font-medium">Install TripCraft on phone for full-screen offline use!</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsInstallModalOpen(true)}
              className="px-2.5 py-1 bg-white text-emerald-800 rounded-lg font-bold text-[11px] shadow-xs active:scale-95 cursor-pointer"
            >
              Install
            </button>
            <button
              type="button"
              onClick={() => setShowMobileInstallBanner(false)}
              className="p-1 text-white/80 hover:text-white cursor-pointer"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Preset Quick-Picks Bar */}
      <div className="bg-white border-b border-slate-200 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant Curated Outings:</span>
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <button
              type="button"
              onClick={() => handleGenerateCustom({
                destination: 'Varkala',
                duration: '1-day',
                companion: 'girlfriend',
                selectedVibes: ['nature', 'quiet', 'cafe'],
                budgetTier: 'smart'
              })}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                currentItinerary?.destinationName?.toLowerCase().includes('varkala')
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300'
              }`}
            >
              <span>🌊</span>
              <span>Varkala Beach & Cliffs</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectPreset('kerala-5day-circuit')}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                currentItinerary?.destination === 'kerala' && !currentItinerary?.destinationName?.toLowerCase().includes('varkala')
                  ? 'bg-teal-50 text-teal-800 border-teal-300 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-teal-300'
              }`}
            >
              <span>🌴</span>
              <span>Kerala 5-Day Mist & Canals</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectPreset('blr-date-day')}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                currentItinerary?.companion === 'girlfriend' && currentItinerary?.destination === 'bangalore'
                  ? 'bg-rose-50 text-rose-700 border-rose-300 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-rose-300'
              }`}
            >
              <span>💑</span>
              <span>Bangalore 1-Day Date (Cubbon & Church St)</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectPreset('blr-guys-day')}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                currentItinerary?.companion === 'guy_squad' && currentItinerary?.destination === 'bangalore'
                  ? 'bg-amber-50 text-amber-800 border-amber-300 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-300'
              }`}
            >
              <span>👬</span>
              <span>Bangalore Guy Squad (Karting & Biryani)</span>
            </button>

            <button
              type="button"
              onClick={() => handleGenerateCustom({
                destination: 'Gokarna',
                duration: '3-5-days',
                companion: 'guy_squad',
                selectedVibes: ['adventure', 'nature'],
                budgetTier: 'smart'
              })}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                currentItinerary?.destinationName?.toLowerCase().includes('gokarna')
                  ? 'bg-cyan-50 text-cyan-800 border-cyan-300 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-cyan-300'
              }`}
            >
              <span>🏖️</span>
              <span>Gokarna Beach Trek</span>
            </button>

            <button
              type="button"
              onClick={() => handleGenerateCustom({
                destination: 'Coorg',
                duration: '1-day',
                companion: 'girlfriend',
                selectedVibes: ['nature', 'quiet', 'cafe'],
                budgetTier: 'smart'
              })}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                currentItinerary?.destinationName?.toLowerCase().includes('coorg')
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300'
              }`}
            >
              <span>🌲</span>
              <span>Coorg Coffee & Mist</span>
            </button>

            <button
              type="button"
              onClick={() => handleGenerateCustom({
                destination: 'Pondicherry',
                duration: '1-day',
                companion: 'girlfriend',
                selectedVibes: ['cafe', 'quiet'],
                budgetTier: 'smart'
              })}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                currentItinerary?.destinationName?.toLowerCase().includes('pondy') || currentItinerary?.destinationName?.toLowerCase().includes('pondicherry')
                  ? 'bg-amber-50 text-amber-800 border-amber-300 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-300'
              }`}
            >
              <span>🥖</span>
              <span>Pondicherry French Quarter</span>
            </button>

            <button
              type="button"
              onClick={() => handleGenerateCustom({
                destination: 'Mahalakshmi Layout',
                duration: '1-day',
                companion: 'girlfriend',
                selectedVibes: ['museum', 'cafe', 'quiet'],
                budgetTier: 'smart'
              })}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                currentItinerary?.destinationName?.toLowerCase().includes('mahalakshmi')
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-300 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-indigo-300'
              }`}
            >
              <span>🛕</span>
              <span>Mahalakshmi (ISKCON + Orion Mall + PVR)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setBuilderInitialQuery('');
                setIsCustomizerOpen(true);
              }}
              className="px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-100/70 hover:bg-emerald-100 border border-emerald-300 whitespace-nowrap cursor-pointer flex items-center gap-1"
            >
              <span>✨ Build Custom...</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 pb-28 md:pb-8">
        {/* Smart Locality & Place Explorer Search Spotlight */}
        <PlaceSearchSpotlight 
          onSelectPlaceAndGenerate={handleGenerateCustom}
        />

        {activeTab === 'itinerary' && (
          <ItineraryView 
            itinerary={currentItinerary}
            onSelectPlace={(place) => setSelectedPlaceForModal(place)}
            onSwitchToExecution={() => setActiveTab('execution')}
            onOpenCustomizer={() => {
              setBuilderInitialQuery('');
              setIsCustomizerOpen(true);
            }}
          />
        )}

        {activeTab === 'malls' && (
          <MallsAndCinemasGuide 
            onSelectComboItinerary={handleGenerateCustom}
          />
        )}

        {activeTab === 'transit' && (
          <TransitNavigator 
            itinerary={currentItinerary} 
          />
        )}

        {activeTab === 'stays' && (
          <StayGuide 
            itinerary={currentItinerary} 
          />
        )}

        {activeTab === 'food' && (
          <FoodCrawlGuide 
            itinerary={currentItinerary} 
          />
        )}

        {activeTab === 'execution' && (
          <ExecutionLiveMode 
            itinerary={currentItinerary} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 pb-24 md:pb-6">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-700">
            TripCraft • Hyper-Personalized Day Trips, City Malls, PVR IMAX & Step-by-Step Transit Navigator
          </p>
          <p className="text-[11px] text-slate-400">
            Search any locality in Bangalore or regional getaway to analyze places to visit, city malls, BookMyShow cinema showtimes, transit & cheap stays.
          </p>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar for Smartphones */}
      <MobileBottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenCustomizer={() => {
          setBuilderInitialQuery('');
          setIsCustomizerOpen(true);
        }}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        isInstallable={Boolean(deferredPrompt)}
      />

      {/* PWA Phone Install Modal */}
      <InstallAppModal 
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        deferredPrompt={deferredPrompt}
        onInstallSuccess={() => setShowMobileInstallBanner(false)}
      />

      {/* Custom Trip Builder Modal (with integrated place search & analysis) */}
      <TripBuilderModal 
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onGenerate={handleGenerateCustom}
        initialQuery={builderInitialQuery}
      />

      {/* Detailed Place Intel Modal */}
      <PlaceDetailModal 
        place={selectedPlaceForModal}
        onClose={() => setSelectedPlaceForModal(null)}
      />
    </div>
  );
}
