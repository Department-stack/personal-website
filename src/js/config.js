export const CONFIG = {
	defaultTheme: 'deepsea',
	seasonalTheme: false, // will change the default theme based on the date

	// effects
	effectsDisabledByDefault: false,
	effectsDisabledByDefaultMobile: false,
	displayEffectsSwitch: false,

	// additional effects
	crtEffect: true,
	noiseEffect: true,
	grungeOverlay: true,

	// tabs
	defaultHash: '#home',
	animationOnTabChange: true, // disabled when effects are disabled
	writeAnimationOnTabChange: false, // animationOnTabChange must be true | may cause performance issues

	// blog
	blogUrl: 'https://saiku.org/blog.xml', // example: '/src/example/blog.xml'
	useExample: true,
	writeAnimationOnPostOpen: true,
	showEstimatedReadTime: true,
};
