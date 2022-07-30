import { ReactNode } from 'react';
import classnames from 'classnames-creator'

import styles from './Section.module.scss'

interface Props {
    children: ReactNode;
    width?: 'standard' | 'full';
    background?: 'black';
    flexRow?: boolean;
}

// Just for documentation
enum Width {
    standard = '60%',
    full = '100%',
}

export default function Section({ children, background, flexRow = false, width = 'standard', ...props }: Props) {

    const classes = classnames(
        styles.section,
        styles[width],
        {
            [styles['flexRow']]: flexRow,
            [styles['black']]: background === 'black',
        }
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
