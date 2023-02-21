// == Import

import { Box, Container, Typography } from "@mui/material";
import video from '../../../videos/RunnerJs.webm'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// == Composant
import '../../../styles/index.scss'
import './style.scss'


function RunnerJs() {

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
      <Box className="RunnerJs">
        <Box className="RunnerJs-header">
          <h1 className="RunnerJs-title"> Runner-Js </h1>
    
        </Box>
        <Container className="project">

          <Box className="project-flex">

          <video className="project-video" autoPlay loop>
            <source src={video} type="video/webm"/>
          </video>

          <Box className="project-info">
            <Typography variant="h4"> Titre </Typography>
            <Typography> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
            
            <Box className="project-status">
              <Typography > <span className="project-label"> Status :</span> En cour de developpement</Typography>
              <Typography > <span className="project-label">L'équipe :</span> </Typography>
              <Box sx={{paddingTop : "15px"}}>
                <Stack direction="row" spacing={0.5}>
                  <Avatar alt="Remy Sharp" title="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" title="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Cindy Baker" title="Cindy Baker" src="/static/images/avatar/3.jpg" />
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
  
  
  export default RunnerJs;