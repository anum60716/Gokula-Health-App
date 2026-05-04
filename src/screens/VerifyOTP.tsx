import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { Role } from '../types';

interface VerifyOTPProps {
  onBack: () => void;
  onVerify: () => void;
  phoneNumber: string;
  role: Role;
}

export default function VerifyOTP({ onBack, onVerify, phoneNumber, role }: VerifyOTPProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus move
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every(v => v !== '');

  return (
    <div className="bg-surface text-on-surface flex flex-col min-h-screen">
      <div className="flex items-center p-4">
        <button onClick={onBack} className="size-12 flex items-center justify-center text-on-surface rounded-full hover:bg-surface-container">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex flex-col px-6 pt-2">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Verify OTP</h1>
        <p className="text-lg text-on-surface-variant font-medium">
          Enter the 6-digit code sent to +91 {phoneNumber.slice(0, 2)}XXXXXXXX
        </p>
      </div>

      <div className="mt-12 px-6">
        <div className="flex justify-between gap-2 max-w-sm mx-auto">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputs.current[i] = el)}
              className="w-12 h-14 text-center text-2xl font-bold border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary rounded-xl bg-surface-container-low outline-none transition-all"
              maxLength={1}
              type="text"
              inputMode="numeric"
              value={digit}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onChange={(e) => handleChange(i, e.target.value)}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 px-6 mb-8">
        <button 
          disabled={!isComplete}
          onClick={onVerify}
          className={`w-full h-14 rounded-2xl text-lg font-bold shadow-md transition-all active:scale-[0.98] ${
            role === 'vendor' ? 'bg-vendor-green' : 'bg-customer-blue'
          } text-white disabled:opacity-50`}
        >
          Verify
        </button>
      </div>

      <div className="text-center px-6">
        <p className="text-base text-on-surface-variant mb-6">
          Didn't receive OTP? <span className={`font-semibold cursor-pointer ${timer === 0 ? 'text-primary' : 'text-outline opacity-50 cursor-not-allowed'}`}>Resend</span>
        </p>
        
        <div className="flex justify-center gap-4">
          <div className="flex flex-col items-center">
            <div className="size-14 bg-surface-container-high rounded-xl flex items-center justify-center text-2xl font-bold shadow-sm">
              00
            </div>
            <span className="text-[11px] mt-2 uppercase tracking-wider text-on-surface-variant font-bold">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="size-14 bg-surface-container-high rounded-xl flex items-center justify-center text-2xl font-bold shadow-sm">
              {timer.toString().padStart(2, '0')}
            </div>
            <span className="text-[11px] mt-2 uppercase tracking-wider text-on-surface-variant font-bold">Seconds</span>
          </div>
        </div>
      </div>

      <div className="mt-auto p-8 flex justify-center opacity-10">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 bg-primary-container rounded-full blur-3xl"></div>
          <img 
            alt="Security" 
            className="w-full h-full object-contain mix-blend-screen" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUCKh7lXr3uopjw-pX1nYWArRxR0rMcVvhRzxvPzzrjSx6b72Zyp6LOZFzcpO_02UM0REIUCF13E8L7dXTftrb3VcNBygQLdKiiJe8GIXMrA98rBOiDPbGkdp_PxewFPN5xo-oCrOiJW4o7ABqTTaRlCK3HDZemtmXaiGNd5zXEtCSYj_IaEsybJMl25eWDVFXK_DJD8aVAnYul6ZZAN_mjYnFEASGsvgeGXsMB045CiHlg4bYXS-BfAOzGRiGpZ7yjEDdSuhFnk0"
          />
        </div>
      </div>
    </div>
  );
}
