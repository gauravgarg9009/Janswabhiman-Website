import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, QrCode, CreditCard, Sparkles } from 'lucide-react';

export default function DonateModal({ isOpen, onClose }) {
  const [frequency, setFrequency] = useState('monthly');
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [cause, setCause] = useState('General Seva & Slum Education');
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  if (!isOpen) return null;

  const handleDonate = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const finalAmount = amount === 'custom' ? customAmount : amount;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-gray-100" onClick={e => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-900 via-brand-red to-red-800 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2.5 rounded-xl">
              <Heart className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="font-heading font-black text-2xl">Support JSWS Seva</h3>
              <p className="text-xs text-red-100">80G Tax Exempted • 100% Ground Transparency</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="font-heading font-black text-3xl text-gray-900">
                Pranam! Thank You for Your Seva 🙏
              </h4>
              <p className="text-gray-600 text-base max-w-md mx-auto">
                Your pledge of <strong className="text-brand-red">₹{finalAmount}</strong> ({frequency}) for <strong>{cause}</strong> has been received with gratitude.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-4 rounded-2xl text-left text-xs text-gray-700 max-w-md mx-auto space-y-1.5">
              <div className="font-bold text-gray-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-red" />
                <span>JSWS Official Bank & Tax Info:</span>
              </div>
              <div>Account Name: Janswabhiman Welfare Society</div>
              <div>Bank: State Bank of India (SBI)</div>
              <div>80G Registration: AAATJ9087RF20214</div>
              <div>A receipt with 80G tax exemption certificate will be sent to your phone/email.</div>
            </div>

            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="bg-brand-red text-white font-extrabold px-8 py-3.5 rounded-xl shadow-md hover:bg-red-700 transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleDonate} className="p-6 md:p-8 space-y-6 text-left">
            
            {/* Frequency Toggle */}
            <div className="flex bg-gray-100 p-1.5 rounded-2xl">
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  frequency === 'monthly' ? 'bg-brand-red text-white shadow-md' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Monthly Pledge (Recommended)</span>
              </button>
              <button
                type="button"
                onClick={() => setFrequency('one-time')}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                  frequency === 'one-time' ? 'bg-brand-red text-white shadow-md' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                One-Time Contribution
              </button>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Select Amount (INR ₹)
              </label>
              <div className="grid grid-cols-4 gap-3">
                {['500', '1000', '2500', '5000'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setAmount(amt); setCustomAmount(''); }}
                    className={`py-3 rounded-xl font-extrabold text-sm border-2 transition-all ${
                      amount === amt 
                        ? 'border-brand-red bg-red-50 text-brand-red shadow-sm' 
                        : 'border-gray-200 text-gray-800 hover:border-brand-red'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              <div className="mt-3">
                <input
                  type="number"
                  placeholder="Or enter custom amount in ₹"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setAmount('custom'); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-brand-red text-sm font-semibold"
                />
              </div>
            </div>

            {/* Cause Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Direct Your Contribution To
              </label>
              <select
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-brand-red text-sm font-semibold bg-white"
              >
                <option value="General Seva & Slum Education">General Seva & Slum Education (Saraswati School)</option>
                <option value="Gauseva & Stray Animal Care">Gauseva & Stray Animal Ambulance</option>
                <option value="Women Skill Center & Empowerment">Women Skill Center & Empowerment</option>
                <option value="Pak Hindu Refugee Rehabilitation">Pak Hindu Refugee Rehabilitation</option>
                <option value="Disaster & Flood Relief">Disaster & Flood Emergency Relief</option>
              </select>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border flex items-center gap-3 text-sm font-bold transition-all ${
                    paymentMethod === 'upi' ? 'border-brand-red bg-red-50 text-brand-red' : 'border-gray-200 text-gray-700'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-brand-red" />
                  <span>UPI / GPay / PhonePe</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border flex items-center gap-3 text-sm font-bold transition-all ${
                    paymentMethod === 'card' ? 'border-brand-red bg-red-50 text-brand-red' : 'border-gray-200 text-gray-700'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-brand-red" />
                  <span>Card / Netbanking</span>
                </button>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full bg-brand-red hover:bg-red-700 text-white font-black text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Proceed to Donate ₹{finalAmount || '0'}</span>
            </button>

            <p className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
              <span>Encrypted 256-bit Secure Gateway • Tax Exemption Certificate issued</span>
            </p>

          </form>
        )}

      </div>
    </div>
  );
}
