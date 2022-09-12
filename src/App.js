///Importing MUI components and other components needed for react
import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

///APP
function App() {
  return (
    <div className="App">
    <BasicCard />
    </div>
  );
}

// Card 
function BasicCard (){
  return (
    <div className="Card">
      <CardDetails/>
    </div>
  );
}

//function containing all the info to be displayed in the cards
function CardDetails(){
  // Array of objects containing information for various plans and their benefits are listed below
  const list  = [
    {
      plan: "FREE",
      price : "$0",
      term: "month",
      users: "Single User",
      storage: "5GB Storage",
      PublicProjects: "Unlimited Public Projects",
      Access: "Community Access",
      PrivateProjects: "Unlimited Private Projects",
      PhoneSupport: "Dedicated Phone Support",
      Subdomains: "Free Subdomain", 
      StatusReports: "Monthly Status Reports"
    },
    {
      plan: "PLUS",
      price : "$9",
      term: "month",
      users: "5 Users",
      storage: "50GB Storage",
      PublicProjects: "Unlimited Public Projects",
      Access: "Community Access",
      PrivateProjects: "Unlimited Private Projects",
      PhoneSupport: "Dedicated Phone Support",
      Subdomains: "Free Subdomain", 
      StatusReports: "Monthly Status Reports"
    },
    {
      plan: "PRO",
      price : "$49",
      term: "month",
      users: "Unlimited Users",
      storage: "150GB Storage",
      PublicProjects: "Unlimited Public Projects",
      Access: "Community Access",
      PrivateProjects: "Unlimited Private Projects",
      PhoneSupport: "Dedicated Phone Support",
      Subdomains: "Unlimited Free Subdomains", 
      StatusReports: "Monthly Status Reports"
    },
  ];
  return(
    <div className="card-list">
    {/* Here , we will map the above data to the parameters in CardLayout Function */}
      {list.map(data => (
        <CardLayout info = {data} />
      ))}
    </div>
  )
}

// Creating the required layout using Bootstrap, MUI etc.
function CardLayout({info}) {
return(

      <Card variant="outlined"  className="card">
      {/* Card Content */}
        <CardContent >
        {/* header  div containing price and plan and validity */}
          <div className="header">
            <Typography className="card-title text-muted" variant="h6" color="text.secondary" gutterBottom>
              {info.plan}
            </Typography>
            <Typography className="price" variant="h3" component="div">
              {info.price}<span className="period">/{info.term}</span>
            </Typography>
          </div>

          {/* Tp display the line seperating header and list */}
          <hr /> 

         {/* Listing items to be displayed  for the plans*/}
          <List >
          
            <ListItem  disablePadding>
              <ListItemIcon>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText primary={info.users} />
            </ListItem>
           
            <ListItem disablePadding>
              <ListItemIcon>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText primary={info.storage} />
            </ListItem>
           
              <ListItem disablePadding>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary={info.PublicProjects} />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>
                <DoneIcon />
                </ListItemIcon>
                <ListItemText primary={info.Access} />
              </ListItem>
             {/* Conditional rendering to match the icons and  */}
              <ListItem className= {info.plan === "FREE" ? "text-muted" : null} disablePadding>
                <ListItemIcon>
                {info.plan === "FREE" ? <ClearIcon /> : <DoneIcon /> }
                </ListItemIcon>
                <ListItemText primary={info.PrivateProjects} />
              </ListItem>
               
              <ListItem className= {info.plan === "FREE" ? "text-muted" : null} disablePadding>
                  <ListItemIcon>
                  {info.plan === "FREE" ? <ClearIcon /> : <DoneIcon /> }
                  </ListItemIcon>
                  <ListItemText primary={info.PhoneSupport} />
              </ListItem>

              <ListItem className= {info.plan === "FREE" ? "text-muted" : null} disablePadding>
                  <ListItemIcon>
                  {info.plan === "FREE" ? <ClearIcon /> : <DoneIcon /> }
                  </ListItemIcon>
                  <ListItemText primary={info.Subdomains} />
              </ListItem>

              <ListItem className= {info.plan === "FREE" || info.plan === "PLUS" ? "text-muted" : null} disablePadding>
                  <ListItemIcon>
                 {info.plan === "FREE" || info.plan === "PLUS"   ? <ClearIcon /> : <DoneIcon /> }
                  </ListItemIcon>
                  <ListItemText primary={info.StatusReports} />
              </ListItem>
            </List>
        </CardContent>
        <CardActions>
          <button className="btn btn-primary text-uppercase" style={{ width: '100%' }}>BUTTON</button>
        </CardActions>
      </Card>
 
);
}

export default App;



