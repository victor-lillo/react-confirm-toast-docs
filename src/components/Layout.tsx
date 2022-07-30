import { ReactNode } from 'react';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';


interface Props {
    children: ReactNode;
    navbarClass?: string;
    bodyClass?: string;
    contentClass?: string;
    footerClass?: string;
}

export default function Layout({ children, navbarClass, footerClass }: Props) {
    return (
        <>
            {/* <Navbar navbarClass={navbarClass} /> */}
            <main className='body'>{children}</main>
            <Footer footerClass={footerClass} />
        </>
    )
}
