import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t mt-20 py-6 bg-background/95">
      <div className="container mx-auto px-4 text-sm text-foreground/60 flex flex-col md:flex-row justify-between items-center">
        <span>© {new Date().getFullYear()} Cozy Cup Coffee. All rights reserved.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
