import React from 'react';

import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Notifications from '../components/Notifications';

interface Options {
    connection: boolean,
    volume: number,
    quality: string,
}

function Home(): React.ReactElement {
    const [isAuthenticated, setIsAuthenticated]: [boolean, Function] = React.useState(false);
    const [notifications, setNotifications]: [string[], Function] = React.useState([]);
    const [options, setOptions]: [Options, Function] = React.useState({
        connection: true,
        volume: 0,
        quality: 'high',
    });

    return (
        <main>
            {isAuthenticated
                ? <>
                    <Dashboard
                        notifications={notifications}
                        options={options}
                        setNotifications={setNotifications}
                        setOptions={setOptions}
                    />
                    <Notifications
                        notifications={notifications}
                        setNotifications={setNotifications}
                    />
                </>
                : <Login setIsAuthenticated={setIsAuthenticated} />}
        </main>
    );
}

export default Home;
