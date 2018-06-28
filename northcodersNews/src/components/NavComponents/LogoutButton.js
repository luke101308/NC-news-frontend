import React from 'react';

function LogoutButton({logout}) {
    return (
    <button className="Logout" onClick={logout}>Logout</button>
    );
}


export default LogoutButton