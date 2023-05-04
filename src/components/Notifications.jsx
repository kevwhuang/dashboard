import React from 'react';
import { Delete } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';

import css from '../css/modules/Notifications.module.css';

function Notifications(props) {
    const { notifications, setNotifications } = props;

    function handleClick(id) {
        const filtered = notifications.filter((e, i) => i !== id);

        setNotifications(filtered);
    }

    return (
        <section className={css.notifications}>
            <Typography gutterBottom variant="h4">Notifications</Typography>
            <ul>
                {notifications.map((msg, id) =>
                    <li className={css.message} key={uuid()}>
                        <Delete
                            className={css.delete}
                            fontSize="small"
                            onClick={() => handleClick(id)}
                        />
                        <Typography
                            variant="body2"
                            sx={{ display: 'inline' }}
                        >
                            {msg}
                        </Typography>
                    </li>
                )}
            </ul>
        </section>
    );
}

export default Notifications;
