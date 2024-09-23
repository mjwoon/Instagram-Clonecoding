import React from 'react';
import { Link } from 'react-router-dom';

const ProfileEdit: React.FC = () => {
    return (
        <div>
            <h1>Profile Edit</h1>
            <Link to="/">Go back to Profile</Link>
        </div>
    );
}

export default ProfileEdit;
