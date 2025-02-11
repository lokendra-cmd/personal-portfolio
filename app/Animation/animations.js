// animations.js
export const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },  // Start below and hidden
    visible: { opacity: 1, y: 0 },   // Fade in to normal position
    exit: { opacity: 0, y: -50 },    // Exit upwards and fade out
  };
  
  export const fadeOutToTop = {
    hidden: { opacity: 0, y: -50 },  // Start above and hidden
    visible: { opacity: 1, y: 0 },   // Fade in to normal position
    exit: { opacity: 0, y: 50 },     // Exit downwards and fade out
  };
  