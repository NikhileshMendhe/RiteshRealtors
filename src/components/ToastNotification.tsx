import React, { useEffect } from 'react';
import { ToastState } from '../types/realEstate';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastNotificationProps {
  toast: ToastState;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ toast, onClose }) => {
  if (!toast.show) return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  return (
    <div className="fixed top-20 right-6 z-50 max-w-sm w-full bg-white rounded-2xl p-4 shadow-soft-lg border border-stone-200 animate-in slide-in-from-top duration-300 flex items-start gap-3">
      <div className="w-9 h-9 rounded-xl bg-brand-green-50 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
        {toast.type === 'info' ? <Info className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
      </div>

      <div className="flex-1 pr-2">
        <h4 className="text-xs font-bold text-brand-charcoal">{toast.title}</h4>
        <p className="text-xs text-stone-600 font-sans mt-0.5 leading-snug">{toast.message}</p>
      </div>

      <button
        onClick={onClose}
        className="text-stone-400 hover:text-stone-700 p-1 text-xs font-bold"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
