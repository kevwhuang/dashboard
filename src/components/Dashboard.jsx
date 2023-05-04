import React from 'react';
import { Slider, Switch } from '@mui/material';

import AudioPlayer from './AudioPlayer';
import Panel from './Panel';
import QualitySelector from './QualitySelector';
import css from '../css/modules/Dashboard.module.css';

function Dashboard(props) {
    const { notifications, options, setNotifications, setOptions } = props;

    const titles = {
        connection: 'Online Mode',
        volume: 'Audio Volume',
        quality: 'Audio Quality',
    };

    const descriptions = {
        connection: 'Are you connected to the Internet?',
        volume: 'Toggle the output level in increments of 10.',
        quality: 'Control the sound quality in the event of poor connectivity.',
    };

    const actions = {
        connection:
            <Switch
                defaultChecked
                name="connection"
                color="secondary"
                sx={{ marginBottom: '1rem' }}
                onChange={handleChangeConnection}
            />,
        volume:
            <Slider
                className={css.slider}
                marks
                defaultValue={0}
                min={0}
                max={100}
                step={10}
                color="secondary"
                valueLabelDisplay="auto"
                onChange={handleChangeVolume}
            />,
        quality:
            <QualitySelector
                notifications={notifications}
                options={options}
                setNotifications={setNotifications}
                setOptions={setOptions}
            />,
    };

    function handleChangeConnection() {
        const message = `Your device is set to ${options.connection ? 'offline' : 'online'}.`;

        setNotifications([...notifications, message]);
        setOptions({ ...options, connection: !options.connection });
    }

    function handleChangeVolume(e) {
        const audio = document.querySelector('audio');
        let message;

        if (e.target.value === 100) {
            message = 'Audio playback is at maximum volume.';
            setNotifications([...notifications, message]);
        } else if (e.target.value === 0) {
            message = 'Audio playback is muted.';
            setNotifications([...notifications, message]);
        }

        audio.play();
        audio.volume = e.target.value / 100;
        setOptions({ ...options, volume: e.target.value });
    }

    return (
        <section className={css.dashboard}>
            <AudioPlayer />
            <Panel
                title={titles.connection}
                description={descriptions.connection}
                action={actions.connection}
            >
            </Panel>
            <Panel
                title={titles.volume}
                description={descriptions.volume}
                action={actions.volume}
            >
            </Panel>
            <Panel
                title={titles.quality}
                description={descriptions.quality}
                action={actions.quality}
            >
            </Panel>
        </section>
    );
}

export default Dashboard;
