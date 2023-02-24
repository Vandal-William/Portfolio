// == Import

import { Box, Container, Typography } from "@mui/material";
import video from '../../../videos/Bot-Discord.webm'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// == Composant
import '../../../styles/index.scss'
import './style.scss'


function BotDiscord() {

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
    <Box className="BotDiscord">
      <Box className="BotDiscord-header">
        <h1 className="BotDiscord-title">Mangas Quest</h1>
  
      </Box>

      <Container className="project">

        <Box className="project-flex">

          <video className="project-video" width="100%" autoPlay loop>
            <source src={video} type="video/webm"/>
          </video>

          <Box className="project-info">
            <Typography variant="h4"> Mangas Quest </Typography>
            <Typography> Simple bot discord sur le thème des mangas, réalisé au cours de ma formation à Hétic. Mangas Quest vous propose de résoudre des énigmes ou de lire une citation inspirante.</Typography>
            
            <Box className="project-status">
              <Typography > <span className="project-label"> Status :</span> En cour de developpement</Typography>
              <Box className="project-skills">
                <Typography > <span className="project-label"> Languages :</span> Python</Typography>
                <Typography > <span className="project-label"> Framework :</span> Aucun</Typography>
                <Typography > <span className="project-label"> Autre :</span> API discord</Typography>
              </Box>
              <Typography > <span className="project-label">L'équipe :</span> </Typography>
              <Box sx={{paddingTop : "15px"}}>
                <Stack direction="row" spacing={0.5}>
                  <Avatar alt="Vandal William" title="Vandal William" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Kengni Theophane" title="Kengni Theophane" src="/static/images/avatar/2.jpg" />
                </Stack>
              </Box>
            </Box>

            <Box className="project-links">
              <a  target="_blank" href="https://github.com/Vandal-William/Bot-Discord" rel="noreferrer" >Lien GitHub </a>
              <a target="_blank" href="https://discord.gg/AYQQyWnSdy" rel="noreferrer">Salon discord</a>
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
  
  
  export default BotDiscord;