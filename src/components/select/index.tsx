import React, { useState } from 'react';

import { SelectComponent, Label, Option, SelectContainer } from './style';
import { IPropsSelect, TOption } from './types';

function Select({
	selected,
	label,
	options,
	onChange,
	id,
	name,
	error = false,
}: IPropsSelect) {
	const [selectedValue, setSelectedValue] = useState(selected);
	const change = (event: React.FormEvent<HTMLSelectElement>) => {
		const { value } = event.currentTarget;

		setSelectedValue(value);

		onChange(name, value);
	};

	return (
		<SelectContainer>
			<Label htmlFor={id}>{label}:</Label>
			<SelectComponent
				className="form-control"
				id={id}
				onChange={change}
				value={selectedValue}
				error={error}
			>
				{options.map((option: TOption) => (
					<Option key={option.value} value={option.value}>
						{option.label}
					</Option>
				))}
			</SelectComponent>
		</SelectContainer>
	);
}

export default Select;
