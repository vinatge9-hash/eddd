import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background/60">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Brewed with Love</h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-6">Small-batch coffees, warm ambience, and the friendliest baristas in town.</p>
        <Link to="/menu">
          <Button>View Menu</Button>
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-yellow-400 to-rose-500 opacity-20 filter blur-2xl" aria-label="decor" />
    </section>
  );
}
