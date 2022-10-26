import * as React from 'react';
import { ColContent } from './style';
import { IPropsCol } from './types';

function Col({ children, align }: IPropsCol): JSX.Element {
	return <ColContent align={align}>{children}</ColContent>;
}

export default Col;
