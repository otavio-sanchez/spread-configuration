import React from 'react';
import { withTheme } from 'styled-components';

import { ButtonComponent } from './style';
import { IPropsButton } from './types';

function Button({
	children,
	onClick,
	color = 'primary',
	typeButton = 'default',
	disabled = false,
}: IPropsButton) {
	return (
		<ButtonComponent
			disabled={disabled}
			color={color}
			onClick={onClick}
			typeButton={typeButton}
		>
			{children}
		</ButtonComponent>
	);
}

export default withTheme(Button);
