import styled from 'styled-components';

const ColContent = styled.td`
	position: relative;
	padding: ${({ theme }): string => theme.space(1)}
		${({ theme }): string => theme.space(2)};
`;

export { ColContent };
