// Design tokens live in src/theme (TypeScript). Tailwind loads them via jiti.
const { brand, semantic, neutral } = require("./src/theme/colors.ts");
const { fontFamily, typeScale } = require("./src/theme/typography.ts");

// typeScale -> { h1: ["32px", { lineHeight: "38.4px" }], ... }  => text-h1, text-body-md, ...
const fontSize = Object.fromEntries(
  Object.entries(typeScale).map(([name, style]) => [
    name,
    [`${style.fontSize}px`, { lineHeight: `${style.lineHeight}px` }],
  ]),
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Primary: bg-lingua-purple, bg-lingua-deep-purple, bg-lingua-blue, bg-lingua-green
        lingua: {
          purple: brand.purple,
          "deep-purple": brand.deepPurple,
          blue: brand.blue,
          green: brand.green,
        },
        // Semantic: bg-success, text-error, bg-streak, ...
        success: semantic.success,
        warning: semantic.warning,
        streak: semantic.streak,
        error: semantic.error,
        info: semantic.info,
        // Neutrals: text-ink, text-ink-secondary, border-border, bg-surface, bg-background
        ink: {
          DEFAULT: neutral.textPrimary,
          secondary: neutral.textSecondary,
        },
        border: neutral.border,
        surface: neutral.surface,
        background: neutral.background,
      },
      // font-poppins, font-poppins-medium, font-poppins-semibold, font-poppins-bold
      fontFamily: {
        poppins: [fontFamily.regular],
        "poppins-medium": [fontFamily.medium],
        "poppins-semibold": [fontFamily.semibold],
        "poppins-bold": [fontFamily.bold],
      },
      // text-h1 ... text-caption (size + line height)
      fontSize,
    },
  },
  plugins: [],
};
