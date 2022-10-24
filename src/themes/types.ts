export type TTheme = {
	colors: {
		primary: {
			text: string;
			main: string;
		};
		grey: {
			100: string;
			200: string;
			300: string;
			400: string;
			500: string;
			600: string;
			700: string;
			800: string;
		};
		success: {
			main: string;
			text: string;
		};
		error: {
			main: string;
			text: string;
		};
	};
	size: {
		font: {
			small: string;
			medium: string;
			large: string;
			xLarge: string;
		};
		container: {
			maxSize: string;
			desktopWidth: number;
			tabletWidth: number;
			mobileWidth: number;
		};
	};
	font: {
		family: string;
	};
	space: (size: number) => string;
};
