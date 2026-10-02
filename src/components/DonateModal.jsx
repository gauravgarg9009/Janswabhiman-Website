import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, ArrowUpRight, Sparkles, Building2 } from 'lucide-react';
import donationData from '../data/donationTiers.json';

export default function DonateModal({ isOpen, onClose }) {
  const [frequency, setFrequency] = useState('once'); // 'once' | 'monthly'
  const [selectedAmount, setSelectedAmount] = useState(5100);
  const [selectedCause, setSelectedCause] = useState('Saraswati-Free Education for Slum Children');

  if (!isOpen) return null;

  const currentTier = donationData.tiers.find(t => t.amount === selectedAmount) || donationData.tiers[1];
  const activePayUrl = frequency === 'once' ? currentTier.once : currentTier.monthly;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-gray-100 z-10" 
        onClick={e => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-[#CC444B] p-6 text-white relative text-left">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="font-heading font-black text-2xl text-white">Support JSWS Seva</h3>
              <p className="text-xs text-white/90 font-sans">80G Tax Exempted • Instant Online Razorpay Receipt</p>
            </div>
          </div>
        </div>

        {/* Modal Form */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          
          {/* Frequency Toggle */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 font-heading">
              1. Contribution Frequency
            </label>
            <div className="grid grid-cols-2 gap-3 bg-gray-100 p-1.5 rounded-2xl">
              <button
                type="button"
                onClick={() => setFrequency('once')}
                className={`py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  frequency === 'once' ? 'bg-[#CC444B] text-white shadow-md' : 'text-gray-700 hover:text-black'
                }`}
              >
                Give Once
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  frequency === 'monthly' ? 'bg-[#CC444B] text-white shadow-md' : 'text-gray-700 hover:text-black'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Monthly Pledge</span>
              </button>
            </div>
          </div>

          {/* Amount Tiers */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 font-heading">
              2. Select Amount
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {donationData.tiers.slice(0, 8).map((tier) => (
                <button
                  key={tier.amount}
                  type="button"
                  onClick={() => setSelectedAmount(tier.amount)}
                  className={`py-3 px-2 rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedAmount === tier.amount 
                      ? 'border-[#CC444B] bg-red-50 text-[#CC444B] ring-2 ring-[#CC444B]/20 font-black' 
                      : 'border-gray-200 text-gray-800 hover:border-gray-300 font-bold bg-white'
                  }`}
                >
                  <span className="font-heading text-sm sm:text-base block">{tier.label}</span>
                </button>
              ))}
            </div>

            {/* Custom Amount Link */}
            <div className="pt-2 text-right">
              <a
                href={donationData.customAmountLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-heading font-bold text-[#CC444B] hover:underline inline-flex items-center gap-1"
              >
                <span>Or Enter Custom Amount →</span>
              </a>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div className="text-xs font-sans text-gray-700 leading-relaxed">
              <strong>Your Impact:</strong> {currentTier.impact}
            </div>
          </div>

          {/* Tax Exemption Note */}
          <div className="flex items-center gap-2 text-xs font-sans text-gray-500">
            <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
            <span>Eligible for 50% Tax Exemption under Section 80G.</span>
          </div>

          {/* Pay Button */}
          <div className="pt-1">
            <a
              href={activePayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#CC444B] hover:bg-red-700 text-white font-heading font-black text-base py-3.5 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Pay {currentTier.label} via Razorpay</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <p className="text-center font-sans text-[11px] text-gray-400 mt-2">
              Accepts UPI (GPay, PhonePe, Paytm), Net Banking & Cards
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
