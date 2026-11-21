/**
 * Lingua typography tokens (Poppins).
 *
 * React Native can't pick a font weight from one family, so every
 * weight is its own font family. The names match the keys used to load
 * the fonts in src/constants/fonts.ts.
 */

export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

type FontWeightName = keyof typeof fontFamily;

type TextStyleToken = {
  fontSize: number;
  /** Line height in px (design multiplier x font size). */
  lineHeight: number;
  weight: FontWeightName;
};

/**
 * Type scale from the design system.
 * lineHeight = fontSize x design multiplier (1.2 / 1.3 / 1.4 / 1.6).
 */
export const typeScale = {
  h1: { fontSize: 32, lineHeight: 38.4, weight: "bold" }, // Page / Screen Title
  h2: { fontSize: 24, lineHeight: 31.2, weight: "semibold" }, // Section Title
  h3: { fontSize: 20, lineHeight: 26, weight: "semibold" }, // Card / Module Title
  h4: { fontSize: 16, lineHeight: 22.4, weight: "medium" }, // Subheading
  "body-lg": { fontSize: 16, lineHeight: 25.6, weight: "regular" }, // Important content
  "body-md": { fontSize: 14, lineHeight: 22.4, weight: "regular" }, // Body text
  "body-sm": { fontSize: 13, lineHeight: 20.8, weight: "regular" }, // Supporting text
  caption: { fontSize: 11, lineHeight: 15.4, weight: "regular" }, // Labels, meta text
} as const satisfies Record<string, TextStyleToken>;

export type TypeScaleToken = keyof typeof typeScale;
