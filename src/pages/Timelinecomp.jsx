import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
  } from '@mui/lab'

  import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Typography } from '@mui/material';


const events = [
    {
        id:1,
        
        data:"Facility Limits"
    },{
        id:2,
        rupees:"",
        date:13,
    }
]

const Timelinecomp = () => {
  return (

    <Timeline position="alternate" sx={{ flexDirection: 'row', overflowX: 'auto', display: 'flex' }}>
        
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Facility Limits
        </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='primary'>
                    <CurrencyRupeeIcon/>
                </TimelineDot>
                <TimelineConnector 
                  
                 
                />
                
            </TimelineSeparator>
            <TimelineContent>
                <Typography sx={{ m: '18px 0' }}
          align="left"
          variant="body2"
          color="text.secondary">
                    200K
                </Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          100K
        </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>
                    <CurrencyRupeeIcon/>
                </TimelineDot>
                <TimelineConnector 
                />
            </TimelineSeparator>
            <TimelineContent>
                <Typography sx={{ m: '18px 0' }}
          align="left"
          variant="body2"
          color="text.secondary">
                    Available Funds
                </Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Total number of loans distributed
        </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>
                    <CurrencyRupeeIcon/>
                </TimelineDot>
                <TimelineConnector 
                />
            </TimelineSeparator>
            <TimelineContent>
                <Typography sx={{ m: '18px 0' }}
          align="left"
          variant="body2"
          color="text.secondary">
                    20k
                </Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          50K
        </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>
                    <CurrencyRupeeIcon/>
                </TimelineDot>
                <TimelineConnector />
                
            </TimelineSeparator>
            <TimelineContent>
                <Typography sx={{ m: '18px 0' }}
          align="left"
          variant="body2"
          color="text.secondary">
                    Total values of loan distributed
                </Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Interest Earnings
        </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>
                    <CurrencyRupeeIcon/>
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                <Typography sx={{ m: '18px 0' }}
          align="left"
          variant="body2"
          color="text.secondary">
                    XK
                </Typography>
            </TimelineContent>
        </TimelineItem>
        
    </Timeline>
  )
}

export default Timelinecomp