import styled from 'styled-components';

import { IPropsSelectComponent } from '../types';

export const SelectContainer = styled.div`
	width: 100%;
`;

export const SelectComponent = styled.select<IPropsSelectComponent>`
	border: 2px solid
		${({ theme, error }: IPropsSelectComponent) =>
			error ? theme.colors.error.text : theme.colors.grey[800]};
	background-color: ${({ theme }: IPropsSelectComponent) =>
		theme.colors.grey[900]};
	width: 100%;
	color: #fff;
	padding: ${({ theme }: IPropsSelectComponent) => theme.space(1)};
`;

export const Label = styled.label`
	color: #fff;
	font-size: ${({ theme }: IPropsSelectComponent) => theme.size.font.small};
`;

export const Option = styled.option``;
