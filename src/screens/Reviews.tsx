import { ArrowLeft, Share2, Star, ThumbsUp, MessageCircle, Filter, Edit3, Home, ShoppingBag, User } from 'lucide-react';

interface ReviewsProps {
  onBack: () => void;
}

export default function Reviews({ onBack }: ReviewsProps) {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      date: "Oct 12, 2023",
      product: "Angus Bull 'Titan'",
      rating: 5,
      content: "Excellent service and top-quality livestock. Titan arrived healthy and exceeded expectations. The health certification was thorough and professional.",
      likes: 24,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe0v_855xQnlVSKEKXMeeL9ulqmqqkpPgX36LxpSIQO648EJtf-wc1jdLOXHkx-C2PYT6huQ5QErsWMjGKt9uObgpIzUcXGNV4BLuDj-X-scKUtcMINnO7MuYKeDqNPt75_wEmX68PVH5ygvqHi-R3BWPP7lpB1qEVCudYFcoeh9YC5TOH2x9LTXX2Z64SawUtnlLkUxPSmprnT2UKk1Dvd8GjsoPF2TZlCsrIpxSEv2sEyWFCFv8kfj9f_y5BHato7Gr0jaxGwWA"
    },
    {
      id: 2,
      name: "Michael Chen",
      date: "Oct 05, 2023",
      product: "Suffolk Ewes (Batch of 5)",
      rating: 4,
      content: "The delivery was prompt and the vendor was responsive to my inquiries. The ewes are in great condition. Highly recommend for any livestock needs.",
      likes: 12,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzOYtcKgmDS8k73ZtzY1LXehXpWHzGwL_eKCzwMSTPWhbZKe4wqiFXBxYYpDniGOLiNwaKtFTzLswdPJDfT22K651Re9BsBhACT_o5i6vAqHlJ4yJqhzUpOtIHNp6JJbnhkiwhXId2by1CIHn_IGFusq1w21_av8ebG5LAZwDl2FXL_s8TXa6v6A8DwZ7K0aXiHtY4RN08A6_GaoleMRyPUYeBakX6Jbwqe6W0cTdAwcoKB2z0j51YDUBekI5pL7CEhZREZLPWQkQ"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex items-center bg-surface-container-lowest px-5 py-4 border-b border-outline-variant sticky top-0 z-10">
        <button onClick={onBack} className="text-on-surface flex size-12 shrink-0 items-center justify-center hover:bg-surface-container rounded-full">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-black flex-1 text-center">Reviews & Ratings</h2>
        <button className="flex size-12 items-center justify-center text-on-surface hover:bg-surface-container rounded-full">
          <Share2 size={24} />
        </button>
      </header>

      <main className="flex flex-col flex-1 overflow-y-auto pb-32">
        <section className="bg-surface-container-low p-5">
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex flex-col gap-1">
              <p className="text-5xl font-black text-on-surface">4.2</p>
              <div className="flex gap-1 text-star-gold">
                {[1,2,3,4].map(i => <Star key={i} size={18} fill="currentColor" />)}
                <Star size={18} />
              </div>
              <p className="text-on-surface-variant text-sm mt-1 font-bold">1,248 reviews</p>
            </div>
            
            <div className="flex-1 space-y-2 min-w-[180px]">
              {[
                { star: 5, pc: 40 },
                { star: 4, pc: 30 },
                { star: 3, pc: 15 },
                { star: 2, pc: 10 },
                { star: 1, pc: 5 }
              ].map(row => (
                <div key={row.star} className="flex items-center gap-3">
                  <span className="text-xs font-bold w-3">{row.star}</span>
                  <div className="flex-1 h-2 bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-vendor-green" style={{ width: `${row.pc}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-on-surface-variant w-8 text-right">{row.pc}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="p-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black">Recent Reviews</h3>
            <button className="text-vendor-green font-black flex items-center gap-1 text-sm bg-vendor-green/10 px-3 py-1.5 rounded-full">
              Filter <Filter size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {reviews.map(review => (
              <div key={review.id} className="flex flex-col gap-4 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/30 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full border-2 border-vendor-green overflow-hidden">
                    <img src={review.avatar} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-black text-lg">{review.name}</p>
                    <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">{review.date}</p>
                  </div>
                </div>

                <div className="bg-vendor-green/10 px-3 py-1 rounded-full self-start">
                  <p className="text-vendor-green text-[10px] font-black uppercase tracking-widest">Product: {review.product}</p>
                </div>

                <div className="flex gap-1 text-star-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
                  ))}
                </div>

                <p className="text-on-surface italic leading-relaxed font-medium">"{review.content}"</p>

                <div className="flex gap-6 mt-1">
                  <button className="flex items-center gap-2 text-on-surface-variant hover:text-vendor-green transition-colors">
                    <ThumbsUp size={18} />
                    <span className="text-sm font-black">{review.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-on-surface-variant hover:text-vendor-blue transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-sm font-black">Reply</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-background border-t border-outline-variant max-w-md mx-auto">
        <button className="w-full h-14 bg-vendor-green text-on-primary rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl transform active:scale-[0.98] transition-all">
          <Edit3 size={24} />
          <span>Write a Review</span>
        </button>
      </div>
    </div>
  );
}
