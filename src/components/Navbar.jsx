import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ImageIcon from '@material-ui/icons/Image';
import ContactsIcon from '@material-ui/icons/Contacts';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: '#212529'}}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab label="Home"  value="/" icon={<HomeIcon fontSize="large"/>} component={Link} to={'/'}/>
          <Tab label="About Project"  value="/about" icon={<InfoIcon fontSize="large"/>} component={Link} to={'/about'}/>
          <Tab label="Gallery"  value="/gallery" icon={<ImageIcon fontSize="large"/>} component={Link} to={'/gallery'}/>
          <Tab label="Contacts"  value="/contacts" icon={<ContactsIcon fontSize="large"/>} component={Link} to={'/contacts'}/>
        </Tabs>
      </AppBar>

    </div>
  );
}

// import React, { Component } from 'react'
// import { ReactNavbar } from "react-responsive-animate-navbar";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { withRouter } from "react-router";
// import Home from './Home';
// import About from './About';


// class Navbar extends Component {
//   render() {
    
//     return (
//       <>
//         <ReactNavbar
//           color="rgb(25, 25, 25)"
//           logo="https://svgshare.com/i/KHh.svg"
//           menu={[
//             { name: "HOME", to: "/", component: Home},
//             { name: "ABOUT US", to: "/about", component: About },
//             { name: "GALLERY", to: "/gallery" },
//             { name: "CONTACTS", to: "/contacts" },
//           ]}
//           social={[
//             {
//               name: "Linkedin",
//               url: "#",
//               icon: ["fab", "linkedin-in"],
//             },
//             {
//               name: "Facebook",
//               url: "#",
//               icon: ["fab", "facebook-f"],
//             },
//             {
//               name: "Instagram",
//               url: "#",
//               icon: ["fab", "instagram"],
//             },
//             {
//               name: "Twitter",
//               url: "#",
//               icon: ["fab", "twitter"],
//             },
//           ]}
//         />
//     </>
//     );
//   }
// }

// export default withRouter(Navbar);

