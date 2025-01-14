export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with active noise cancellation, premium sound quality, and comfortable fit for all-day wear.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    description: "Advanced smartwatch with health tracking, notifications, and a beautiful OLED display. Water-resistant and long battery life.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
  },
  {
    id: 3,
    name: "Professional Camera Kit",
    description: "Professional-grade mirrorless camera with 4K video capability, advanced autofocus, and a versatile kit lens.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800"
  },
  {
    id: 4,
    name: "Minimalist Backpack",
    description: "Stylish and functional backpack with laptop compartment, water-resistant material, and multiple organization pockets.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    description: "Ultra-responsive wireless gaming mouse with RGB lighting, programmable buttons, and long battery life.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800"
  },
  {
    id: 6,
    name: "Smart Home Speaker",
    description: "Premium smart speaker with voice control, room-filling sound, and seamless integration with your smart home devices.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800"
  }
];