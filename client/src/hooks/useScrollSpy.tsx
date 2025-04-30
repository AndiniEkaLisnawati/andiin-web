import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the section that is currently in view
      const section = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -Infinity, bottom: -Infinity };
          
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = rect.bottom + window.scrollY;
          
          return { id, top, bottom };
        })
        .find(({ top, bottom }) => scrollPosition >= top && scrollPosition < bottom);

      if (section) {
        setActiveId(section.id);
      } else if (scrollPosition <= 0) {
        // If we're at the top of the page, set the first section as active
        setActiveId(ids[0]);
      } else if (window.innerHeight + scrollPosition >= document.body.scrollHeight - 10) {
        // If we're at the bottom of the page, set the last section as active
        setActiveId(ids[ids.length - 1]);
      }
    };

    // Call once on mount
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids, offset]);

  return activeId;
}
