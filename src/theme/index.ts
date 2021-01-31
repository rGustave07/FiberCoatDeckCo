import { createMuiTheme } from '@material-ui/core/styles';

const fcdcTheme = createMuiTheme({
    typography: {
        fontFamily: [
            'Manjari',
            'Roboto',
            'sans-serif'
        ].join(','),
    },
    palette: {
        common: {
            white: '#fff',
            black: '#000',
        },
        primary: {
            main: '#2E2C2F',
        },
        secondary: {
            main: '#729B79',
        },
        text: {
            primary: '#F3E8EE',
        }
    }
})

export default fcdcTheme;