import styled from 'styled-components';
import { IPropsComponentInput } from '../types';

const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	display: block;
`;

const Input = styled.input`
	outline: none;
	border: 0px;
	padding: 10px 0px;
	width: 100%;
	z-index: 1;
	position: relative;
	box-sizing: border-box;
	color: #fff;
	padding: ${({ theme }: IPropsComponentInput) =>
		`${theme.space(1)} ${theme.space(2)}`};
	font-family: ${({ theme }: IPropsComponentInput) => theme.font.family};
	font-size: ${({ theme }: IPropsComponentInput) => theme.size.font.medium};
	background-color: ${({ theme }: IPropsComponentInput) =>
		theme.colors.grey[400]};
`;

export { Input, InputWrapper };
