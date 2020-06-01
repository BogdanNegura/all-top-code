import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-tap-highlight-color: transparent;
    };

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    };

    ::selection {
        background: var(--primary-lighter); /* WebKit/Blink Browsers */
      }

    *:focus {
        outline: 0;
        outline: none;
    }

    html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      line-height: 1.15;
      @media ${(props) => props.theme.mediaQueries.largest} {
          font-size: 60%;
      }
      @media ${(props) => props.theme.mediaQueries.large} {
          font-size: 57.5%;
      }
      @media ${(props) => props.theme.mediaQueries.small} {
          font-size: 55%;
      }
    }

    body {
        /* font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.6; */
        font-family: 'Montserrat', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
      margin: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
      --primary: ${(props) => props.theme.colors.main};
      --primary-light: ${(props) => props.theme.colors.light};
      --primary-lighter: ${(props) => props.theme.colors.lighter};
      --navbar: rgba(255, 255, 255, 0.95);
      --text: ${(props) => props.theme.colors.lightTheme.text};
      --text-highlight: ${(props) =>
        props.theme.colors.lightTheme.textHighlight};
      --background: ${(props) => props.theme.colors.lightTheme.background};
      --white: #fff;
      --shadow-btn: rgba(7, 49, 69, .1);
      --shadow-color: rgba(0, 0, 0, 0.1);
      background-color: var(--background);

      &.light-mode {
      --navbar: rgba(255, 255, 255, 0.95);
      --text: ${(props) => props.theme.colors.lightTheme.text};
      --text-highlight: ${(props) =>
        props.theme.colors.lightTheme.textHighlight};
      --background: ${(props) => props.theme.colors.lightTheme.background};
      }
      
      &.dark-mode {
        --navbar: rgba(33, 33, 33, 0.95);
        --text: ${(props) => props.theme.colors.darkTheme.text};
        --text-highlight: ${(props) =>
          props.theme.colors.darkTheme.textHighlight};
        --background: ${(props) => props.theme.colors.darkTheme.background};
      }
    }

    a, 
    button {
        cursor: pointer;
    }

    a,
    input, 
    textarea, 
    button {
        outline: none;
        text-decoration: none;
        font-family: inherit
    }`;
