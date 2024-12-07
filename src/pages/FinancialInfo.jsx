
import img2 from '../assets/img2.jpeg'
import Typography from '@mui/material/Typography'
import img3 from '../assets/img3.jpeg'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const steps = [
    {id:1,step:"Set clear financial goals",},
    {id:2,step:"Create and follow a budget",},
    {id:3,step:"Build an emergency fund",},
    {id:4,step:"Understand and build credit",},
    {id:5, step:"Invest early and diversity",},
    {id:6, step:"Plan for retirement",},
    {id:7,step:"Get adequate insurance",},
    {id:8,step:"Negotiate salary and bills",},
    {id:9, step:"Limit high-interest debt",},
    {id:10, step:"Seek financial education",},
    {id:11, step:"Plan for life changes",},
    {id:12,step:"Keep legal and financial documents in order"}
]

const FinancialInfo = () => {
  return (
    <div >
        
        
    <Box display="flex" justifyContent="space-evenly" alignItems="flex-start" marginTop="40px" gap="220px">
        <div style={{display:'flex',flexDirection:'column',marginLeft:'120px'}}>
        <img src={img2} style={{ width: '500px', height: '505px' }} ></img>
        <Card style={{ width: '400px' }} sx={{ 
    width: '400px', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)', 
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)', 
    },
  }}>
            <CardMedia 
            component="img"
            
            height="200px"
            image={img3}
            >
                
            </CardMedia>
            <CardContent>
                <Typography>
                
                Power of compounding refers to capability of an investment to generate earnings, not only on the principal amount, by also on the interest earned over time. 
                <a href='https://www.etmoney.com/learn/personal-finance/what-is-power-of-compounding-meaning-benefit/'>Read More</a>



                </Typography>
            </CardContent>
        </Card>
        </div>
        <Timeline position="alternate">
        {steps.map((item,index) => (
      <TimelineItem key={item.id}>
        <TimelineSeparator>
          <TimelineDot />
          {index < steps.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent><Typography variant="body2">{item.step}</Typography></TimelineContent>
      </TimelineItem>
            ))}
        </Timeline>
        </Box>
        </div>
    
  )
}

export default FinancialInfo 