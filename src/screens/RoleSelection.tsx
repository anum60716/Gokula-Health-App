import { Role } from '../types';
import { ArrowLeft, Store, ShoppingBag, ArrowRight } from 'lucide-react';

interface RoleSelectionProps {
  onSelect: (role: Role) => void;
}

export default function RoleSelection({ onSelect }: RoleSelectionProps) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-surface overflow-x-hidden">
      <header className="flex items-center p-4 pb-2 justify-between">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-on-surface text-lg font-bold flex-1 text-center pr-10">Role Selection</h2>
      </header>

      <main className="flex-1 flex flex-col px-5 py-6 w-full">
        <section className="text-center mb-8">
          <h1 className="text-on-surface text-3xl font-bold leading-tight mb-2">Welcome! Who are you?</h1>
          <p className="text-on-surface-variant text-lg">Select your role to continue</p>
        </section>

        <div className="flex flex-col gap-6">
          {/* Vendor Card */}
          <button 
            onClick={() => onSelect('vendor')}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-vendor-green text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left"
          >
            <div 
              className="h-48 w-full bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBewYfzh3NgEazljJH5uqZtppjpS6SpkLP5sWNC-ZNp2pGhVk0rVxHNTkqDTWGdZHrInGN0eRf2xb2-aa0UAaYAhZb255IJEFYt-LegoJ5cMvYnrWVnkEnOzv6XXxuhY7_GBLveoYbhX86q-0-yoCgO92_OzouWiLabKIMlnFULzyxQNBQ_l2CtV1rardASgQyTAkbGBw-hV8ucjeLZz-kNtxesnDN4gzEN0KCgr0g0NBYM2DR29-y-mFyR_aobuBWVR0sITOksnVw')" }}
            />
            <div className="p-6 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Store size={32} fill="white" className="opacity-90" />
                <h3 className="text-2xl font-bold">I am a Vendor / Seller</h3>
              </div>
              <p className="text-white/90 text-sm">Manage your livestock inventory, track sales, and connect with verified buyers in your region.</p>
              <div className="mt-4 flex items-center text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                Get Started
                <ArrowRight size={18} className="ml-1" />
              </div>
            </div>
          </button>

          {/* Customer Card */}
          <button 
            onClick={() => onSelect('customer')}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-customer-blue text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left"
          >
            <div 
              className="h-48 w-full bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2Xk7O6wyCUVsAC3w5ml6KEJYHSrjEONv09dcgC8qtnN3fbgNh-J977T4nMZdVEhejcgE-MVjt8UGTx1aCY1VCSDkurKJzCReCh6d3Ey66VIDDQZq-mQXfLHh2lpYWnvEiSSZnve7Fm0VwxVlDhPGBLu23OJgjt-CYnbqZqx7z84KSXs-BKciZ-BKPYLDSj6BJ06uGdQr8ARwV7M-w_vjvD1Xom94AnQfwsD0OL6ve7iHQHbtJiMeLXDcwWSUiGoH200EDANfS93I')" }}
            />
            <div className="p-6 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <ShoppingBag size={32} fill="white" className="opacity-90" />
                <h3 className="text-2xl font-bold">I am a Customer / Buyer</h3>
              </div>
              <p className="text-white/90 text-sm">Browse certified healthy livestock, compare prices, and purchase directly from trusted regional vendors.</p>
              <div className="mt-4 flex items-center text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                Start Shopping
                <ArrowRight size={18} className="ml-1" />
              </div>
            </div>
          </button>
        </div>

        <footer className="mt-auto py-6 text-center">
          <p className="text-on-surface-variant text-[11px] font-medium opacity-60">By continuing, you agree to our Terms of Service</p>
        </footer>
      </main>
    </div>
  );
}
