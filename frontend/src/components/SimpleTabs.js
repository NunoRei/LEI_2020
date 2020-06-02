import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Profilepic from '../profile.png';
import Receita from '../components/Receita';
import Interactions from '../components/Interactions';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
        <Paper square>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
            {value === index && (
                <Box p={3}>
                <Typography>{children}</Typography>
                </Box>
            )}
            </div>
        </Paper>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(state,onMedRemove,onMedSubmit) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
      <Paper square>
            <Tabs 
                centered
                value={value} 
                onChange={handleChange} 
                aria-label="simple tabs example" 
            >
            <Tab label="Patient Information" {...a11yProps(0)} />
            <Tab label="Prescription" {...a11yProps(1)} />
            <Tab label="Interactions" {...a11yProps(2)} />
            </Tabs>
        </Paper>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div class="w3-container w3-card w3-sand w3-content">
                <p><b>Patient Information</b></p>
                <div class="w3-col s1 w3-padding-16">
                  <img 
                    src={Profilepic}
                    alt=""
                    width="100" 
                    height="110"
                    class="w3-circle"
                  />
                </div>
                  
                  <div class="w3-col s3 " style = {{paddingLeft: '50px'}} >
                      <p><b>Local Number: </b>{state.local_number}</p>
                      <p><b>Patient Number: </b>{state.Number}</p>
                      <p><b>Name: </b>{state.Name}</p>
                      <p><b>Sex: </b>{state.Sex}</p>
                      <p><b>Birth: </b>{state.Birth}</p>
                      <p><b>Citizen Id: </b>{state.CC_id}</p>
                  </div>
                  <div class="w3-col s3 " style = {{paddingLeft: '50px'}} >
                      <p><b>SNS: </b>{state.SNS}</p>
                      <p><b>Address: </b>{state.Address}</p>
                      <p><b>Postal Code: </b>{state.PostalCode}</p>
                      <p><b>Locality: </b>{state.Localidade}</p>
                      <p><b>Phone Number: </b>{state.PhoneNumber}</p>
                      <p><b>Email: </b>{state.Email}</p>
                  </div>
                      
                  <div class="w3-col s3 " style = {{paddingLeft: '50px'}} >
                      <p><b>Last Updated on: </b>{state.data_atualizacao}</p>
                      <p><b>Integrated on: </b>{state.data_insercao}</p>
                      
                </div>
                <div class="w3-col s3 " style = {{paddingLeft: '50px'}} >
                    <p><b>Observations: </b></p>
                    <div class="w3-panel w3-white">
                    {state.OBS}
                    </div>
                </div>
              
              </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Receita value={state.meds} onMedRemove={onMedRemove} onMedSubmit={onMedSubmit}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Interactions value={state.interactions} />
      </TabPanel>
    </div>
  );
}