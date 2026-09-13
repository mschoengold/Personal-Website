import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo-brutalist palette — "Oxford" scheme.
        // Navy replaces black on every border, shadow and piece of text.
        paper: '#f1ede3',   // page ground (bone)
        panel: '#fbf9f3',   // card / slab surface
        edge: '#1b2a41',    // every border and hard shadow (navy, not black)
        ink: {
          DEFAULT: '#1b2a41',
          muted: '#2f3d52',  // detail text; dark enough to stay legible on the colour blocks
          soft: '#5d6a83',   // kickers and small labels
        },
        // Colour blocks. These four keys are palette SLOTS, not colour names:
        // the class names (fill-amber, fill-azure, ...) stay fixed so a palette
        // change never touches the components. In the Oxford scheme they are:
        //   amber  -> brass        azure -> slate blue
        //   violet -> stone        sage  -> sage green
        // Every block carries navy text and clears WCAG AA for body copy.
        tag: {
          amber: '#c9a227',
          azure: '#9db4cc',
          violet: '#d8d2c4',
          sage: '#9fb79b',
        },

        // Retained from the previous design so nothing referencing them breaks.
        primary: {
          50: '#ecf3fb', 100: '#cfe0f4', 200: '#a9c7ea', 300: '#79a6dc',
          400: '#5189ce', 500: '#3a72bc', 600: '#2d5ea0', 700: '#244c82',
          800: '#1e3e69', 900: '#182f4f',
        },
        dark: {
          50: '#e8edf2', 100: '#c4cdd8', 200: '#8593a3', 300: '#5a6878',
          400: '#2a3645', 500: '#18222f', 600: '#111a26', 700: '#0c141e',
          800: '#080e16', 900: '#05090f',
        },
        accent: {
          50: '#fbf3e2', 100: '#f3ddae', 200: '#e9c277', 300: '#dca94a',
          400: '#ce9a3a', 500: '#b9842b', 600: '#996b20', 700: '#79541a',
          800: '#5b3f15', 900: '#3e2b0e',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        brutal: '6px 6px 0 #1b2a41',
        'brutal-sm': '4px 4px 0 #1b2a41',
        'brutal-xs': '3px 3px 0 #1b2a41',
      },
    },
  },
  plugins: [],
};
export default config;
