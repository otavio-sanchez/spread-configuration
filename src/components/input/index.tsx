import React, { useState, useCallback } from 'react';

import { Input, InputWrapper, Label } from './style';
import { IPropsInput } from './types';

function TextInput({
	placeholder,
	onChange,
	name,
	value,
	id,
	error,
	type = 'number',
	label,
	alternative,
}: IPropsInput): JSX.Element {
	const [valueInput, setInputValue] = useState(value);

	const [editing, setEditing] = useState(false);

	const isText = type === 'text';

	const toCurrency = useCallback(
		(valueInput: number | string | null) => {
			if (typeof valueInput === 'string' || valueInput === undefined) {
				return valueInput;
			}

			const formatter = new Intl.NumberFormat('us-EU', {
				style: 'decimal',
			});

			return formatter.format(valueInput || 0);
		},
		[value]
	);

	const onHandleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>): void => {
			const value = isText ? event.target.value : Number(event.target.value);
			setInputValue(value);
			if (onChange) {
				onChange(name, toCurrency(value));
			}
		},
		[value]
	);

	return (
		<InputWrapper>
			{label && <Label>{label}:</Label>}
			{editing && !isText ? (
				<Input
					type="number"
					name={name}
					placeholder={placeholder || 'Digite aqui...'}
					onChange={onHandleChange}
					value={valueInput || ''}
					onBlur={() => setEditing(false)}
					data-testid="input-number"
					id={id && `text-${id}`}
					alternative={alternative}
				/>
			) : (
				<Input
					name={name}
					placeholder={placeholder || 'Digite aqui...'}
					onChange={onHandleChange}
					onFocus={() => setEditing(true)}
					value={toCurrency(valueInput)}
					data-testid="input-text"
					error={error}
					readOnly={!isText}
					id={id}
					alternative={alternative}
				/>
			)}
		</InputWrapper>
	);
}

export default TextInput;
