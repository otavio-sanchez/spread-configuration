import styled from 'styled-components';

import { mainTheme, TTheme } from '../../../themes';

export const styleModal = {
	overlay: {
		zIndex: 100,
	},
	content: {
		backgroundColor: mainTheme.colors.grey[900],
		color: '#fff',
		zIndex: 101,
		borderWidth: 0,
		maxWidth: mainTheme.size.container.mobileWidth,
		width: '100%',
		borderRadius: 4,
		margin: 'auto',
		maxHeight: 596,
	},
};

export const Form = styled.form`
	display: grid;

	div {
		margin-bottom: ${({ theme }: { theme: TTheme }) => theme.space(2)};
	}
`;

export const HeaderModal = styled.h3`
	display: grid;
	margin: 0px 0px ${({ theme }: { theme: TTheme }) => theme.space(2)} 0px;
	padding-bottom: ${({ theme }: { theme: TTheme }) => theme.space(1)};
	width: 100%;
	font-size: ${({ theme }: { theme: TTheme }) => theme.size.font.xLarge};
	color: #fff;
	text-align: center;
	border-bottom: ${({ theme }: { theme: TTheme }) => theme.colors.grey[800]} 1px
		solid;
`;
