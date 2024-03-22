import React, { useContext } from 'react';

import { AssetContext } from '../App';

const SonGoku = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h4>this is son goku</h4>
            <h5>his gift : {gift}</h5>
        </div>
    );
};

export default SonGoku;