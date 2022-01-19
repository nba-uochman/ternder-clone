import React, { Fragment } from 'react';
import Header from "./Header";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
    return (
        <Fragment>
            <Header />
            <TinderCards />
            <SwipeButtons />
        </Fragment>

    );
}

export default App;
