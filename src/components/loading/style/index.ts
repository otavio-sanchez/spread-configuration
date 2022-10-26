import styled, { keyframes } from 'styled-components';

import LoadingIcon from '../../../assets/icons/loading.svg';

const animation = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(359deg); }
`;

const Content = styled.span`
	height: 16px;
	width: 16px;
	display: inline-block;

	svg {
		animation-name: ${animation};
		animation-duration: 1s;
		animation-iteration-count: infinite;
		width: 16px;
		height: 16px;
		margin-left: ${({ theme }) => theme.space(1)};
	}
`;

export { LoadingIcon, Content };
