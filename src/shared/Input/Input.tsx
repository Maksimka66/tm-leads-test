import { forwardRef, type InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { className = '', ...rest },
    ref
) {
    return <input {...rest} className={`${styles.field} ${className}`.trim()} ref={ref} />;
});

export default Input;

