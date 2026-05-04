import { useState } from 'react';
import { Home, Store, User, Bell, Plus, Star, Package, ClipboardCheck, ArrowRight, UploadCloud, ChevronRight, Search } from 'lucide-react';
import { UserProfile, Role, Screen } from '../types';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';

interface DashboardProps {
  profile: UserProfile;
  onAction: (action: 'upload' | 'find' | 'reviews') => void;
}

export default function Dashboard({ profile, onAction }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('Home');
  const isVendor = profile.role === 'vendor';

  const MyProductsList = () => (
    <div className="flex flex-col gap-3 p-5 pb-24">
      {MOCK_PRODUCTS.map(product => (
        <div key={product.id} className="flex gap-4 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant transition-all hover:scale-[1.02]">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-20 shrink-0" 
               style={{ backgroundImage: `url("${product.imageUrl}")` }} 
          />
          <div className="flex flex-1 flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start gap-2">
              <div className="flex flex-col overflow-hidden">
                <p className="text-on-surface text-base font-bold truncate">{product.name}</p>
                <div className="flex mt-1">
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <button className="text-on-surface-variant hover:bg-surface-container-high p-1 rounded-full transition-colors shrink-0">
                <Plus size={18} className="rotate-45" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[#25D366] text-lg font-black tracking-tight">₹{product.price.toLocaleString()}</p>
              <span className={`text-[11px] font-bold uppercase tracking-widest ${product.inStock ? 'text-tertiary' : 'text-error'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      ))}
      <button 
        onClick={() => onAction('upload')}
        className="fixed bottom-24 right-6 flex items-center justify-center rounded-2xl bg-primary text-on-primary size-14 shadow-2xl hover:scale-105 active:scale-95 transition-all z-20"
      >
        <Plus size={32} />
      </button>
    </div>
  );

  const VendorDashboard = () => (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 flex items-center bg-surface px-5 py-4 border-b border-outline-variant justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full border-2 border-primary-container overflow-hidden shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAyscsDRNS04YnRnGZwtE5U1w8x28cjJtyTv-jxtU9LP7ctX5QZWG-EilYn3UyqPmuV-OY573zryICebMaRd5TvpC6wFVh8pTxos1rjVXSR0lKcsU6VI8YaY2ulZASJZmzBicBc26xab0QwciA6jOaU4eLupJWomp79rru_grXrkZerRSFLo0E6W4InmF548cyw8UQEoFYRKuqpzyMixT2gqngyYHMIGKDlJjjIaSMBHPhkHpLsY_i0kI_75WqvGv3pSl4tAqO94I" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="text-xl font-bold">Gokula-Health</h2>
        </div>
        <div className="flex gap-2">
          {activeTab === 'Products' && (
            <button className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant">
              <Search size={22} />
            </button>
          )}
          <button className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant relative">
            <Bell size={22} />
            <span className="absolute top-2 right-2 size-2 bg-error rounded-full border border-surface" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {activeTab === 'Home' ? (
          <>
            <section className="px-5 pt-6 pb-4">
              <h1 className="text-3xl font-bold">Hello, {profile.fullName.split(' ')[0]}!</h1>
              <p className="text-on-surface-variant font-medium mt-1">Manage your products and reviews</p>
            </section>

            <section className="px-5 grid grid-cols-2 gap-3 mb-8">
              <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant">
                <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Total Sales</p>
                <p className="text-2xl font-bold mt-1">₹45,280</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant">
                <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Active Orders</p>
                <p className="text-2xl font-bold mt-1">12</p>
              </div>
            </section>

            <section className="px-5 flex flex-col gap-6 pb-24">
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant shadow-sm group">
                <div className="h-48 relative">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx6CxXuBSBxboSgX-QQlN1J3KeAHBEqBv5TtCUQ3u2A6GE39_bWIyLBqmwxbSgC2M5LLy7DOJf0VWADHC7dzrMQ1z3GyJw9WVXTVNrFTOfWUY88IlsXlQ_wUbIeKJgX7n-HQ0RnZlpH8Hj4RAVqGGeUJKU19fsQP31usiSYglDbCxWfKQHFW3G8-yKeasyoKdWLFLC-qNo77qKdyoD45dFQrovhacg3KMuaaer77CUDyqt_3fxwNpNXYKpeyo0bSNY2ES9u9yingY" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-vendor-green p-3 rounded-full shadow-lg text-white"><UploadCloud size={24} /></div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">Upload Product</h3>
                    <p className="text-sm text-on-surface-variant">List new health supplements or veterinary equipment to your store.</p>
                  </div>
                  <button onClick={() => onAction('upload')} className="w-full h-12 bg-vendor-green text-white font-bold rounded-xl active:scale-95 transition-all">New Product</button>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant shadow-sm group">
                <div className="h-48 relative">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEUEfs6sUnUl5JIvmw9VirFSrdhFnS3EYcgfiaAhFaZJ9oE_1YXCBnCoR-OBLAL9hpF_yzouDtfw5yOdcaEwdzsg93wfSB0rf5yd7_LISCJFGsSFh131mWlsY6ZdpPq2TQuQnXaHSPHydqnr6IUyej4rl9ae4FrrPPvT_YAC4hVdy7u6yzBzjca89gBbufiL5W3GWka1Ykj_qgPgk03a3mMIr3uBjRRxXowNl3x423PaM2iJo4QgKdz35AMvCMaiUEOC1n178JO2M" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-vendor-orange p-3 rounded-full shadow-lg text-white"><Package size={24} /></div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">My Products</h3>
                    <p className="text-sm text-on-surface-variant">Manage your existing inventory, update prices, and track stock levels.</p>
                  </div>
                  <button onClick={() => setActiveTab('Products')} className="w-full h-12 bg-vendor-orange text-white font-bold rounded-xl active:scale-95 transition-all">Manage Inventory</button>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant shadow-sm group">
                <div className="h-48 relative">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_9meZtwwctb_amMzPg-t8lU7xPMjhh0Ty0gdHNEhWydI_A0gOeufWhZU50Vk2cMuJ3rehf786d-qap8TgRt1jmxilfZegszbzeoYzEdsdcJSfMY9rhl98Z0Jq_5fkioXsYgEb0eKgCFJTFpaQBYQu7PRgYlII1kb7FxeBnRu7bEAwiDNPoZ9FRjsp8ZDsow-to4SYHgqvPDefnCZ1fv0I-30EkQ12H4sQBqEgFcOMt_mwnMkeR8df3bvWEERs-OiPK4AF8HGrv0s" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-vendor-blue p-3 rounded-full shadow-lg text-white"><Star size={24} fill="currentColor" /></div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">Reviews & Ratings</h3>
                    <p className="text-sm text-on-surface-variant">Respond to customer feedback and build your reputation as a trusted vendor.</p>
                  </div>
                  <button onClick={() => onAction('reviews')} className="w-full h-12 bg-vendor-blue text-white font-bold rounded-xl active:scale-95 transition-all">View Reviews</button>
                </div>
              </div>
            </section>
          </>
        ) : activeTab === 'Products' ? (
          <MyProductsList />
        ) : (
          <div className="flex flex-col items-center justify-center p-10 opacity-50 h-[60vh]">
            <Package size={64} className="mb-4" />
            <p className="text-xl font-bold">{activeTab} screen under maintenance</p>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-outline-variant px-5 pb-6 pt-3 flex justify-between">
        {[
          { label: 'Home', icon: Home },
          { label: 'Products', icon: Store },
          { label: 'Orders', icon: ClipboardCheck },
          { label: 'Profile', icon: User }
        ].map((item) => (
          <button 
            key={item.label}
            onClick={() => setActiveTab(item.label)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === item.label ? 'text-primary' : 'text-on-surface-variant'}`}
          >
            <item.icon size={24} fill={activeTab === item.label ? 'currentColor' : 'none'} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  const CustomerDashboard = () => (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 flex flex-col bg-surface border-b border-surface-container-high">
        <div className="flex items-center p-4 justify-between">
          <h2 className="text-2xl font-bold">Gokula-Health</h2>
          <div className="flex gap-2">
            <button onClick={() => onAction('find')} className="p-3 bg-surface-container rounded-full hover:bg-surface-container-high transition-colors">
              <Search size={24} />
            </button>
            <div className="size-12 rounded-full border-2 border-primary-container overflow-hidden">
              <User className="w-full h-full p-2" />
            </div>
          </div>
        </div>
        
        <div className="flex px-4 pb-4 gap-3 overflow-x-auto no-scrollbar whitespace-nowrap">
          {CATEGORIES.map(cat => (
            <button key={cat} className={`h-10 px-6 rounded-full font-bold text-sm transition-all ${cat === 'All' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}>
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="p-4 grid grid-cols-2 gap-4 pb-24">
        {MOCK_PRODUCTS.map(product => (
          <div key={product.id} className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm flex flex-col">
            <div className="aspect-[4/3] relative">
              <img src={product.imageUrl} className="w-full h-full object-cover" />
              {!product.inStock && (
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs font-black uppercase tracking-widest text-error px-2 py-1 bg-surface-container rounded-lg">Out of Stock</span>
                </div>
              )}
            </div>
            <div className="p-3 flex-1 flex flex-col gap-1">
              <h3 className="text-sm font-bold truncate leading-tight line-clamp-2">{product.name}</h3>
              <p className="text-tertiary-container font-black text-sm">₹{product.price.toLocaleString()}</p>
              <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="text-[10px] text-on-surface-variant truncate max-w-[80px]">{product.vendorName}</span>
                <div className="flex items-center gap-1">
                  <Star size={10} fill="#e7c365" className="text-tertiary" />
                  <span className="text-[10px] font-bold">{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-surface-container-high px-5 pb-6 pt-3 flex justify-between">
        {[
          { label: 'Home', icon: Home },
          { label: 'Search', icon: Search },
          { label: 'Orders', icon: ClipboardCheck },
          { label: 'Profile', icon: User }
        ].map((item) => (
          <button 
            key={item.label}
            onClick={() => setActiveTab(item.label)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === item.label ? 'text-primary' : 'text-on-surface-variant'}`}
          >
            <item.icon size={24} fill={activeTab === item.label ? 'currentColor' : 'none'} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  return isVendor ? <VendorDashboard /> : <CustomerDashboard />;
}
