import React from 'react';
import { Button, TextField } from '@mui/material';

import css from '../css/modules/Login.module.css';

function Login(props) {
    const { setIsAuthenticated } = props;
    
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.username === 'admin' && formData.password === 'password') {
            alert('You are now logged in.');
            setIsAuthenticated(true);
        } else {
            alert('Unauthorized login. Please try again.');
        }
    }

    return (
        <form className={css.login} onSubmit={handleSubmit}>
            <TextField
                fullWidth
                required
                variant="filled"
                label="Username"
                name="username"
                placeholder="admin"
                size="large"
                color="secondary"
                defaultValue={formData.username || ''}
                inputProps={{ maxLength: 20 }}
                sx={{ marginBottom: '1rem' }}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                required
                variant="filled"
                type="password"
                label="Password"
                name="password"
                placeholder="password"
                size="large"
                color="secondary"
                defaultValue={formData.password || ''}
                inputProps={{ maxLength: 20 }}
                sx={{ marginBottom: '1rem' }}
                onChange={handleChange}
            />
            <Button
                fullWidth
                variant="contained"
                type="submit"
                size="large"
                sx={{ background: '#3f51b4' }}
            >
                Login
            </Button>
        </form >
    );
}

export default Login;
