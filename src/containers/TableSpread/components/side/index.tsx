import React from 'react';
import { Content } from './style';
import { TPropsSide } from './type';

function Side({ type, children }: TPropsSide) {
	return type ? <Content type={type}>{children}</Content> : <>-</>;
}

export default Side;
