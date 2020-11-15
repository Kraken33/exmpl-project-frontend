import { WrappedFieldProps } from 'redux-form';
import { FormItemProps } from 'antd/lib/form';

export interface FControlCode extends FormItemProps, WrappedFieldProps {
    type?: 'input' | 'textarea';
};