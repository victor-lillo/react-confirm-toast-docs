import React from 'react'

import s from './Footer.module.scss'

interface Props {
    footerClass?: string
}

function Footer({ footerClass }: Props) {
    return (
        <>
            <footer className={footerClass ? `${s.footer} ${s.footerClass}` : `${s.footer}`} >
                Footer
            </footer>
        </>
    );
}

export default Footer;