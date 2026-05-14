// Design tokens — keep in sync with Figma variables
// Update these values to match your Figma token names

export const colors = {
  // Add your color tokens here
  // e.g. primary: { 50: "#f0f9ff", 500: "#0ea5e9", 900: "#0c4a6e" },
} as const;

export const spacing = {
  // Add your spacing scale here
  // e.g. 1: "4px", 2: "8px", 4: "16px", 8: "32px"
} as const;

export const typography = {
  // Add your type scale here
  fontFamily: {
    // e.g. sans: "'Inter', sans-serif"
  },
  fontSize: {
    // e.g. sm: "14px", base: "16px", lg: "18px"
  },
} as const;

export const borderRadius = {
  // e.g. sm: "4px", md: "8px", full: "9999px"
} as const;
