import { fontFamily } from "@/theme/typography";

/**
 * Font files loaded once in the root layout with `useFonts`.
 * Keys must match the family names in src/theme/typography.ts.
 */
export const fontAssets = {
  [fontFamily.regular]: require("@/assets/fonts/Poppins-Regular.ttf"),
  [fontFamily.medium]: require("@/assets/fonts/Poppins-Medium.ttf"),
  [fontFamily.semibold]: require("@/assets/fonts/Poppins-SemiBold.ttf"),
  [fontFamily.bold]: require("@/assets/fonts/Poppins-Bold.ttf"),
};
