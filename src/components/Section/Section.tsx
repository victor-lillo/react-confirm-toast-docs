import { ReactNode } from 'react';
import classnames from 'classnames-creator'

import styles from './Section.module.scss'

interface Props {
    children: ReactNode;
    width?: 'standard' | 'full';
}

// Just for documentation
enum Width {
    standard = '60%',
    full = '100%',
}

export default function Section({ children, width = 'standard', ...props }: Props) {

    const classes = classnames(
        styles.section,
        styles[width]
    )

    return (
        <section
            className={classes}
            {...props}
        >
            {children}
        </section>
    )
}
