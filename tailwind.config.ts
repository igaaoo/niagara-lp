import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        sans: ['var(--font-rubik)'],
        space_grotesk: ['var(--font-space-grotesk)'],
        rubik: ['var(--font-rubik)'],
        josefin: ['var(--font-josefin)'],
      },
      backgroundImage: {
        "main-bg": "url('/main.png')",
        "setup-bg": "url('/setup.jpg')",
        "industry-bg": "url('/bg/solutions.jpg')",
        "lema-bg": "url('/bg/lema.png')",
        "solutions-bg": "url('/bg/solutions.jpg')",

        "carousel-virtual-studios": "url('/carousel/virtualStudios.jpg')",
        "carousel-health": "url('/carousel/health.jpg')",
        "carousel-education": "url('/carousel/education.png')",
        "carousel-training": "url('/carousel/training.jpg')",
        "carousel-corporate": "url('/carousel/corporate.jpg')",
        "carousel-industry": "url('/carousel/industry.jpg')",
        "carousel-retail": "url('/carousel/retail.png')",
        "carousel-safety": "url('/carousel/safety.jpeg')",
        "carousel-events": "url('/carousel/events.jpg')",
        "carousel-virtual-ads": "url('/carousel/virtualad.jpg')",
        "carousel-virtual-sponsors": "url('/carousel/virtualSponsors.jpg')",


        "solutions-vr": "url('/solutions/vr.jpg')",
        "solutions-ar": "url('/solutions/ar.jpg')",
        "solutions-render": "url('/solutions/render.jpg')",


        "missions-bg": "url('/missions.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "up-and-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-40%)" },

        },

      },
      animation: {
        // up and down smooth indicating to scroll down
        "up-and-down": "up-and-down 4s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;