import React from 'react';
import { Navigate } from 'react-router';

export default function Redirect() {

    return (
        <div>
            <Navigate to="/rooms/all" />
        </div>
    );
};


