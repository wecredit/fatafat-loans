import { Button } from "@/components/ui/button";

const MobileStickyButton = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-card/90 backdrop-blur-lg border-t border-border">
    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-cta font-semibold rounded-full py-5 text-base">
      Apply Now
    </Button>
  </div>
);

export default MobileStickyButton;
