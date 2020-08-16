import color from '../constants/palette';
const drawerWidth = 320;
const styles = (theme) => ({ 
    darkBackground:{
        background: color.sidebarBackground,
        // color:"#fff"
    },
    divider:{
        backgroundColor:color.sidebarDivider
    },
    drawer: {
        width: drawerWidth,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
    },
    listButton:{
        '&:hover': {
            background: color.sidebarListItemHover,
            color: color.sidebarTextHover,
            '& .MuiListItemIcon-root':{
                color: color.sidebarTextHover
            },
            '& .MuiIconButton-root':{
                color: color.sidebarTextHover
            }
        }
    },
    listItem:{
        color:color.sidebarText,  
        '& .MuiListItemIcon-root':{
            color: color.sidebarText
        },
        '& .MuiIconButton-root':{
            color: color.sidebarText
        }
    },
});

export default styles