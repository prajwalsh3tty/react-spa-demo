import { Link } from 'react-router-dom';
//import { Button } from '@/components/ui/button';
 import { ThemeToggle } from '@/components/theme-toggle';
import { ShoppingBag } from 'lucide-react';
//import {
//  NavigationMenu,
//  NavigationMenuItem,
//  NavigationMenuLink,
//  NavigationMenuList,
//  navigationMenuTriggerStyle,
//} from '@/components/ui/navigation-menu';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          <ShoppingBag className="mx-auto h-10 w-10 text-primary" />
        </Link>
        <div className="flex items-center gap-2">
           <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
