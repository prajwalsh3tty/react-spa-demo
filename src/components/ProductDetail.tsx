import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-bold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-8">{product.description}</p>
          <button className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}