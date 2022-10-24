import * as React from 'react';
import { Content, LoadingIcon } from './style';

function Loading(): JSX.Element {
	return (
		<Content>
			<LoadingIcon width={30} data-testid="icon-loading" />
		</Content>
	);
}

export default Loading;
