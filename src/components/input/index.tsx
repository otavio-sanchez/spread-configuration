import * as React from 'react';
import { Input, InputWrapper } from './style';
import { IPropsInput } from './types';

function TextInput({ placeholder, onChange, name }: IPropsInput): JSX.Element {
	return (
		<InputWrapper>
			<Input
				placeholder={placeholder || 'Digite aqui...'}
				onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
					return onChange && onChange(name, event.target.value);
				}}
			/>
		</InputWrapper>
	);
}

export default TextInput;
