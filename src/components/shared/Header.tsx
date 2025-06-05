
import Link from 'next/link';
import { NAV_LINKS, FOOTER_INFO, HERO_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggleButton } from './ThemeToggleButton';


const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" aria-label={`${HERO_INFO.name} homepage`}>
           <span className="text-3xl" role="img" aria-label="Man raising hand emoji logo">🙋🏻‍♂️</span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground/90 transition-colors hover:text-primary py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-1">
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {FOOTER_INFO.socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild className="h-8 w-8">
                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5 text-foreground/70 hover:text-primary" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
          {/* Theme Toggle Button - Desktop */}
          <div className="hidden md:block">
            <ThemeToggleButton />
          </div>
        </div>
        

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggleButton />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col h-full">
                <nav className="flex flex-col space-y-4 mt-8 flex-grow">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                {/* Social Icons - Mobile */}
                <div className="py-6 border-t border-border/40">
                  <div className="flex justify-center space-x-4">
                    {FOOTER_INFO.socialLinks.map((link) => (
                      <Button key={link.name} variant="ghost" size="icon" asChild>
                        <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                          <link.icon className="h-6 w-6 text-foreground/70 hover:text-primary" />
                          <span className="sr-only">{link.name}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
