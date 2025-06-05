'use client';
import { Button } from "@/components/ui/button";
import { HERO_INFO } from "@/lib/constants";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center bg-gradient-to-br from-primary via-primary/90 to-background text-primary-foreground py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
          data-ai-hint="abstract geometric"
        />
        <div className="absolute inset-0 bg-primary opacity-60"></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          {HERO_INFO.name}
        </h1>
        <p className="mt-6 font-headline text-2xl sm:text-3xl md:text-4xl text-primary-foreground/80">
          {HERO_INFO.title}
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-primary-foreground/70">
          {HERO_INFO.subtitle}
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transform transition-transform hover:scale-105 shadow-lg">
            <Link href="#story">
              {HERO_INFO.cta}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;
