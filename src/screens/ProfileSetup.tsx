import { useState } from 'react';
import { ArrowLeft, Camera, MapPin, ChevronRight, MessageSquare } from 'lucide-react';
import { Role, UserProfile } from '../types';

interface ProfileSetupProps {
  role: Role;
  onBack: () => void;
  onComplete: (profile: UserProfile) => void;
}

export default function ProfileSetup({ role, onBack, onComplete }: ProfileSetupProps) {
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const handleComplete = () => {
    onComplete({
      fullName,
      location,
      businessName: role === 'vendor' ? businessName : undefined,
      whatsappNumber: role === 'vendor' ? whatsappNumber : undefined,
      role
    });
  };

  const isVendor = role === 'vendor';

  return (
    <div className="bg-surface text-on-surface flex flex-col min-h-screen">
      <header className="flex items-center p-4 sticky top-0 bg-surface z-10 border-b border-surface-container-high">
        <button onClick={onBack} className="p-3 -ml-2 rounded-full hover:bg-surface-container">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold flex-1 text-center pr-10">
          Set Up Your {isVendor ? 'Vendor' : ''} Profile
        </h2>
      </header>

      <div className="flex-1 overflow-y-auto px-5 py-6">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="relative">
            <div className={`w-32 h-32 rounded-full flex items-center justify-center overflow-hidden border-2 border-outline-variant shadow-sm ${
              isVendor ? '' : 'border-dashed bg-surface-container-high'
            }`}
              style={isVendor ? { 
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-CmphsLikqcHy45E28hPIKTlcO6zYKfB77xxVzUqyoMnDhGTWYbm_bxKNc1enJ6u2cOlBCxsMFzUnwWM7li5v-phWouU9zqSEWRBaCooUK6NdoCS3YJ1Pj3rxW0Sqy7AHifDgOOCDUTVjhUKLMMcduBotLO7AZZc9zdLHJCJqX2YP7zRjz1O0qoRRJJIBHrczn4gIPklnY0U7DSMrcZ7Cc51meja7e0Pg2r8SYYjWowkakVkhXPYr6YtSL3TG8GRO4GOkJwKf2sQ')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              } : {}}
            >
              {!isVendor && <div className="text-outline-variant scale-150"><MapPin size={48} /></div>}
            </div>
            <button className="absolute bottom-1 right-1 bg-primary text-on-primary p-3 rounded-full shadow-lg border-2 border-surface cursor-pointer">
              <Camera size={20} />
            </button>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium">
              {isVendor ? 'Add Business Logo or Photo' : 'Add a photo for better recognition'}
            </p>
            <p className="text-sm text-on-surface-variant font-medium opacity-70">
              Help buyers recognize your brand
            </p>
          </div>
        </div>

        <div className="space-y-6 max-w-sm mx-auto">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-on-surface-variant px-1">Full Name</label>
            <input 
              className="w-full rounded-2xl border border-outline bg-surface-container-low px-4 py-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="e.g. John Doe" 
              type="text" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {isVendor && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface-variant px-1">Business/Shop Name</label>
              <input 
                className="w-full rounded-2xl border border-outline bg-surface-container-low px-4 py-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="e.g. Green Valley Farms" 
                type="text" 
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-on-surface-variant px-1">Location</label>
            <div className="relative">
              <input 
                className="w-full rounded-2xl border border-outline bg-surface-container-low pl-4 pr-12 py-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="City or District" 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
            </div>
            <p className="text-[11px] text-outline px-1">Helps us find {isVendor ? 'buyers' : 'vendors'} near you</p>
          </div>

          {isVendor && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface-variant px-1">WhatsApp Number</label>
              <div className="relative">
                <input 
                  className="w-full rounded-2xl border border-outline bg-surface-container-low px-4 py-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all pr-12"
                  placeholder="+234 802 123 4567" 
                  type="tel" 
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#25D366]">
                  <MessageSquare size={20} fill="currentColor" />
                </div>
              </div>
              <p className="text-[11px] text-outline px-1">This number will be used for buyer inquiries via WhatsApp.</p>
            </div>
          )}
        </div>
        
        <div className="h-32" />
      </div>

      <footer className="p-5 border-t border-surface-container-high bg-surface/80 backdrop-blur-md fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <button 
          onClick={handleComplete}
          disabled={!fullName || !location || (isVendor && !businessName)}
          className={`w-full py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] ${
            isVendor ? 'bg-vendor-green text-white' : 'bg-primary text-on-primary'
          } disabled:opacity-50`}
        >
          <span>Save & Continue</span>
          <ChevronRight size={20} />
        </button>
      </footer>
    </div>
  );
}
