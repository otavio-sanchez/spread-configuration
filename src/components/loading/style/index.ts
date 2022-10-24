import styled, { keyframes } from 'styled-components';
import LoadingIcon from '../../../assets/icons/loading.svg';

const animation = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(359deg); }
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	height: 50px;
	justify-content: center;
	align-content: center;
	align-items: center;

	svg {
		animation-name: ${animation};
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}
`;

export { LoadingIcon, Content };
