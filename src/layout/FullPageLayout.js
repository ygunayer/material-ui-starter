import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import s from './style.styl';

const FullPageLayout = ({ children }) => (
    <div>
        <Header />
        <Body className={s['full-layout']}>{children}</Body>
        <Footer />
    </div>
);

export default FullPageLayout;
