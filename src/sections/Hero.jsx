import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Full-Stack Developer
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about building scalable and efficient cloud-native applications. Specializing in backend development and DevOps practices.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                size="lg"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Button> */}
              {/* <Button 
                variant="outline"
                size="lg"
                className="gap-2 border-border text-foreground hover:bg-card"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </Button> */}
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 bg-card flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <p className="text-sm text-muted-foreground">Profile Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
