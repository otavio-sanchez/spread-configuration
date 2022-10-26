import { useFormik } from 'formik';
import React, { useState } from 'react';
import Modal from 'react-modal';
import * as Yup from 'yup';

import { types } from '../../commons/constants/spread';
import { TSpread } from '../../commons/types';
import Button from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/select';
import { styleModal, Form, HeaderModal } from './style';
import { IPropsAddRange } from './types';

function AddRange({ addRange }: IPropsAddRange) {
	const [open, setOpen] = useState(false);

	const validationSchema = Yup.object({
		id: Yup.number().required(),
		spreadTypeId: Yup.number().required().max(50),
		accountId: Yup.number().required().max(50),
		symbol: Yup.string().required().max(50),
		side: Yup.string().required().max(50),
		notionalFrom: Yup.number().required().max(50),
		notionalTo: Yup.number().required().max(50),
		spreadPercentil: Yup.number().required().max(50),
	});

	const formik = useFormik({
		initialValues: {
			id: Math.floor(Math.random() * 100),
			spreadTypeId: 1,
			accountId: '',
			symbol: '',
			side: 'BUY',
			notionalFrom: '',
			notionalTo: '',
			spreadPercentil: '',
		},
		validationSchema,
		onSubmit: (values: TSpread) => addRange(values),
	});

	const onChange = (name: string, value: string | number) => {
		formik.setFieldValue(name, value);
	};

	return (
		<>
			<Modal isOpen={open} contentLabel="Add Range" style={styleModal}>
				<HeaderModal>Add New Spread Range</HeaderModal>
				<Form onSubmit={formik.handleSubmit}>
					<Select
						id="spreadTypeId"
						name="spreadTypeId"
						label="Spread Type"
						data-testid="spreadTypeId-input"
						selected={formik.values.spreadTypeId.toString()}
						onChange={onChange}
						options={[
							{ label: 'WORKING HOURS', value: types.WORKING_HOURS },
							{ label: 'NIGHT SHIFT', value: types.NIGHT_SHIFT },
						]}
						error={
							formik.touched.spreadTypeId && Boolean(formik.errors.spreadTypeId)
						}
					/>
					<Input
						id="accountId"
						name="accountId"
						data-testid="accountId-input"
						value={formik.values.accountId}
						onChange={onChange}
						error={formik.touched.accountId && Boolean(formik.errors.accountId)}
						placeholder="Account Id"
						label="Account Id"
						alternative
					/>
					<Input
						id="symbol"
						name="symbol"
						data-testid="symbol-input"
						type="text"
						value={formik.values.symbol}
						onChange={onChange}
						error={formik.touched.symbol && Boolean(formik.errors.symbol)}
						placeholder="Symbol"
						label="Symbol"
						alternative
					/>
					<Select
						id="side"
						name="side"
						label="Side"
						data-testid="side-input"
						selected={formik.values.spreadTypeId.toString()}
						onChange={onChange}
						options={[
							{ label: 'BUY', value: 'BUY' },
							{ label: 'SELL', value: 'SELL' },
						]}
						error={formik.touched.side && Boolean(formik.errors.side)}
					/>
					<Input
						id="notionalFrom"
						name="notionalFrom"
						data-testid="notionalTo-input"
						value={formik.values.notionalFrom}
						onChange={onChange}
						error={
							formik.touched.notionalFrom && Boolean(formik.errors.notionalFrom)
						}
						placeholder="Notional From"
						label="Notional From"
						alternative
					/>
					<Input
						id="notionalTo"
						name="notionalTo"
						data-testid="notionalTo-input"
						value={formik.values.notionalTo}
						onChange={onChange}
						placeholder="Notional To"
						error={
							formik.touched.notionalTo && Boolean(formik.errors.notionalTo)
						}
						label="Notional To"
						alternative
					/>

					<Input
						id="spreadPercentil"
						name="spreadPercentil"
						data-testid="spreadPercentil-input"
						value={formik.values.spreadPercentil}
						onChange={onChange}
						placeholder="Spread Percentil"
						error={
							formik.touched.spreadPercentil &&
							Boolean(formik.errors.spreadPercentil)
						}
						label="Spread Percentil"
						alternative
					/>
					<Button color="success" onClick={() => formik.handleSubmit()}>
						Add Spread
					</Button>
				</Form>
			</Modal>
			<Button color="success" onClick={() => setOpen(true)}>
				Add Range
			</Button>
		</>
	);
}

export default AddRange;
