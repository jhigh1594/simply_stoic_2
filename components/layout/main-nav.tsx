"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { navItems } from '@/lib/constants/navigation';

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActiveRoute = (href: string) => {
    if (href === '/journal/morning') {
      return pathname?.startsWith('/journal');
    }
    return pathname === href;
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-semibold text-lg">
              Stoic Journal
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className={cn(
                      "gap-2",
                      isActiveRoute(item.href) && "bg-secondary"
                    )}
                    asChild
                  >
                    <Link href={item.href}>
                      <Icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-2 py-6">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Button
                        key={item.href}
                        variant="ghost"
                        className={cn(
                          "justify-start gap-2 w-full",
                          isActiveRoute(item.href) && "bg-secondary"
                        )}
                        asChild
                        onClick={() => setOpen(false)}
                      >
                        <Link href={item.href}>
                          <Icon className="h-4 w-4" />
                          {item.title}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}