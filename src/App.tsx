import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen, Role, UserProfile } from './types';
import Splash from './screens/Splash';
import RoleSelection from './screens/RoleSelection';
import PhoneEntry from './screens/PhoneEntry';
import VerifyOTP from './screens/VerifyOTP';
import ProfileSetup from './screens/ProfileSetup';
import Dashboard from './screens/Dashboard';
import FindProducts from './screens/FindProducts';
import UploadProduct from './screens/UploadProduct';
import Reviews from './screens/Reviews';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [role, setRole] = useState<Role | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => setCurrentScreen('role-selection'), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const navigate = (screen: Screen) => setCurrentScreen(screen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <Splash />;
      case 'role-selection':
        return <RoleSelection onSelect={(r) => { setRole(r); navigate('phone-entry'); }} />;
      case 'phone-entry':
        return <PhoneEntry 
          onBack={() => navigate('role-selection')} 
          onSend={(num) => { setPhoneNumber(num); navigate('verify-otp'); }} 
          role={role!}
        />;
      case 'verify-otp':
        return <VerifyOTP 
          onBack={() => navigate('phone-entry')} 
          onVerify={() => navigate('profile-setup')} 
          phoneNumber={phoneNumber}
          role={role!}
        />;
      case 'profile-setup':
        return <ProfileSetup 
          role={role!} 
          onBack={() => navigate('verify-otp')}
          onComplete={(p) => { setProfile(p); navigate('dashboard'); }} 
        />;
      case 'dashboard':
        return <Dashboard 
          profile={profile!} 
          onAction={(action) => {
            if (action === 'upload') navigate('upload-product');
            if (action === 'find') navigate('find-products');
            if (action === 'reviews') navigate('reviews');
          }}
        />;
      case 'find-products':
        return <FindProducts onBack={() => navigate('dashboard')} />;
      case 'upload-product':
        return <UploadProduct onBack={() => navigate('dashboard')} onUpload={() => navigate('dashboard')} />;
      case 'reviews':
        return <Reviews onBack={() => navigate('dashboard')} />;
      default:
        return <Splash />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface max-w-md mx-auto relative overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
