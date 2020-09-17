import React from 'react';
import Logo from '../components/layout/partials/Logo';

const Splash = () => {

    return (
        <div className="animation-logo splash-centered background-splash">
            <Logo className="brand-animation" sizeH={250} sizeW={250} />
        </div>
    );
}

export default Splash;