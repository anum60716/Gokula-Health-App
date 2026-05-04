import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Premium Holstein Heifer",
    category: "Cattle",
    price: 85000,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMbFbgJJkB00gcQgUzJ7nYgxJ0fEAadqt5SNzOKYo1yaPTKxGxlOhryufuqREBoICsPwXBJ9wh3Pg4yFbL7wAf8Dt6Y0lPVFu9JZrxrWuKenfwy-SksHRQrTxZGQQCs0jXif4i_NJzHYKANtnQvwxi_NYNsFeUvO2kJuABkv2ARqnTuRCOCi5Rc84acQekCapAzt8RleSaNMFKUrrd88jwEQkOfWcMJt_r7-5bIlN1iHRLeGcy4AB4Fbj0zY5E2DoDcVi5wHwN1eY",
    vendorName: "Shanti Livestock Farm",
    rating: 4.8,
    reviewsCount: 120,
    inStock: true
  },
  {
    id: '2',
    name: "Organic Kadaknath Poultry",
    category: "Poultry",
    price: 1200,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF7qN-x6Qck79VC4HPw7ercnPamLlJ-2uWo34nrzdSRAIbdiSS7Z6hx9GrKk8MHK3HXgmuQEB4xfs99zeVmwGvQD2nt6c1OwmrM-k_GwrqcIkRpRfurwrEp6vdoYGQkPvtRewJG7cOkuzHc1XpdjbcRGsJC_zkpG-sVhXnpMiURJcfDYxmivTJlvIqgwDIq8OQkuWQXprSLFSdGl2boS0aXCbbRTPXErlHFcmV0CZaQU13PJOyid0aVUQ4NzrDnuoNZMwUipcPNbc",
    vendorName: "Gokula Nutrients",
    rating: 4.5,
    reviewsCount: 85,
    inStock: false
  },
  {
    id: '3',
    name: "Boer Breeding Buck",
    category: "Goats",
    price: 22500,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUTeeziiuFm3srbVS6JX8woLvbVQT7Pxc667yoXMinnuZKvHn94-2Ta6RLjpAcKeTrTpYiVfA8IJ4YepLFlABJ5YMB2m7fs0Ek1EiYVoK5SV1yb0jCSbjy6CoJqZMV4TrzbCzATKGP-ApEhMaxciFFmw9kAY22v3yWyMtCv1UX1_PokZ66-wQjUYAyiwn4JboFuugIkQvYK1aZpnbCMKKn5uI4SZlOYWMLseA60nZK4PtOC4SJBBngEGEiHU0NzIZvp2ZcG6rOzcQ",
    vendorName: "Rural Pure Extracts",
    rating: 4.9,
    reviewsCount: 210,
    inStock: true
  },
  {
    id: '4',
    name: "Premium Merino Ewe",
    category: "Sheep",
    price: 15000,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1am_o98OJPyrxrRdbZBwOhW4vtd4EtbXzTByENlkuNOJph3pwvxuqJY8n7Ho6mIQiz3wkRtxo2PP2YsiO687PEYrvQRxa0BCBhYqOda57EAn1hQOYLyAYVH3UFvY-yJGza2xwwcpHwxTYodPsb_Jr4w3gHmyN9-ilbTMcHpowd5i2AND-84jd5KgCF9a5W7dfEkPRrqJLhnvMs21Yge-dkgDbmYCgXzQCwAt5QpJMSEzBy6A2eOEcaXcZnSI_cTmYOaybB-tE7KY",
    vendorName: "BeeKeeper Collective",
    rating: 4.7,
    reviewsCount: 54,
    inStock: true
  }
];

export const CATEGORIES = ["All", "Cattle", "Poultry", "Goats", "Sheep", "Feed", "Medicine", "Equipment", "Dairy"];
