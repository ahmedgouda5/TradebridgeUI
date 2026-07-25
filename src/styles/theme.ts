// theme.ts
// TradeBridge Design System
// -----------------------------------------------------------------------------
// Naming Convention:
// - Gray (Blue Gray): Main text, borders, dark surfaces.
// - Cream: Page backgrounds.
// - Orange (Amber): Primary brand & CTA.
// - Green (Verdant): Success & positive states.
// - Red: Error & destructive actions.
// -----------------------------------------------------------------------------

export const theme = {
  color: {
    // =========================================================================
    // Gray (Blue Gray) Scale
    // =========================================================================
    gray50: "#F4F6F8", // Very Light Gray
    gray100: "#E4E9EE", // Light Gray
    gray200: "#C2CCD8", // Gray
    gray300: "#8E9DB0", // Medium Gray
    gray400: "#5C6F85", // Dark Gray
    gray500: "#3D5166", // Slate Gray
    gray600: "#2A3A4D", // Dark Slate
    gray700: "#1B2A3D", // Navy Gray
    gray800: "#13202F", // Very Dark Navy
    gray900: "#0F1B2E", // Almost Black Navy

    // =========================================================================
    // Cream (Background)
    // =========================================================================
    cream50: "#FAF8F4", // Main Page Background
    cream100: "#F2EFE8", // Secondary Background / Hover

    // =========================================================================
    // Orange (Primary Brand)
    // =========================================================================
    orange50: "#FBF1E8", // Very Light Orange
    orange100: "#F6DFC8", // Light Orange
    orange400: "#E2935C", // Orange
    orange500: "#D97B3F", // Primary Brand Orange
    orange600: "#BC6230", // Dark Orange
    orange700: "#9A4F27", // Brown Orange

    // =========================================================================
    // Green (Success)
    // =========================================================================
    green50: "#E9F5F0", // Very Light Green
    green500: "#1F7A5C", // Emerald Green
    green600: "#176147", // Dark Green

    // =========================================================================
    // Status Colors
    // =========================================================================
    statusPendingBg: "#FBF1E8", // Light Orange
    statusPendingText: "#9A4F27", // Brown Orange

    statusProgressBg: "#E9F5F0", // Light Green
    statusProgressText: "#176147", // Dark Green

    statusConfirmedBg: "#E4E9EE", // Light Gray
    statusConfirmedText: "#2A3A4D", // Dark Slate

    statusShippedBg: "#FBF1E8", // Light Orange
    statusShippedText: "#BC6230", // Dark Orange

    statusDeliveredBg: "#E9F5F0", // Light Green
    statusDeliveredText: "#1F7A5C", // Emerald Green

    // =========================================================================
    // Common Colors
    // =========================================================================
    red500: "#ef4444", // Error / Danger
    white: "#ffffff", // White

    // =========================================================================
    // Scrollbar
    // =========================================================================
    scrollbarTrack: "#F2EFE8", // Cream
    scrollbarThumb: "#C2CCD8", // Gray
    scrollbarThumbHover: "#8E9DB0", // Medium Gray

    // =========================================================================
    // Components
    // =========================================================================
    productHoverBorder: "#E2935C", // Orange
    convoActiveBg: "#FBF1E8", // Light Orange
    convoHoverBg: "#F4F6F8", // Very Light Gray

    // =========================================================================
    // Gray (Navy) Alpha
    // =========================================================================
    grayAlpha0: "rgba(15,27,46,0)", // Transparent
    grayAlpha02: "rgba(15,27,46,0.02)", // Navy 2%
    grayAlpha035: "rgba(15,27,46,0.035)", // Navy 3.5%
    grayAlpha04: "rgba(15,27,46,0.04)", // Navy 4%
    grayAlpha06: "rgba(15,27,46,0.06)", // Navy 6%
    grayAlpha10: "rgba(15,27,46,0.10)", // Navy 10%
    grayAlpha18: "rgba(15,27,46,0.18)", // Navy 18%
    grayAlpha28: "rgba(15,27,46,0.28)", // Navy 28%
    grayAlpha55: "rgba(15,27,46,0.55)", // Navy 55%

    // =========================================================================
    // Orange Alpha
    // =========================================================================
    orangeAlpha15: "rgba(217,123,63,0.15)", // Orange 15%
    orangeAlpha20: "rgba(217,123,63,0.20)", // Orange 20%
    orangeAlpha25: "rgba(217,123,63,0.25)", // Orange 25%
    orangeAlpha45: "rgba(217,123,63,0.45)", // Orange 45%
    orangeAlpha50: "rgba(217,123,63,0.50)", // Orange 50%
  },
} as const;

export type Theme = typeof theme;

export default theme;
