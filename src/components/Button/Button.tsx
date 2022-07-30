import React from 'react';
// import { forwardRef } from 'react';
import classnames from 'classnames-creator'

import styles from './Button.module.scss'

// This allows us to use any button-specific props: disabled, type, name, etc
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'red' | 'purple'
    mode?: 'squared'
    selected?: boolean
}

export default function Button({ color, mode, selected, children, ...props }: Props) {

    const classes = classnames(
        styles.button,
        {
            [styles[color ?? '']]: color,
            [styles[mode ?? '']]: mode,
            [styles['selected']]: selected

        },
    )

    return (

        <button
            className={classes}
            {...props}
        >
            {children}
        </button>

    )
}
