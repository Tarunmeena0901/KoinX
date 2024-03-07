import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import FundamentalSection from './FundamentalSection';

export default function TabSection() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
      <Box sx={{ width: '100%' }}>
          <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
          >
              <Tab value="1" label={<Typography style={{fontSize: "18px", fontWeight:"bold"}}>Overview</Typography>} />
              <Tab value="2" label={<Typography style={{fontSize: "18px", fontWeight:"bold"}}>Fundamentals</Typography>} />
              <Tab value="3" label={<Typography style={{fontSize: "18px", fontWeight:"bold"}}>News Insights</Typography>} />
              <Tab value="4" label={<Typography style={{fontSize: "18px", fontWeight:"bold"}}>Sentiments</Typography>} />
              <Tab value="5" label={<Typography style={{fontSize: "18px", fontWeight:"bold"}}>Team</Typography>} />
              <Tab value="6" label={<Typography style={{fontSize: "18px", fontWeight:"bold"}}>Technicals</Typography>} />
              <Tab value="7" label={<Typography style={{fontSize: "18px", fontWeight:"bold"}}>Tokenomics</Typography>} />
          </Tabs>
      </Box>
  );
}