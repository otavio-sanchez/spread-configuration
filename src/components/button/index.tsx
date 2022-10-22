import React from 'react';
import { withTheme } from 'styled-components';

import { ButtonComponent } from './style';
import { IPropsButton } from './types';

function Button({
	children,
	onClick,
	color = 'primary',
	type = 'default',
}: IPropsButton) {
	return (
		<ButtonComponent color={color} onClick={onClick} type={type}>
			{children}
		</ButtonComponent>
	);
}

export default withTheme(Button);
