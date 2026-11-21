/**
 * Centralized image imports.
 *
 * Always import app images through this file instead of requiring
 * assets directly inside screens or components.
 *
 * NOTE: uses require() (not ES `import`), matching src/constants/fonts.ts —
 * this project has no `declare module "*.png"` ambient type, so an ES
 * import of an image path fails type-checking.
 */
export const images = {
  mascotLogo: require("@/assets/images/moscot-logo.png"),
  mascotWelcome: require("@/assets/images/mascot-welcome.png"),
  mascotAuth: require("@/assets/images/mascot-auth.png"),
};
