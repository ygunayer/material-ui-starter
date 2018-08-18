import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import s from './style.styl';

const DefaultLayout = ({ children }) => (
    <React.Fragment>
        <Header />
        <Body className={s['layout']}>{children}</Body>
        <Footer />
    </React.Fragment>
);

export default DefaultLayout;
