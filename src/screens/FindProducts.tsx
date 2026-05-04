import { useState } from 'react';
import { ArrowLeft, Search, X, Star, Plus, SlidersHorizontal } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

interface FindProductsProps {
  onBack: () => void;
}

export default function FindProducts({ onBack }: FindProductsProps) {
  const [searchQuery, setSearchQuery] = useState('Herbal Tea');

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background overflow-x-hidden">
      <header className="sticky top-0 z-10 bg-surface px-5 pt-6 pb-2 border-b border-surface-container-high">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack} className="text-on-surface flex size-10 items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold flex-1">Find Health Products</h1>
        </div>
        
        <div className="relative w-full mb-4">
          <label className="flex h-14 w-full items-center gap-3 rounded-2xl bg-surface-container-high px-4 ring-1 ring-outline-variant focus-within:ring-2 focus-within:ring-primary transition-all">
            <Search className="text-on-surface-variant" size={20} />
            <input 
              autoFocus
              className="flex-1 bg-transparent border-none focus:ring-0 text-lg outline-none placeholder:text-on-surface-variant" 
              placeholder="Search supplements, tea, oils..." 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </label>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar whitespace-nowrap">
          {['Category', 'Price Range', 'Rating'].map(filter => (
            <button key={filter} className="flex items-center gap-2 rounded-xl border border-outline bg-surface-container-lowest px-4 py-2 hover:bg-surface-container-low transition-all shadow-sm active:shadow-none">
              <span className="text-sm font-bold text-on-surface">{filter}</span>
              <ChevronDown size={16} className="text-on-surface" />
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">34 Results found</p>
          <button className="flex items-center gap-2 text-primary font-bold text-sm">
            <SlidersHorizontal size={16} />
            <span>Relevance</span>
          </button>
        </div>

        <div className="flex flex-col gap-4 pb-10">
          {MOCK_PRODUCTS.map(product => (
            <div key={product.id} className="flex gap-4 bg-surface-container-lowest border border-outline-variant/30 p-2 rounded-2xl hover:shadow-md transition-shadow group">
              <div className="h-24 w-24 flex-shrink-0 bg-surface-container overflow-hidden rounded-xl">
                <img src={product.imageUrl} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div>
                  <h3 className="text-base font-bold text-on-surface line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-on-surface-variant font-medium">{product.vendorName}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={14} fill="#FFD700" className="text-[#FFD700]" />
                    <span className="text-[11px] font-black text-on-surface">{product.rating} ({product.reviewsCount} reviews)</span>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-xl text-primary font-black">₹{product.price.toLocaleString()}</p>
                  <button className="bg-primary text-on-primary h-10 w-10 flex items-center justify-center rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function ChevronDown({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
