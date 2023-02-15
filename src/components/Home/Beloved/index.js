// == Import

import { Box } from "@mui/material";
import video from '../../../videos/Beloved.webm'

// == Composant
import './style.scss'
import '../../../styles/index.scss'


function Beloved() {
      

    return (
      <Box className="Beloved">
        <Box className="Beloved-header">
          <h1 className="Beloved-title">Beloved</h1>
    
        </Box>
        <Box className="project">

          <video className="project-video" autoPlay loop>
            <source src={video} type="video/webm"/>
          </video>

          <Box className="project-info">


          </Box>

        </Box>

        <Box className="project-more-info">

        </Box>

      </Box>
    );
  }
  
  
  export default Beloved;