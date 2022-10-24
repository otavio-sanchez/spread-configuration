import * as React from 'react';
import { Content, LoadingIcon } from './style';

function Loading(): JSX.Element {
	return (
		<Content data-testid="icon-loading" >
			<LoadingIcon />
		</Content>
	);
}

export default Loading;
