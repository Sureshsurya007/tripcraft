import React, { useState, useEffect } from 'react';
import { 
  Download, Smartphone, Share, PlusSquare, Check, X, Sparkles, Shield, Zap, Compass, ArrowRight, ExternalLink 
} from 'lucide-react';

export default function InstallAppModal({ isOpen, onClose, deferredPrompt, onInstallSuccess }) {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detect iOS devices (iPhone, iPad, iPod)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isAppleDevice);

    // Detect if already installed / running in standalone PWA mode
    const isInStandaloneMode = 
      window.matchMedia('(display-mode: standalone)').matches || 
      window.navigator.standalone === true;
    setIsStandalone(isInStandaloneMode);
  }, []);

  if (!isOpen) return null;

  const handleNativeInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        if (onInstallSuccess) onInstallSuccess();
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="install-modal-title"
      >
        {/* Banner with gradient & Logo */}
        <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-slate-900 p-6 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-16 h-16 mx-auto rounded-2xl bg-white p-2.5 shadow-xl shadow-emerald-950/30 mb-3 flex items-center justify-center">
            <img src="/pwa-icon.svg" alt="TripCraft Logo" className="w-full h-full object-contain" />
          </div>

          <h2 id="install-modal-title" className="text-xl font-extrabold tracking-tight">
            Install TripCraft on Phone
          </h2>
          <p className="text-xs text-emerald-100 mt-1">
            Enjoy full-screen maps, offline transit guides & 1-tap access
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* If already running standalone */}
          {isStandalone ? (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-emerald-900">TripCraft is Already Installed!</h3>
              <p className="text-xs text-emerald-700">
                You are currently running the full-screen standalone mobile app.
              </p>
            </div>
          ) : isIOS ? (
            /* Apple iOS Instructions */
            <div className="space-y-4">
              <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed font-medium">
                  To install on your iPhone or iPad, use Apple Safari browser:
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    Tap the <strong>Share</strong> button <Share className="w-4 h-4 inline text-blue-600 mx-0.5" /> at the bottom of Safari.
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    Scroll down and tap <strong>"Add to Home Screen"</strong> <PlusSquare className="w-4 h-4 inline text-emerald-600 mx-0.5" />.
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    Tap <strong>"Add"</strong> in the top-right corner. TripCraft will appear on your phone home screen!
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Android / Chrome Native 1-Click Install */
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Instant Offline Load</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-800">No Browser URL Bar</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Secure & Lightweight</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Live Stop Tracker</span>
                </div>
              </div>

              {deferredPrompt ? (
                <button
                  type="button"
                  onClick={handleNativeInstall}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Tap to Install on Phone Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1 text-xs">
                  <p className="font-bold text-slate-800">Ready to Install via Browser Menu</p>
                  <p className="text-slate-500 text-[11.5px]">
                    Tap your browser's three dots (<strong className="text-slate-800">⋮</strong>) at the top right, then select <strong className="text-emerald-700">"Install app"</strong> or <strong className="text-emerald-700">"Add to Home screen"</strong>.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Vercel Cloud Deployment Note */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
              <span>PWA Ready for Vercel Deployment</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              className="font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
