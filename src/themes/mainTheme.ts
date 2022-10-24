const colors = {
	primary: {
		text: '#ffffff',
		main: '#1A1D1E',
	},
	grey: {
		100: '#575F66',
		200: '#545454',
		300: '#4E5459',
		400: '#2C2C2C',
		500: '#1D1D1D',
	},
	success: {
		main: '#50A450',
		text: '#5AD38E',
	},
	error: {
		main: '#CA5252',
		text: '#FF6E63',
	},
};

const size = {
	font: {
		small: '12px',
		medium: '14px',
		large: '16px',
		xLarge: '26px',
	},
	container: {
		maxSize: '1480px',
		desktopWidth: 1280,
		tabletWidth: 860,
		mobileWidth: 720,
	},
};

const font = {
	family: 'Arial',
};

const space = (size: number) => `${8 * size}px`;

export default { colors, size, font, space };
