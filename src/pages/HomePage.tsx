import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const MenuPreviewCard = ({ name, price }: { name: string; price: string }) => (
  <div className="border rounded-md p-4 hover:shadow-lg transition-shadow">
    <div className="text-lg font-semibold mb-1">{name}</div>
    <div className="text-sm text-foreground/70">{price}</div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section className="container mx-auto px-4 py-16" aria-label="seasonal-picks">
          <h2 className="text-2xl font-semibold mb-6">Seasonal Picks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Vanilla Latte', price: '$4.50' },
              { name: 'Caramel Macchiato', price: '$4.75' },
              { name: 'Hazelnut Cappuccino', price: '$4.25' },
            ].map((i) => (
              <MenuPreviewCard key={i.name} name={i.name} price={i.price} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/menu"><button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">See Full Menu</button></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
