import React from 'react';
import { Box } from '@mui/material';

const Page404 = () => {
    return (
        <Box sx={{ width: "650px", maxWidth: '80%', margin: "auto" }}>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto">
                <div className="mb-8 prose leading-6 text-justify text-gray-600 dark:text-gray-400">
                    <p>
                        Could not find this page.
                    </p>
                </div>
                <hr className="hr" />
            </div>
        </Box>
    )
}

export default Page404;
