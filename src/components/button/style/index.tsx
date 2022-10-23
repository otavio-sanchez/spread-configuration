import styled from 'styled-components';

import { IPropsComponentButton } from '../types';

export const ButtonComponent = styled.button<IPropsComponentButton>`
	background-color: ${({ color, theme, typeButton }: IPropsComponentButton) =>
		typeButton === 'icon' ? 'transparent' : color && theme.colors[color].main};
	color: #fff;
	cursor: pointer;
	border: 0px solid #fff;
	padding: ${({ theme }: IPropsComponentButton) =>
		`${theme.space(1)} ${theme.space(2)}`};
	font-family: ${({ theme }: IPropsComponentButton) => theme.font.family};
	font-size: ${({ theme }: IPropsComponentButton) => theme.size.font.medium};

	&:hover {
		opacity: 0.8;
	}
`;
