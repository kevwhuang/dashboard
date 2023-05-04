import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Panel(props) {
    const { title, description, action } = props;

    return (
        <Card variant="outlined" sx={{ padding: '1rem', paddingBottom: '2rem' }}>
            <CardContent>
                <Typography gutterBottom variant="h4">
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            {action}
        </Card>
    );
}

export default Panel;
