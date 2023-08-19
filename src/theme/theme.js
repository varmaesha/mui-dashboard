import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {},
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          ".MuiButtonBase-root.active": {
            backgroundColor: "#00f",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#322d4b",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#28243d",
        },
      },
    },
    // sidebar
    MuiPaper: {
      styleOverrides: {
        root: {
          color: "white",
          ".MuiBox-root": {
            backgroundColor: "#28243d",
         
          },
        },
      },
    },
    MuiBox:{
        styleOverrides:{
            root:{
                color:'red'
            }
        }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: "#322d4b",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    // MuiStack:{
    //     styleOverrides:{
    //         root:{
    //             color:'grey'
    //         }
    //     }
    // }
  },
});
