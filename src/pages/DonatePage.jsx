import React, { useState } from 'react';
import { ArrowLeft, Heart, ShieldCheck, CheckCircle2, ArrowUpRight, Sparkles, Building2 } from 'lucide-react';
import donationData from '../data/donationTiers.json';

export default function DonatePage({ onNavigateHome, onNavigateTo }) {
  const [frequency, setFrequency] = useState('once'); // 'once' | 'monthly'
  const [selectedCause, setSelectedCause] = useState('General Fund (Wherever Needed Most)');
  const [selectedAmount, setSelectedAmount] = useState(5100);

  const selectedTier = donationData.tiers.find(t => t.amount === selectedAmount) || donationData.tiers[1];
  const activePayUrl = frequency === 'once' ? selectedTier.once : selectedTier.monthly;

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 pt-5 pb-3">
        <button 
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#CC444B] hover:text-red-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1.5px] w-12 sm:w-16 bg-[#CC444B]" />
          <span className="font-heading font-bold text-[#CC444B] text-base sm:text-xl">
            {donationData.tagline}
          </span>
          <div className="h-[1.5px] w-12 sm:w-16 bg-[#CC444B]" />
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight leading-tight">
          Donate & <span className="text-[#CC444B]">Transform Lives</span>
        </h1>

        <p className="font-sans text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Select where your seva goes — from slum children's free education and refugee rehabilitation to Gaushala care, tribal welfare, and disaster relief.
        </p>

        {/* Tax Exemption Banner */}
        <div className="inline-flex items-center gap-2 bg-red-50 text-[#CC444B] px-5 py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold border border-red-100 shadow-xs">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>80G Tax Exemption Certified • 100% Direct Ground Utilisation</span>
        </div>
      </div>

      {/* Main Donation Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Select Cause & Amounts */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-lg text-left space-y-8">
            
            {/* Step 1: Choose Cause */}
            <div className="space-y-3">
              <label className="font-heading font-bold text-lg text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#CC444B] text-white text-xs flex items-center justify-center font-bold">1</span>
                <span>Choose where your Seva goes</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {donationData.causes.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedCause(c.name)}
                    className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer flex items-center justify-between ${
                      selectedCause === c.name 
                        ? 'border-[#CC444B] bg-red-50/60 text-[#CC444B] shadow-xs' 
                        : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                    }`}
                  >
                    <span className="line-clamp-1">{c.name}</span>
                    {selectedCause === c.name && <CheckCircle2 className="w-4 h-4 text-[#CC444B] shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Frequency Toggle */}
            <div className="space-y-3">
              <label className="font-heading font-bold text-lg text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#CC444B] text-white text-xs flex items-center justify-center font-bold">2</span>
                <span>Select Contribution Frequency</span>
              </label>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`py-3 px-4 rounded-xl font-heading font-bold text-sm transition-all cursor-pointer ${
                    frequency === 'once'
                      ? 'bg-[#CC444B] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Give Once
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-3 px-4 rounded-xl font-heading font-bold text-sm transition-all cursor-pointer ${
                    frequency === 'monthly'
                      ? 'bg-[#CC444B] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Give Monthly 🔄
                </button>
              </div>
            </div>

            {/* Step 3: Choose Amount Tiers */}
            <div className="space-y-4">
              <label className="font-heading font-bold text-lg text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#CC444B] text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>Choose Donation Amount</span>
              </label>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {donationData.tiers.map((tier) => (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => setSelectedAmount(tier.amount)}
                    className={`py-4 px-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      selectedAmount === tier.amount 
                        ? 'border-[#CC444B] bg-red-50 text-[#CC444B] shadow-md ring-2 ring-[#CC444B]/20' 
                        : 'border-gray-200 hover:border-gray-300 text-gray-800 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-heading font-extrabold text-lg sm:text-xl block">
                      {tier.label}
                    </span>
                    <span className="font-sans text-[11px] text-gray-500 line-clamp-1 mt-1 block">
                      {tier.impact}
                    </span>
                  </button>
                ))}
              </div>

              {/* Custom Other Amount Button */}
              <div className="pt-2 flex justify-start">
                <a
                  href={donationData.customAmountLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#CC444B] hover:text-red-700 bg-red-50 hover:bg-red-100 px-5 py-2.5 rounded-full transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Donate Custom Amount via Razorpay →</span>
                </a>
              </div>
            </div>

            {/* Selected Tier Impact Summary */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-1">
              <span className="text-xs font-heading font-bold text-gray-500 uppercase tracking-wider block">
                Selected Impact
              </span>
              <p className="font-sans text-sm font-semibold text-gray-800">
                {selectedTier.impact} ({frequency === 'once' ? 'One-Time Contribution' : 'Monthly Pledge'})
              </p>
            </div>

            {/* Direct Razorpay Checkout Action */}
            <div className="pt-2">
              <a
                href={activePayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#CC444B] hover:bg-red-700 text-white font-heading font-black text-lg py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Proceed to Pay {selectedTier.label} Securely</span>
                <ArrowUpRight className="w-6 h-6" />
              </a>
              <p className="text-center font-sans text-xs text-gray-500 mt-3">
                🔒 Secure Razorpay checkout • UPI, Net Banking, Credit/Debit Cards & Wallets accepted
              </p>
            </div>

          </div>

          {/* Right Column: Transparency & CSR Box */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* Trust Box */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-[#CC444B]">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="font-heading font-bold text-lg text-gray-900">
                  Tax Benefits & Integrity
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>80G Tax Exemption:</strong> 50% tax deduction on all donations under Section 80G of Income Tax Act.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>12A Certified:</strong> Registered non-profit society with Government of India.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Instant 80G Receipt:</strong> Generated automatically with donor PAN details upon transaction.</span>
                </li>
              </ul>
            </div>

            {/* CSR Desk Link */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-6 shadow-md space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-heading font-bold text-amber-300 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Corporate Giving</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-white">
                Looking to Give as a Company?
              </h4>
              <p className="font-sans text-xs text-gray-300 leading-relaxed">
                We provide complete MCA CSR-1 compliance, Schedule VII mappings, and utilization reports for corporate CSR funds.
              </p>
              <button
                onClick={() => onNavigateTo('csr')}
                className="w-full bg-white hover:bg-gray-100 text-gray-900 font-heading font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                <span>Explore CSR Partnerships →</span>
              </button>
            </div>

            {/* Offline Bank Details Accordion */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3 text-xs font-sans text-gray-600">
              <h4 className="font-heading font-bold text-sm text-gray-900">
                Direct NEFT / RTGS Bank Transfer
              </h4>
              <p className="leading-relaxed">
                For direct bank transfers, please write to <a href="mailto:mailus@janswabhiman.org" className="text-[#CC444B] font-bold underline">mailus@janswabhiman.org</a> to receive society bank details and your 80G receipt.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
