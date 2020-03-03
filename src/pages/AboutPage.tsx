import React from 'react';

import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni impedit id commodi libero incidunt maxime quae facere, labore soluta error?</p>
            <button
                className="btn"
                onClick={() => history.push('/')}
            >Back to to-do List</button>
        </>
    );
}