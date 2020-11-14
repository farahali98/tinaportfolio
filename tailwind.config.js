module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		fontFamily: {
			Poppins: ["Poppins", "sans-serif"],
		},
		screens: {
			xxl: { max: "1366px" },
			// => @media (max-width: 1366px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
		extend: {
			backgroundImage: (theme) => ({
				laptop: "url('/src/output-onlinepngtools (1).png')",
				service: "url('/src/pexels-veeterzy-114979.jpg')",
			}),
		},
	},
	variants: {},
	plugins: [],
};
