import React from 'react';
import { Button, Container, Input } from './styles';
import { VerticalDivider } from '@Components/VerticalDivider';
import { Report } from '@Types/report';
import { currencyMask, onlyNumbers, parseCurrency } from '@Helpers';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import toDate from 'date-fns/toDate';
import * as yup from 'yup';

const today = format(new Date(), 'dd/MM/yyyy');
const defaultValues = {
    category: '',
    date: today,
    name: '',
    value: 0
};
const validationSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    category: yup.string().required('Campo obrigatório'),
    date: yup.string().required('Campo obrigatório'),
    value: yup.number().moreThan(0, 'Campo obrigatorio')
});

export interface IProps {
    className?: string;
    handleSubmit: (values: Report) => void;
    disabled?: boolean;
}

export function AddReportBar({ className, disabled, handleSubmit }: IProps) {
    const [values, setValues] = React.useState<Report>(defaultValues);
    const isInvalid = React.useMemo(() => {
        return !validationSchema.isValidSync(values);
    }, [values]);

    const onSubmit = React.useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log('Hello!');
            handleSubmit({ ...values });
        },
        [values]
    );

    return (
        <Container onSubmit={onSubmit} className={className ?? ''}>
            <Input
                style={{ flexGrow: 2 }}
                value={values.name}
                onChange={(event) =>
                    setValues({ ...values, name: event.target.value })
                }
            />
            <VerticalDivider />

            <Input
                value={values.category}
                onChange={(event) =>
                    setValues({ ...values, category: event.target.value })
                }
            />
            <VerticalDivider />

            <Input
                value={values.date}
                onChange={(event) =>
                    setValues({ ...values, date: event.target.value })
                }
            />
            <VerticalDivider />

            <Input
                value={`R$ ${currencyMask(values.value)}`}
                onChange={(event) =>
                    setValues({
                        ...values,
                        value: parseCurrency(event.target.value)
                    })
                }
            />

            <Button type="submit" disabled={isInvalid || !!disabled}>
                Adicionar
            </Button>
        </Container>
    );
}
