import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "surface-bright": "#3c3933",
        "on-surface-variant": "#cfc5b5",
        "primary-fixed-dim": "#e1c381",
        "inverse-surface": "#e8e1da",
        "inverse-primary": "#725b24",
        "surface-primary": "#161719",
        "primary-fixed": "#fedf9b",
        "primary-container": "#d7ba79",
        "on-tertiary": "#262e53",
        "outline-variant": "#4c463a",
        "surface": "#15130f",
        "on-primary": "#3f2e00",
        "text-secondary": "rgba(244, 239, 230, 0.74)",
        "on-tertiary-fixed": "#11183d",
        "on-primary-fixed": "#251a00",
        "surface-container-highest": "#37342f",
        "page-bg": "#111213",
        "surface-container-high": "#2c2a25",
        "on-tertiary-container": "#434a71",
        "text-primary": "#f4efe6",
        "secondary-fixed": "#e3e2e4",
        "secondary-fixed-dim": "#c7c6c8",
        "tertiary": "#d2d7ff",
        "surface-container-lowest": "#100e0a",
        "background": "#15130f",
        "on-secondary": "#303032",
        "accent-gold": "#d7ba79",
        "secondary-container": "#464749",
        "tertiary-fixed-dim": "#bdc4f2",
        "text-faint": "rgba(244, 239, 230, 0.5)",
        "on-primary-fixed-variant": "#58440e",
        "on-secondary-container": "#b5b5b7",
        "on-error": "#690005",
        "on-background": "#e8e1da",
        "tertiary-container": "#b4bbe9",
        "inverse-on-surface": "#33302b",
        "surface-secondary": "#1c1d1f",
        "surface-tint": "#e1c381",
        "surface-dim": "#15130f",
        "on-secondary-fixed-variant": "#464749",
        "on-secondary-fixed": "#1b1c1e",
        "primary": "#f4d692",
        "tertiary-fixed": "#dee1ff",
        "outline": "#989081",
        "secondary": "#c7c6c8",
        "accent-soft": "rgba(215, 186, 121, 0.12)",
        "on-error-container": "#ffdad6",
        "surface-variant": "#37342f",
        "error": "#f39c92",
        "on-primary-container": "#5e4913",
        "success": "#7ed5a4",
        "error-container": "#93000a",
        "surface-container": "#221f1b",
        "on-surface": "#e8e1da",
        "border-subtle": "rgba(244, 239, 230, 0.08)",
        "surface-container-low": "#1e1b17",
        "on-tertiary-fixed-variant": "#3d446b"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "stack-gap-sm": "16px",
        "main-gap": "24px",
        "stack-gap-md": "32px",
        "stack-gap-lg": "64px",
        "sidebar-width": "330px",
        "container-padding": "40px",
        "max-width": "1380px"
      },
      "fontFamily": {
        "display-name": ["Noto Serif", "serif"],
        "h2-editorial": ["Noto Serif", "serif"],
        "eyebrow-label": ["Manrope", "sans-serif"],
        "body-reading": ["Manrope", "sans-serif"],
        "nav-item": ["Manrope", "sans-serif"]
      },
      "fontSize": {
        "display-name": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "500" }],
        "h2-editorial": ["40px", { "lineHeight": "1.1", "letterSpacing": "-0.01em", "fontWeight": "400" }],
        "eyebrow-label": ["11px", { "lineHeight": "1", "letterSpacing": "0.15em", "fontWeight": "700" }],
        "body-reading": ["16px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }],
        "nav-item": ["14px", { "lineHeight": "1", "letterSpacing": "0.01em", "fontWeight": "500" }]
      }
    }
  },
  plugins: [
    forms,
    containerQueries
  ],
}
