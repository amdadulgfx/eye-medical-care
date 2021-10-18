import React from 'react';

const NotFound = () => {
    const errorStyle = {
        height: '700px',

    }
    return (
        <div style={{ backgroundColor: "#070C1F" }} className='d-flex justify-content-center'>
            <img style={errorStyle} src="https://i.ibb.co/Hx1StGW/2066988-ai.jpg" alt="404 error! page not found" />
        </div>
    );
};

export default NotFound;