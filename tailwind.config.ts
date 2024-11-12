import type { Config } from "tailwindcss";
import scrollbar from 'tailwind-scrollbar';
import animate from 'tailwindcss-animate'

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
		center: true,
		padding: "2rem",
		screens: {
			'3xs': '175px',
			'2xs': '275px',
			'xs': '375px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1400px',
			'3xl': '1536px',
		},
		},
		extend: {
		colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
			DEFAULT: "hsl(var(--primary))",
			dark: "hsl(var(--primary-dark))",
			light: "hsl(var(--primary-light))",
			foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
			DEFAULT: "hsl(var(--secondary))",
			dark: "hsl(var(--secondary-dark))",
			light: "hsl(var(--secondary-light))",
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
			hover: {
			DEFAULT: "hsl(var(--primary-hover))",
			secondary: "hsl(var(--secondary-hover))",
			muted: "hsl(var(--muted-hover))",
			accent: "hsl(var(--accent-hover))",
			destructive: "hsl(var(--destructive-hover))"
			},
			success: {
				DEFAULT: "hsl(120, 100%, 25%)", // Example color for success
				foreground: "hsl(120, 100%, 95%)", // Light text on success
			},
			danger: {
				DEFAULT: "hsl(0, 100%, 50%)", // Example color for danger
				foreground: "hsl(0, 100%, 95%)", // Light text on danger
			},
			alert: {
				DEFAULT: "hsl(39, 100%, 50%)", // Example color for alert
				foreground: "hsl(39, 100%, 95%)", // Light text on alert
			},
			info: {
				DEFAULT: "hsl(210, 100%, 40%)", // Example color for info
				foreground: "hsl(210, 100%, 95%)", // Light text on info
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
			typewriter: {
			'0%, 10%': { maxWidth: '0%', borderRight: '2px solid currentColor', whiteSpace: 'nowrap' },
			'30%, 60%': { maxWidth: '100%', borderRight: '2px solid currentColor' },
			'70%, 80%': { maxWidth: '100%', borderRight: '2px solid transparent' },
			'90%, 100%': { maxWidth: '100%', borderRight: '2px solid transparent', whiteSpace: 'normal' },
			},
			blink: {
			'0%, 100%': { borderColor: 'transparent' },
			'50%': { borderColor:  'hsl(var(--primary))'}, // Adjust the color of the cursor as needed
			},
			fadeIn: {
			"0%": { opacity: '0' },
			"50%": { opacity: '0.5' },
			"100%": { opacity: '1' },
			},
			fadeOut: {
			"0%": { opacity: "1" },
			"50%": { opacity: '0.5' },
			"100%": { opacity: "0" },
			},
			'accorion-right': {
			"0%": { transform: 'translateX(-100%)' },
			"100%": { transform: 'translateX(0)' },
			},
			projectImageAnimation: {
			"0%": { transform: 'translateY(-30px)' },
			"25%": { transform: 'translateY(-15px)' },
			"50%": { transform: 'translateY(0px)' },
			"75%": { transform: 'translateY(-15px)' },
			"100%": { transform: 'translateX(-30)' },
			},
			testimonial: {
			"0%": { rotate: '5deg' },
			"25%": { rotate: '2deg' },
			"50%": { rotate: '0' },
			"75%": { rotate: '-2deg' },
			"100%": { rotate: '-5deg' },
			}
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			typewriter: 'typewriter 4s steps(30) 1s forwards',
			blink: 'blink 0.75s step-end infinite',
			fadeIn: "fadeIn 1s ease-in",
			fadeOut: "fadeOut 1s ease-out",
			'accorion-right': 'accorion-right 4s ease-out',
			projectImageAnimation: 'projectImageAnimation 6s ease-in-out infinite',
			testimonial: 'testimonial 4s ease-in-out infinite',
		},
		fontFamily: {
			pthin: ["Poppins-Thin", "sans-serif"],
			pextralight: ["Poppins-ExtraLight", "sans-serif"],
			plight: ["Poppins-Light", "sans-serif"],
			pregular: ["Poppins-Regular", "sans-serif"],
			pmedium: ["Poppins-Medium", "sans-serif"],
			psemibold: ["Poppins-SemiBold", "sans-serif"],
			pbold: ["Poppins-Bold", "sans-serif"],
			pextrabold: ["Poppins-ExtraBold", "sans-serif"],
			pblack: ["Poppins-Black", "sans-serif"],
		},
		screens: {
			'2xs': '360px',  // Custom breakpoint for extra small devices
			'xs': '480px',   // Custom breakpoint smaller than sm
			'sm': '640px',   // Default Tailwind `sm` breakpoint
			// Keep other default breakpoints...
		},
		fontSize: {
			'xs': '0.75rem',     // 12px
			'sm': '0.875rem',    // 14px
			'base': '1rem',      // 16px, default body font size
			'lg': '1.125rem',    // 18px
			'xl': '1.25rem',     // 20px
			'2xl': '1.5rem',     // 24px
			'3xl': '1.875rem',   // 30px
			'4xl': '2.25rem',    // 36px
			'5xl': '3.25rem',    // Custom size (52px)
			'6xl': '3.5rem',     // Custom size (56px)
			'7xl': '4.5rem',     // 72px
			'8xl': '5rem',       // 80px
			'9xl': '6rem',       // 96px
		},
		// backgroundImage: {
		//   'gradient-to-r': 'linear-gradient(90deg, #ff7e5f, #feb47b)',
		// },
		},
	},
	plugins: [
		animate,
		scrollbar
	],
};
export default config;
