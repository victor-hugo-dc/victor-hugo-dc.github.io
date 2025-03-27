import { Box } from '@mui/material';
import React from 'react';
import { Grid } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '50vh',
                bgcolor: '#000',
            }}
        >
            <Grid
                visible={true}
                height="80"
                width="80"
                color="#fff"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
            />
        </Box>
    )
}

export default Loader;