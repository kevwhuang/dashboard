import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';

function QualitySelector(props) {
    const { notifications, options, setNotifications, setOptions } = props;

    function handleChangeQuality(e) {
        const message = `Audio quality is set to ${e.target.value}.`;

        setNotifications([...notifications, message]);
        setOptions({ ...options, quality: e.target.value });
    }

    return (
        <FormControl fullWidth>
            <Select
                color="secondary"
                value={options.quality}
                onChange={handleChangeQuality}
            >
                <MenuItem value={'high'}>High</MenuItem>
                <MenuItem value={'normal'}>Normal</MenuItem>
                <MenuItem value={'low'}>Low</MenuItem>
            </Select>
        </FormControl>
    );
}

export default QualitySelector;
