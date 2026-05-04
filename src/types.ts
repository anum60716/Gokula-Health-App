export type Role = 'vendor' | 'customer';

export type Screen = 
  | 'splash' 
  | 'role-selection' 
  | 'phone-entry' 
  | 'verify-otp' 
  | 'profile-setup' 
  | 'dashboard'
  | 'find-products'
  | 'product-details'
  | 'upload-product'
  | 'reviews';

export interface UserProfile {
  fullName: string;
  location: string;
  businessName?: string;
  whatsappNumber?: string;
  role: Role;
  photoUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  vendorName: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
}
