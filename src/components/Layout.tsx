import { ReactNode } from 'react';

import Footer from '@components/Footer';

interface Props {
    children: ReactNode;
}

export default function Layout({ children, }: Props) {
    return (
        <>
            <main className='body'>{children}</main>
            <Footer />
        </>
    )
}
