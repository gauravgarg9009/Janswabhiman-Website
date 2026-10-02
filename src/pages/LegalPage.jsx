import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import legalData from '../data/legalPolicies.json';

export default function LegalPage({ policyKey, onNavigateHome }) {
  const policy = legalData[policyKey] || legalData['privacy-policy'];

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 pt-5 pb-3">
        <button 
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#CC444B] hover:text-red-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8 text-left space-y-6">
        
        <div className="border-b border-gray-200 pb-4 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#CC444B] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Policy Documentation</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-black tracking-tight">
            {policy.title || policyKey.replace('-', ' ').toUpperCase()}
          </h1>
          <p className="font-sans text-xs text-gray-500">
            Jan Swabhiman Welfare Society • Registered Non-Profit
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 text-gray-800 font-sans text-sm sm:text-base leading-[28px] pt-4">
          {policy.paragraphs && policy.paragraphs.map((p, idx) => (
            <p key={idx} className={p.startsWith("SECTION") || p.startsWith("1.") || p.startsWith("2.") || p.startsWith("3.") ? "font-heading font-bold text-lg text-gray-900 pt-4" : ""}>
              {p}
            </p>
          ))}
        </div>

      </div>

    </div>
  );
}
