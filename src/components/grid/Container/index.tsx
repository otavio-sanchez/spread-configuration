import * as React from 'react';

import { ContainerContent } from './style';
import { IPropsContainer } from './types';

function Container({
	children,
	maxWidth,
	alternative,
}: IPropsContainer): JSX.Element {
	return (
		<ContainerContent alternative={alternative} maxWidth={maxWidth}>
			{children}
		</ContainerContent>
	);
}

export default Container;
