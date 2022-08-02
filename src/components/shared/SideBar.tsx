import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import GlobalContext from "../core/GlobalContext";
import MuiImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import Dash from "../../images/dashboard.svg";
import Employees from "../../images/users.svg";
import Device from "../../images/devices.svg";
import Report from "../../images/reporting.svg"
import { NavLink } from "react-router-dom";
import Link from "@mui/material/Link";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ebylogo1 from "../../images/ebylogo1.png"
import Avatar from "@mui/material/Avatar";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Typography from "@mui/material/Typography";
import { Height, Margin } from "@mui/icons-material";


const drawerWidth = 100;

const List = styled(MuiImageList, { name: "ImageList" })(({ theme }) => ({
       
  "& .ListItem-root": {
    color: theme.palette.primary.main,
    textAlign: "left",
    justifyContent: "left",
    width:"14.5rem",
  },
  "& .Link-root": {
    textDecoration: "none",
    fontSize: "0.4rem",
 "&:hover": {
      textDecorationLine: "none",
      },
      },
}));

const Drawer = styled(MuiDrawer)(() => ({
  width: drawerWidth,
  
}));

const DrawerHeader = styled("div", { name: "DrawerHeader" })(({ theme }) => ({
  display: "flex",
  height: "90px",
  alignItems: "center",
  backgroundColor:"#F7F7F7",
  justifyContent: "center",
  padding: theme.spacing(3, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const pages = [
  {
    url: "Dashboard",
    name: "Dashboard",
    image: Dash,
    },
  {
    url: "Employees",
    name: "Employees",
    image: Employees ,
 },
  {
    url: "Devices",
    name: "Devices",
    image:  Device,
  },
  {
      url: "Reporting",
      name: "Reporting",
      image: Report,
    },
   ];


const SideBar: React.FC = () => {
  const { user } = useContext(GlobalContext);

  const [activeIndex, setActiveIndex] = React.useState(0);


  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const getImage = (imageName: any) => {
    return <img src={imageName} />;
     };

     const DrawerBody = styled("div", { name: "DrawerBody" })(({ theme }) => ({
      display: "flex",
      flex:1,
      flexDirection:"row",
      alignItem:"center",
      width: drawerWidth,
      justifyContent: "space-evenly",
      flexGrow:2,
      
      
      // // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }));

     const ImageList = styled("div", { name: "ImageList" })(({ theme }) => ({
    
      display:"flex",
      flex:0.5,
      flexDirection:"column",
      justifyContent: "center",
      textAlign:"left",
      gap:2,
      marginLeft:140,
      padding:"center",
    
     
 
    // // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    }));

 
return (
  
   <Drawer
      className="SideBar"
      data-aqa="side-bar-component"
      variant="permanent">
    
    <Box  display={"flex"} flex={1} flexDirection="column" bgcolor={"#FFFFFF"}  
     sx={{
      paddingLeft:1,
      paddingTop:1,
      paddingBottom:1,
      margin:"1px auto"
    }} >
      <Box flex={0.1}  width="17vw" boxShadow={"0px 0px 0px 1px #DFE0E2"} >
       
      <DrawerHeader>
        <Link to="/" component={NavLink}>
          <img src={ebylogo1} alt="Eby"  height="34" width="220" />
        </Link>
      </DrawerHeader>
      </Box>
      <Box  flex={0.8}  width="17vw" bgcolor={"#F7F7F7"}  boxShadow={"0px 0px 0px 1px #DFE0E2"}>
      <List sx={{
        marginTop:0,
        marginLeft:0,
        }}>
         <DrawerBody>
          <ImageList>
          {pages.map((page,index) => (
          <ListItem 
          sx={{ 
            paddingLeft:4,
            paddingTop:2,
            marginLeft:-1,
             backgroundColor: activeIndex==index ? '#DFE0E2' : '#F7F7F7',}}
             onClick={() => handleClick(index)}
             to={"/" + page.url} component={NavLink}
             button key={page.url} >
           <Link 
                sx={{ color: activeIndex==index ? '#E1383F' : '#363B64'}}
                onClick={() => handleClick(index)}>
                {getImage(page.image)}
          
           <ListItemText 
                 sx={{
                  my:0,
                  marginTop:-3,
                  marginLeft:5,
              }}
              primaryTypographyProps={{
                fontSize: 12,
                fontWeight:"bold",
                
                }}
                 primary={page.name} />
           </Link>
        </ListItem>
    ))}
     </ImageList>
  </DrawerBody>
  </List>
      </Box>
      <Box flex={0.1}  width="17vw" alignItems={"center"} bgcolor={"#F7F7F7"}  boxShadow={"0px 0px 0px 1px #DFE0E2"}>
      <footer>
       <Link to="/profile" component={NavLink}>
           <Avatar  sx={{ bgcolor:"#E1383F", 
             borderRadius: "4px",
              marginLeft:"30px",
              marginTop:"30px",
             }} 
              variant="rounded">
              <ManageAccountsIcon />
           </Avatar>
           <Typography  
            sx={{ color: "#F80D38", 
            fontSize: "12px" ,
            fontStyle:"italic",
            marginLeft:"80px",
            marginTop:"-45px" ,
            fontWeight: "bold",
           }}> 
            Username
           </Typography>
            <Typography  
              sx={{ color: "#343434", 
              fontSize: "10px" ,
              fontFamily:"Poppins-Regular",
              marginLeft:"80px",
              marginTop:"0px",
              marginBottom:"10px",
              fontWeight: "bold",
             }}> 
              Admin | America
              </Typography>
            </Link>
            </footer>
      </Box>
    </Box>

   </Drawer>
 );
};

export default SideBar;
