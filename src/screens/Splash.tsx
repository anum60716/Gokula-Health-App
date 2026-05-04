import { motion } from 'motion/react';
import { PawPrint, ShoppingCart } from 'lucide-react';

export default function Splash() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-surface-container-lowest">
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-primary/10 to-transparent"></div>
      
      <div className="flex flex-col items-center justify-center grow z-10 px-5 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex items-center justify-center"
        >
          <div className="relative w-32 h-32 rounded-full bg-surface-container-highest flex items-center justify-center shadow-md border-4 border-surface-container-lowest">
            <PawPrint className="text-primary w-16 h-16" />
            <div className="absolute bottom-1 right-1 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg border-2 border-surface-container-lowest">
              <ShoppingCart className="text-on-primary w-6 h-6" />
            </div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-primary text-2xl font-bold mb-2"
        >
          Gokula-Health Marketplace
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-on-surface-variant text-lg"
        >
          Connecting Farmers & Buyers
        </motion.p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-12 h-12 border-3 border-transparent border-t-inverse-primary rounded-full"
          />
          <span className="text-sm font-medium text-outline">Checking marketplace updates...</span>
        </div>
      </div>

      <div className="w-full max-w-md pb-8 px-5 z-10">
        <div className="flex flex-col gap-3">
          <div className="rounded-full bg-surface-container-highest overflow-hidden h-1">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 2 }}
              className="h-full rounded-full bg-primary" 
            />
          </div>
          <p className="text-center text-[11px] font-medium text-outline-variant uppercase tracking-widest">
            Rural Professionalism · v1.0.4
          </p>
        </div>
      </div>
    </div>
  );
}
