import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made by Chaguer Hicham
          {/* with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> */}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

