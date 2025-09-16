import { Variants } from "framer-motion";

// Fade in from bottom
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }  // <-- transition inside animate
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.5 }  // <-- transition inside exit
  },
};

// Scale up animation
export const scaleUp: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.4 } 
  },
  exit: { 
    scale: 0.95, 
    opacity: 0, 
    transition: { duration: 0.4 } 
  },
};

// Stagger children
export const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Hover and tap effects
export const hoverGrow: Variants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};
