import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Item = { name: string; description?: string; price: string };

const MenuPage: React.FC = () => {
  const items: Item[] = [
    { name: 'Espresso', price: '$2.50' },
    { name: 'Americano', price: '$3.00' },
    { name: 'Latte', price: '$4.50' },
    { name: 'Cappuccino', price: '$4.25' },
    { name: 'Flat White', price: '$4.75' },
    { name: 'Mocha', price: '$4.95' },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold mb-4">Our Menu</h1>
        <p className="text-foreground/70 mb-6">Sip, savor, and enjoy our carefully crafted selection.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.name} className="border rounded-md p-4 hover:shadow-lg">
              <div className="font-semibold mb-1">{it.name}</div>
              <div className="text-sm text-foreground/70">{it.description ?? 'House selected beans'}</div>
              <div className="mt-2 font-medium">{it.price}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
