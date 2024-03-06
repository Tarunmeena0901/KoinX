import { Typography } from "@mui/material";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ChartRange() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div className="flex justify-between items-center p-5">
            <Typography fontSize={"20px"} fontWeight={"bold"}>Bitcoin Price Chart (USD)</Typography>
            <div>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="primary"
                        aria-label="secondary tabs"
                    >
                        <Tab value="1" label="1H" />
                        <Tab value="2" label="24H" />
                        <Tab value="3" label="1W" />
                        <Tab value="4" label="1M" />
                        <Tab value="5" label="3M" />
                        <Tab value="6" label="6M" />
                        <Tab value="7" label="1Y" />
                        <Tab value="8" label="All" />
                    </Tabs>
                </Box>
            </div>
        </div>
    );
}