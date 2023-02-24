// == Import

import { Box, Container, Typography } from "@mui/material";
import video from '../../../videos/Beloved.webm'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// == Composant
import '../../../styles/index.scss'
import './style.scss'


function Beloved() {

  const dispatch = useDispatch()
  const projects = useSelector((state) => state.projects)
  const active = useSelector((state) => state.active)

  const changeToActive = (e) => {
    dispatch({
      type : 'CHANGE_TO_ACTIVE',
      active: e.target.firstChild.textContent
    })
  }

    return (
  

      <Box className="Beloved">
        <Box className="Beloved-header">
          <h1 className="Beloved-title">Beloved</h1>
    
        </Box>
        <Container className="project">

          <Box className="project-flex">

          <video className="project-video" autoPlay loop>
            <source src={video} type="video/webm"/>
          </video>

          <Box className="project-info">
            <Typography variant="h4"> La marketplace NFT </Typography>
            <Typography> Beloved a été conçu au cours de mes premières semaines de formation a Hétic, elle repose sur le concept de fleurs NFC qui fanent dans le temps. Des œuvres d'art à réaliser par des artistes à destination des couples. </Typography>
            
            <Box className="project-status">
              <Typography > <span className="project-label"> Status :</span> en cour de developpement</Typography>
              <Box className="project-skills">
                <Typography > <span className="project-label"> Languages :</span> HTML, CSS, JavaScript</Typography>
                <Typography > <span className="project-label"> Framework :</span> React</Typography>
                <Typography > <span className="project-label"> Autre :</span> Redux, MUI</Typography>
              </Box>
              <Typography > <span className="project-label">L'équipe :</span> </Typography>
              <Box sx={{paddingTop : "15px"}}>
                <Stack direction="row" spacing={0.5}>
                  <Avatar alt="Vandal William" title="Vandal William" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Lucas Yalman" title="Lucas Yalman" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Mohamed-Ali Yaich" title="Mohamed-Ali Yaich" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="kengni Théophane" title="kengni Théophane" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="jiek ruan" title="jiek ruan" src="/static/images/avatar/1.jpg" />
                </Stack>
              </Box>
            </Box>

            <Box className="project-links">
              <a  target="_blank" href="https://github.com/Vandal-William/BELOVED" rel="noreferrer" >Lien GitHub </a>
              <a target="_blank" href="https://beloved.surge.sh" rel="noreferrer">Lien du site</a>
            </Box>

          </Box>

          </Box>

          <Box className="nav">
            {projects.map((project) => (
              <Link onClick={changeToActive} to={`${project.link}`} key={project.id}>
                <Box className="nav-content">
                  <Box className="nav-name">
                    <p 
                      style={active === project.project ? {color: `${project.color}`} : {color: "gray"}}
                      >
                      {project.project}
                    </p>

                  </Box>
                  <Box 
                    className="nav-color" 
                    sx={active === project.project ? {backgroundColor: `${project.color}`} : {backgroundColor: "gray"}}
                    >  
                    <p style={{opacity: "0"}}
                        >
                        {project.project}
                    </p>
                  </Box>

                </Box>
              </Link>
            ))}

          </Box>
        </Container>

      </Box>

      

    );
  }
  
  
  export default Beloved;