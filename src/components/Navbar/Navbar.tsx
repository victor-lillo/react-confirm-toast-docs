import React from 'react'
import Link from 'next/link'
// import Image from 'next/image';
import Image from 'next/future/image'
import { useRouter } from 'next/router';

import classnames from 'classnames-creator'

import logo from '@public/logo.png';
import s from './Navbar.module.scss'

interface Props {
    navbarClass?: string
}

function Navbar({ navbarClass }: Props) {

    const router = useRouter();

    return (
        <React.Fragment>
            <header
                className={
                    classnames(
                        s.navbar,
                        {
                            [s[navbarClass ?? '']]: navbarClass
                        }
                    )}
            >

                <div className={s.navbar_container}>

                    <Link href='/'>
                        <a>
                            <Image
                                className={s.navbar_icon_img}
                                src={logo}
                                alt='Logo'
                                title='Logo'
                                priority
                            />
                        </a>
                    </Link>

                    <Link href='/items'>
                        {/* Use bracket notation for BEM implementation */}
                        <a
                            className={
                                classnames(
                                    s.navlink,
                                    {
                                        [s['navlink--active']]: router.pathname == '/items'
                                    }
                                )}
                        >
                            Items
                        </a>
                    </Link>

                    <Link href='/categories'>
                        <a
                            className={
                                classnames(
                                    s.navlink,
                                    {
                                        [s['navlink--active']]: router.pathname == '/categories'
                                    }
                                )}
                        >
                            Categories
                        </a>
                    </Link>

                </div >

            </header >
        </React.Fragment >

    );
}

export default Navbar;