import styled from 'styled-components';

import { IPropsComponentInput } from '../types';

export type IInput = IPropsComponentInput;

const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	display: block;
`;

export const Label = styled.label`
	color: #fff;
	font-size: ${({ theme }: IPropsComponentInput) => theme.size.font.small};
`;

const Input = styled.input<IInput>`
	outline: none;
	border: 0px;
	padding: ${({ theme }: IPropsComponentInput) => theme.space(1)} 0px;
	width: 100%;
	z-index: 1;
	position: relative;
	box-sizing: border-box;
	border: 2px solid
		${({ theme, error }: IPropsComponentInput) =>
			error ? theme.colors.error.text : theme.colors.grey[800]};
	color: #fff;
	padding: ${({ theme }: IPropsComponentInput) =>
		`${theme.space(1)} ${theme.space(2)}`};
	font-family: ${({ theme }: IPropsComponentInput) => theme.font.family};
	font-size: ${({ theme }: IPropsComponentInput) => theme.size.font.medium};
	background-color: ${({ theme, alternative }: IPropsComponentInput) =>
		alternative ? theme.colors.grey[900] : theme.colors.grey[800]};
`;

export { Input, InputWrapper };
