/**
 * Lingua color tokens.
 *
 * Single source of truth for every color in the app.
 * - tailwind.config.js reads these to generate classes (bg-lingua-purple, text-ink, ...)
 * - Import them directly where className isn't supported (SafeAreaView, StatusBar, icons).
 */

// Primary brand colors
export const brand = {
  purple: "#6C4EF5",
  deepPurple: "#5B3BF6",
  blue: "#4D8BFF",
  green: "#21C16B",
} as const;

// Semantic colors (feedback & gamification)
export const semantic = {
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",
} as const;

// Neutrals (text, borders, backgrounds)
export const neutral = {
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export const colors = {
  ...brand,
  ...semantic,
  ...neutral,
} as const;

export type ColorToken = keyof typeof colors;
