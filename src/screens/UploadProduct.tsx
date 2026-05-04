import { ArrowLeft, Image as ImageIcon, Plus, MapPin, UploadCloud } from 'lucide-react';

interface UploadProductProps {
  onBack: () => void;
  onUpload: () => void;
}

export default function UploadProduct({ onBack, onUpload }: UploadProductProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf9fb]">
      <header className="flex items-center px-4 h-16 bg-[#faf9fb] sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-surface-container transition-colors">
          <ArrowLeft className="text-[#131217]" size={24} />
        </button>
        <h2 className="text-[#131217] text-lg font-bold ml-2">Upload New Product</h2>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="px-5 py-4">
          <h3 className="text-[#131217] text-lg font-bold mb-4">Product Images</h3>
          
          <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden mb-4 shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbv72iObKzrv6NOw_bVyAwxoSK-6iTKp3p9HNoZq6xyQuvPsUKicXWybkKyCGMlSm9FM2Rn8adl4jvWUB4Gfc5uPC7IvGeHB6Zyek-7EQsnx95FS7XyMoj5HM6eMPTkFoZc9-AsZ6N0fAE5nByHXKI3rKoIE7wm0eUUZQCHkGMVd3RaESO5GtvNFS6L4DMf68ec3vio-P4_uFNwrnw4peOkEJQEZTiYS9-qt8TgImN2MMlMSiwlGApdW4HKOq8Y_v2YPuUYWcLOH8" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBHmLaLH9Zie6A0zfObGaPtwayGF96Djxkspucx66Ko0s2wlaocuMDV2Lf8_-rRM6q6dJnIkaGoExQcaxpCCR34Hxhl-O-1kGEAx2sHFCvhwB9NJFdERmLX1W-JRNJsdrJTwB4qow6rbF3T5WWz5EsAGvuHyBcuu5OgCtEBTbphf9QI9GYniOBRVh9D_Egrz6lJqPd-reg-Or6556L__zTHTRGf_3lhRbarHXlZlssmsg2QDC_8FzPcq5WJXF4xF0Fdb2wtshRvMPg",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuA88IPyp3Qf43a-Nw13qPkAK6XGE_F1dAyAjppJjti4r2GQoNz2Y9WzhAq0dIdvf1b6BudQDNPlL9maxo156Q9KvgspysOgWIarFkAI_qoMyTNzJ337gRqfCydgfZ5kiM2ZrxPOAIKgUNWvuOemzr6G3B8mZTxFRkpcn8-Flly7KC9uopVuJZBkZLfnhLBGqhG_NSLI7TSD3hWf29NwWe3aNYtT_V62cLf0V_MRbjoPAspQ6AoNbccRTyT4bv5kpLCFgbXwIFjTFBo"
            ].map((img, i) => (
              <div key={i} className="size-20 shrink-0 rounded-xl overflow-hidden border border-outline-variant">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="size-20 shrink-0 border-2 border-dashed border-outline-variant rounded-xl flex items-center justify-center text-outline-variant hover:bg-surface-container transition-all cursor-pointer">
              <Plus size={32} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#131217] font-semibold">Product Name</label>
              <input className="w-full h-14 px-4 rounded-xl border border-outline-variant bg-white outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Sahiwal Breeding Bull" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#131217] font-semibold">Category</label>
              <select className="w-full h-14 px-4 rounded-xl border border-outline-variant bg-white outline-none focus:ring-2 focus:ring-primary appearance-none">
                <option>Select category</option>
                <option>Cattle</option>
                <option>Feed</option>
                <option>Medicine</option>
                <option>Equipment</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-on-surface font-semibold">Price (₹)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">₹</span>
                <input className="w-full h-14 pl-10 pr-4 rounded-xl border border-outline-variant bg-surface-bright focus:ring-2 focus:ring-primary outline-none" placeholder="0.00" type="number" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-on-surface font-semibold">Description</label>
              <textarea className="w-full p-4 rounded-xl border border-outline-variant bg-surface-bright focus:ring-2 focus:ring-primary outline-none min-h-[120px]" placeholder="Describe the product health, age, or specifications..." />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-on-surface font-semibold text-base">Origin / Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
                <input className="w-full h-14 pl-12 pr-4 rounded-xl border border-outline-variant bg-surface-bright focus:ring-2 focus:ring-primary outline-none" placeholder="City, State" />
              </div>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <p className="font-bold">In Stock</p>
                <p className="text-xs text-on-surface-variant">Product is currently available</p>
              </div>
              <div className="w-12 h-6 bg-vendor-green rounded-full relative">
                <div className="absolute right-1 top-1 size-4 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-24" />
      </main>

      <div className="p-5 border-t border-outline-variant bg-white sticky bottom-0">
        <button onClick={onUpload} className="w-full h-14 bg-vendor-green text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all">
          <UploadCloud size={20} />
          <span>Upload Product</span>
        </button>
      </div>
    </div>
  );
}
