import palette from "./colorPalette";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    light: true;
    dark: true;
    neutral: true;
  }

  interface ButtonClasses {
    textNeutral: string;
    outlinedNeutral: string;
    containedNeutral: string;
  }
}

const componentOverrides = {
  MuiCssBaseline: {
    styleOverrides: `
    /* nunito-200 - latin */
      @font-face {
        font-family: 'Nunito-ExtraLight';
        font-style: normal;
        font-display:swap;
        font-weight: 200;
        src: 
            url('nunito-v24-latin-200.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('nunito-v24-latin-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* nunito-300 - latin */
      @font-face {
        font-family: 'Nunito-Light';
        font-style: normal;
        font-display:swap;
        font-weight: 300;
        src: 
            url('nunito-v24-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('nunito-v24-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* nunito-regular - latin */
      @font-face {
        font-family: 'Nunito-Regular';
        font-style: normal;
        font-display:swap;
        font-weight: 400;
        src: 
            url('nunito-v24-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('nunito-v24-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
   
      /* nunito-600 - latin */
      @font-face {
        font-family: 'Nunito-SemiBold';
        font-style: normal;
        font-display:swap;
        font-weight: 600;
        src: 
            url('nunito-v24-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('nunito-v24-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* nunito-700 - latin */
      @font-face {
        font-family: 'Nunito-Bold';
        font-style: normal;
        font-display:swap;
        font-weight: 700;
        src: url('nunito-v24-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('nunito-v24-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* nunito-800 - latin */
      @font-face {
        font-family: 'Nunito-ExtraBold';
        font-style: normal;
        font-display:swap;
        font-weight: 800;
        src: url('nunito-v24-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('nunito-v24-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      
      html {
        font-family: Nunito-Regular, sans-serif;
      },
      body: {
        background-color: ${palette.background?.default};
      }
    `,
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        lineHeight: 2,
        padding: 0,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        lineHeight: 2,
        padding: "0.25rem 1.5rem",
        boxShadow: "none",
      },
      sizeSmall: {
        fontSize: "0.688rem",
        padding: "0 10px",
      },
      textInherit: {
        fontWeight: 700,
        textTransform: "none",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
      containedNeutral: {
        backgroundColor: palette.neutral,
        color: palette.primary,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontSize: "1.25rem",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        minWidth: 160,
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        height: "auto",
        marginTop: "0 !important",
        fontSize: "0.75rem",
        fontWeight: 600,
        textTransform: "uppercase",
      },
      underline: {
        "&:before": {
          content: null,
          border: 0,
        },
        "&:after": {
          content: null,
          border: 0,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        position: "inherit",
        transform: "none",
        fontSize: "0.75rem",
        fontWeight: "bold",
        padding: "0 0.25rem",
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: palette.primary,
        fontSize: "0.5rem",
        padding: "0.25rem",
        marginRight: 0,
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        fontFamily: "Nunito-Bold",
        fontSize: "0.688rem", // 13px
        lineHeight: "1rem", // 16px
        borderColor: palette.background?.default,
        color: palette.text?.secondary,
        padding: "0 10px",
        height: "28px",
        textTransform: "uppercase",
      },
      body: {
        padding: "0 10px",
      },
    },
  },
};
export default componentOverrides;
