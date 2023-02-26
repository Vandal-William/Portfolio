// == Import
import { ThemeProvider} from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import theme from '../../selectors/Theme'



// == Composant
import Home from '../Home'
import Beloved from '../Home/Beloved'
import BotDiscord from '../Home/BotDiscord'
import Orecipes from '../Home/Orecipes'
import ReactGithub from '../Home/ReactGithub'
import RpgPython from '../Home/RpgPython'
import RunnerJs from '../Home/RunnerJs'

function App() {
  return (
    <ThemeProvider theme={theme}>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/beloved' element={<Beloved/>}/>
      <Route path='/bot-discord' element={<BotDiscord/>}/>
      <Route path='/orecipes' element={<Orecipes/>}/>
      <Route path='/github-repos' element={<ReactGithub/>}/>
      <Route path='/rpg-python' element={<RpgPython/>}/>
      <Route path='/runner-js' element={<RunnerJs/>}/>
     </Routes>

    </ThemeProvider>

  );
}

// == Export
export default App;
