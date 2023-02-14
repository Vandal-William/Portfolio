// == Import
import { ThemeProvider} from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import theme from '../../selectors/Theme'


// == Composant
import Home from '../Home'

function App() {
  return (
    <ThemeProvider theme={theme}>

     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>

    </ThemeProvider>

  );
}

// == Export
export default App;
