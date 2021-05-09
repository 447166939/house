import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import palette from './palette'

// Create a theme instance.
const theme = createMuiTheme({
   palette,
   typography: {
      body2:{
         fontFamily: "Nunito Sans",
      },
      fontFamily: "Nunito Sans",
   },
   custom:{
      background: 'linear-gradient(90deg, #7D3BF1 0%, #2FD1DA 100%) 0% 0%',
   },


});

export default theme;