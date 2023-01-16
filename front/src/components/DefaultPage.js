import React from 'react';
import { Link } from 'react-router-dom';

export function DefaultPage() {

    return (
        <div>
            <p id="zero-state">
                Welcome to Collab-art community 
                <br />
                .
            </p>

            <p id="zero-links">
                Navigate to <Link to={'/auth'} >Auth</Link>
            </p>
        </div>

    )
}