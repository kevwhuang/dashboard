import React from 'react';

function Error(): React.ReactElement {
    const link: string = 'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg';

    return <img className="error" src={link} alt="The page you are looking for is not found!" />;
}

export default Error;
