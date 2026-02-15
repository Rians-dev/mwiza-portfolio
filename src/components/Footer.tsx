import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-lg font-bold text-primary">Mwiza Nyirenda</span>
            <span className="text-sm text-muted-foreground">| Registered Nurse</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mwiza Nyirenda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
