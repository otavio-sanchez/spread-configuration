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
		};
	};
	font: {
		family: string;
	};
	space: (size: number) => string;
};
