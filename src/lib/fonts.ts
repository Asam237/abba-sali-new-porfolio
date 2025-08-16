import localFont from "next/font/local";

/**
 * Nunito
 */
export const PoppinsUiDisplay = localFont({
  src: [
    {
      path: "../fonts/Poppins/Regular.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Poppins/bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-poppins-ui-display",
  preload: true,
});
/**
 * Nunito
 */
export const NunitoUiDisplay = localFont({
  src: [
    {
      path: "../fonts/Nunito/sans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Nunito/regular.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Nunito/bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-nunito-ui-display",
  preload: true,
});

/**
 * SkylarSansBold
 */
export const SkylarSansBoldUiDisplay = localFont({
  src: [
    {
      path: "../fonts/SkylarSans/sans.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/SkylarSans/bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/SkylarSans/regular.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-skylar-slab-ui-display",
  preload: true,
});
