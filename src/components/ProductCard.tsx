import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  view: 'grid' | 'list';
}

export function ProductCard({ product  }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:scale-[1.02]">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-muted-foreground">
            ${(product.price / 100).toFixed(2)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
