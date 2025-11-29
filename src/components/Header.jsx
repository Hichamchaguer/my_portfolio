import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-accent" />
          <span className="font-bold text-lg text-foreground">hchaguer</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition">
            Home
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition">
            Skills
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition">
            Projects
          </a>
          {/* <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition">
            Experience
          </a> */}
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <a href="#contact">
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90" 
            size="sm"
          >
            Contact Me
          </Button>
        </a>
      </div>
    </header>
  );
}
