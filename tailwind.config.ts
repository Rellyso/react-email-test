import type { TailwindConfig } from "@react-email/tailwind";

export default {
  theme: {
    extend: {
      screens: {
        sm: "400px",
      },
      colors: {
        primary: {
          600: "#302AD8",
          500: "#3A36F5",
          400: "#4651FF",
          300: "#7587FF",
          200: "#9CB2FF",
          100: "#DDE6FF",
          50: "#ECF2FF",
        },
        neutral: {
          600: "#252527",
          500: "#444446",
          400: "#5A5A5E",
          300: "#8A8A8F",
          200: "#D0D0D2",
          100: "#EAEAEB",
          50: "#F7F7F7",
          0: "#FFFFFF",
        },
        danger: {
          light: "#F8DAD3",
          default: "#F7D2C9",
          dark: "#D93025",
        },
        success: {
          light: "#E8F3EE",
          default: "#C4E0D3",
          dark: "#008D63",
        },
        warning: {
          light: "#FFF9E5",
          default: "#FFEFC2",
          dark: "#7A5200",
        },
      },
    },
    fontSize: {
      xs: ["12px", { lineHeight: "16px" }],
      sm: ["14px", { lineHeight: "20px" }],
      base: ["16px", { lineHeight: "24px" }],
      lg: ["18px", { lineHeight: "28px" }],
      xl: ["20px", { lineHeight: "28px" }],
      "2xl": ["24px", { lineHeight: "32px" }],
      "3xl": ["30px", { lineHeight: "36px" }],
      "4xl": ["36px", { lineHeight: "36px" }],
      "5xl": ["48px", { lineHeight: "1" }],
      "6xl": ["60px", { lineHeight: "1" }],
      "7xl": ["72px", { lineHeight: "1" }],
      "8xl": ["96px", { lineHeight: "1" }],
      "9xl": ["144px", { lineHeight: "1" }],
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "2px",
      1: "4px",
      1.5: "6px",
      2: "8px",
      2.5: "10px",
      3: "12px",
      3.5: "14px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      14: "56px",
      16: "64px",
      20: "80px",
      24: "96px",
      28: "112px",
      32: "128px",
      36: "144px",
      40: "160px",
      44: "176px",
      48: "192px",
      52: "208px",
      56: "224px",
      60: "240px",
      64: "256px",
      72: "288px",
      80: "320px",
      96: "384px",
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      base: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px",
      "2xl": "16px",
      full: "999px",
    },
  },
} satisfies TailwindConfig;