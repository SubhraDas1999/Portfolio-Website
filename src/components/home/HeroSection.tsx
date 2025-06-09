
'use client';
import { Button } from "@/components/ui/button";
import { HERO_INFO } from "@/lib/constants";
import { Wand2, Sparkles } from "lucide-react"; // Updated imports
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center text-center bg-background text-foreground py-20 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-background.png"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          className="opacity-5"
          data-ai-hint="dark abstract"
          priority
        />
        <div className="absolute inset-0 bg-background opacity-70"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {HERO_INFO.profileImageUrl && (
          <div className="mb-8">
            <Image
              src={HERO_INFO.profileImageUrl}
              alt={HERO_INFO.name}
              width={160}
              height={160}
              className="rounded-full border-4 border-primary shadow-lg object-cover"
              priority
              data-ai-hint="profile photo"
            />
          </div>
        )}
        <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
          {HERO_INFO.name}
        </h1>
        <p className="mt-6 font-headline text-2xl sm:text-3xl md:text-4xl text-foreground/80">
          {HERO_INFO.title}
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/70">
          {HERO_INFO.subtitle}
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transform transition-transform hover:scale-105 shadow-lg">
            <Link href="#story">
              {HERO_INFO.cta}
              <Wand2 className="ml-2 h-5 w-5" /> {/* Changed icon */}
            </Link>
          </Button>
        </div>
      </div>
       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Sparkles className="h-8 w-8 text-primary" /> {/* Changed icon */}
      </div>
    </section>
  );
};

export default HeroSection;
