import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, Wheat } from 'lucide-react';
import { Role } from '../types';

interface PhoneEntryProps {
  onBack: () => void;
  onSend: (phoneNumber: string) => void;
  role: Role;
}

export default function PhoneEntry({ onBack, onSend, role }: PhoneEntryProps) {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <header className="flex items-center px-5 h-16 bg-surface">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-surface-container-highest transition-colors">
          <ArrowLeft className="text-on-surface" size={24} />
        </button>
        <div className="ml-4">
          <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center overflow-hidden">
            <Wheat className="text-on-primary-container w-5 h-5" />
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-start w-full">
        <div className="w-full bg-surface-container min-h-[218px] bg-center bg-cover" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-D1JgQTXC3wADqIJprF3ntfqEAMER2oVoN0kS6EUqrOazG4DzDcZ2DYHuYn8WMMAQcM8nRiHwQQc-YE34hiY9Myw9dfdSceb6Gz4El8V2t3yyue-F6qNoqs87dukShChfXUUKqh1gi5UScnYgyV69Ca8h57gRVIVKY-5W4giy1zrxrmrshe_J4EXeha9CkcxvMPIFScnmR9MAVtKOX2UHJdlW2hXgV_rAgSmWd6PSkWpLDQiAuTYjApQYr1dcQeMZQd3eXUxWyiQ")' }}
        />
        
        <h2 className="text-on-surface tracking-tight text-3xl font-bold leading-tight px-4 text-center pb-3 pt-5">
          Enter Your Phone Number
        </h2>

        <div className="flex flex-col gap-4 px-4 py-3 w-full">
          <label className="flex flex-col w-full">
            <p className="text-on-surface text-base font-medium leading-normal pb-2">Phone Number</p>
            <div className="flex w-full items-stretch rounded-xl shadow-sm border border-outline-variant overflow-hidden bg-surface-container-low group focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
              <div className="flex items-center justify-center px-4 bg-surface-container-low text-on-surface-variant font-semibold">
                +91
              </div>
              <input 
                autoFocus
                className="flex w-full min-w-0 flex-1 bg-background h-14 outline-none text-on-surface px-4 text-lg font-medium border-l border-outline-variant"
                maxLength={10} 
                pattern="[0-9]*" 
                placeholder="10-digit number" 
                type="tel" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
              />
            </div>
          </label>
        </div>

        <div className="flex px-4 py-3 w-full">
          <button 
            disabled={phoneNumber.length !== 10}
            onClick={() => onSend(phoneNumber)}
            className={`flex w-full cursor-pointer items-center justify-center rounded-2xl h-14 px-5 text-on-primary text-lg font-bold shadow-md transition-all active:scale-[0.98] ${
              role === 'vendor' ? 'bg-vendor-green' : 'bg-customer-blue'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Send OTP
          </button>
        </div>

        <p className="text-on-surface-variant text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
          We will send a 6-digit OTP to verify your number.
        </p>

        <div className="fixed bottom-6 right-6 z-50">
          <button className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
            <MessageSquare size={24} fill="currentColor" />
          </button>
        </div>
      </main>
    </div>
  );
}
