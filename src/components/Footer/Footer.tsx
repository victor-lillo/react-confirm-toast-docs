import React from 'react'

import s from './Footer.module.scss'
import GitHub from '@components/icons/GitHub';


function Footer() {
    return (
        <>
            <footer className={s.footer} >
                <div>
                    <h3>Developed by <a target='_blank' href='https://github.com/fentosv' rel='noopener noreferrer'>Fentos</a></h3>
                    <h3>Any issues? <a target='_blank' href='https://github.com/fentosv/react-confirm-toast/issues' rel='noopener noreferrer'>Report them here</a></h3>
                </div>
                <a target='_blank' href='https://github.com/fentosv/react-confirm-toast' rel='noopener noreferrer'>
                    <GitHub />
                </a>
            </footer>
        </>
    );
}

export default Footer;