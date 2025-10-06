import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold mb-4">About Cozy Cup</h1>
        <p className="text-lg text-foreground/70 leading-relaxed">
          Cozy Cup is a neighborhood coffee shop dedicated to serving ethically sourced, freshly brewed coffee in a welcoming space. We roast in small batches and partner with local farms to bring you the best flavors with a story in every cup.
        </p>
        <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
          From pour-overs to cold brews, our menu is crafted to highlight seasonal beans and comfort across all tastes. Come for the coffee, stay for the conversation.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
