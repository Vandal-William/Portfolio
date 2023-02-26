// == Import

import { Box, Container, Typography } from "@mui/material";
import video from '../../../videos/Orecioes.webm'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// == Composant
import '../../../styles/index.scss'
import './style.scss'


function Orecipes() {

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
    <Box className="Orecipes">
      <Box className="Orecipes-header">
        <h1 className="Orecipes-title"> Orecipes </h1>
  
      </Box>
      <Container className="project">

        <Box className="project-flex">

        <video className="project-video" autoPlay loop>
          <source src={video} type="video/webm"/>
        </video>

        <Box className="project-info">
          <Typography variant="h4"> Blog de cuisine </Typography>
          <Typography> Orecipe est un simple blog de recettes de cuisine réalisé au cours de ma formation chez O'clock. </Typography>
          
          <Box className="project-status">
            <Typography > <span className="project-label"> Status :</span> En cour de developpement</Typography>
            <Box className="project-skills">
                <Typography > <span className="project-label"> Languages :</span> HTML, CSS, JavaScript</Typography>
                <Typography > <span className="project-label"> Framework :</span> React</Typography>
                <Typography > <span className="project-label"> Autre :</span> Redux</Typography>
              </Box>
            <Typography > <span className="project-label">L'équipe :</span> </Typography>
            <Box sx={{paddingTop : "15px"}}>
              <Stack direction="row" spacing={0.5}>
                <Avatar alt="William Vandal" title="William Vandal" src="/static/images/avatar/1.jpg" />
              </Stack>
            </Box>
          </Box>

          <Box className="project-links">
            <a  target="_blank" href="https://github.com/Vandal-William/Orecipes-serveur" rel="noreferrer" >Lien GitHub </a>
            <a target="_blank" href="http://projets-portfolio.ovh:3011" rel="noreferrer">Lien du site</a>
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
  
  
  export default Orecipes;