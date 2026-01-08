import neothermLogo from "@/assets/neotherm-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6] border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img 
            src={neothermLogo} 
            alt="NeoTherm Logo" 
            className="h-10 w-auto"
          />
          
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} NeoNatal. Caring for the smallest lives.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
