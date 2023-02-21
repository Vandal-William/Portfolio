// == Import
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { Link } from "react-router-dom";



// == Composant
import './style.scss'

console.log(window.screen.availWidth)

function Home() {
    
    const dispatch = useDispatch()
    const isOver = useSelector((state) => state.isOver);
    const duration = useSelector((state) => state.duration);
    const projects = useSelector((state) => state.projects)

    const handleClickBtn = (e) => {
        const linkActivate = projects.find((project) => project.link === e.target.pathname)
        dispatch({
            type: 'CHANGE_TO_ACTIVE',
            active: linkActivate.project
        })

    }
    const scroll = (e) => {
        const gallery = document.querySelector(".gallery");

        const mouseX = e.clientX;
        const mouseY = e.clientY;
      
        const xDecimal = mouseX / window.innerWidth,
              yDecimal = mouseY / window.innerHeight;
      
        const maxX = gallery.offsetWidth - window.innerWidth,
              maxY = gallery.offsetHeight - window.innerHeight;
      
        const panX = maxX * xDecimal * -1,
              panY = maxY * yDecimal * -1;
      
        gallery.animate({
            transform: `translate(${panX}px, ${panY}px)`
        }, {
            duration: duration,
            fill: "forwards",
            easing: "linear"
        })
    }

        const handleOver = (e) =>{
            dispatch({
                type: "MOUSE_OVER",
                isOver: false,
                duration: 0
            });
            
            if(!e.target.offsetParent.childNodes[1].children[0]){
                const content2 = document.querySelector(`.${e.target.offsetParent.childNodes[0].children[0].classList[0]}`)
                content2.style.opacity = 1;
                content2.style.transitionDelay = "1s"
                content2.style.transition = "3s"
            

                const color6 = document.querySelector(".content6-color6");
                color6.style.backgroundColor = "#A1F190"
                color6.style.transition = "1s"

                const color8 = document.querySelector(".content8-color8");
                color8.style.backgroundColor = "#CFCFEA"
                color8.style.transition = "1s"  
    
                
            }else {
                const content = document.querySelector(`.${e.target.offsetParent.childNodes[1].children[0].classList[0]}`)
                content.style.opacity = 1;
                content.style.transitionDelay = "1s"
                content.style.transition = "3s"

                const color7 = document.querySelector(".content7-color7");
                color7.style.backgroundColor = "#067BC2"
                color7.style.transition = "1s"

                const color2 = document.querySelector(".content2-color2");
                color2.style.backgroundColor = "#D1B1C8"
                color2.style.transition = "1s"
            }
        }

        const handleOut = (e) => {
            dispatch({
                type: "MOUSE_OUT",
                isOver: true,
                duration: 10000
              });

            if(!e.target.offsetParent.childNodes[1].children[0]){
                const content2 = document.querySelector(`.${e.target.offsetParent.childNodes[0].children[0].classList[0]}`)
                content2.style.opacity = 0;
                content2.style.transitionDelay = "1s"
                content2.style.transition = "3s"

                const color6 = document.querySelector(".content6-color6");
                color6.style.backgroundColor = "transparent"
                color6.style.transition = "1s"

                const color8 = document.querySelector(".content8-color8");
                color8.style.backgroundColor = "transparent"
                color8.style.transition = "1s"

              
            }else{
                const content = document.querySelector(`.${e.target.offsetParent.childNodes[1].children[0].classList[0]}`)
                content.style.opacity = 0;
                content.style.transitionDelay = "1s"
                content.style.transition = "3s"

                const color7 = document.querySelector(".content7-color7");
                color7.style.backgroundColor = "transparent"
                color7.style.transition = "1s"

                const color2 = document.querySelector(".content2-color2");
                color2.style.backgroundColor = "transparent"
                color2.style.transition = "1s"
            }

            
        }

      
  
  return (
    <>
        <Box className="gallery" onMouseMove={ isOver ? scroll : null} sx={{}}>
            <h2 className="beloved">Beloved</h2>
            <h2 className="bot-discord">Bot Discord</h2>
            <h2 className="chatroom">Chatroom</h2>
            <h2 className="orecipes">Orecipes</h2>
            <h2 className="github-repos">Github repos</h2>
            <h2 className="rpg-python">RPG Python</h2>
            <h2 className="todolist">Todolist</h2>
            <h2 className="runner-js">Runner js</h2>


            <Box onMouseOver={handleOver}  onMouseOut={handleOut} className="content1"> 
                <Box className="content1-color1"></Box>
                <Box className="content1-introduce1">
                    <Box className="content1-content">
                        <Typography variant="h4" className="content1-title">Un site de présentation d'oeuvre d'art NFT</Typography>
                        <Typography  className="content1-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy 
                            text ever since the 1500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Box className="content1-action">
                            <Button onClick={handleClickBtn} component={Link} to="/beloved" variant="contained" className="content1-btn">Voir le projet</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box onMouseOver={handleOver}  onMouseOut={handleOut} className="content2"> 
                <Box className="content2-color2"></Box>
                <Box className="content2-introduce2">
                    <Box className="content2-content">
                            <Typography variant="h4" className="content2-title">N'oublierz plus jamais rien, ou presque... </Typography>
                            <Typography  className="content2-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy 
                                text ever since the 2500s, when an unknown printer took a 
                                galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap 
                                into electronic typesetting, remaining essentially unchanged.
                            </Typography>
                            <Box className="content2-action">
                                <Button onClick={handleClickBtn} component={Link} to="/todolist" variant="contained" className="content2-btn">Voir le projet</Button>
                            </Box>
                        </Box>
                </Box>
            </Box>
            <Box onMouseOver={handleOver}  onMouseOut={handleOut} className="content3"> 
                <Box className="content3-introduce3">
                    <Box className="content3-content">
                        <Typography variant="h4" className="content3-title">Un chat, deux chats, trois chats...</Typography>
                        <Typography  className="content3-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy 
                            text ever since the 3500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Box className="content3-action">
                            <Button onClick={handleClickBtn} component={Link} to='/chatroom' variant="contained" className="content3-btn">Voir le projet</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className="content3-color3"></Box>
            </Box>
            <Box onMouseOver={handleOver}  onMouseOut={handleOut} className="content4"> 
                <Box className="content4-color4"></Box>
                <Box className="content4-introduce4">
                    <Box className="content4-content">
                        <Typography variant="h4" className="content4-title">Mangas Quest le bot pour les fans de mangas</Typography>
                        <Typography  className="content4-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy 
                            text ever since the 4500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Box className="content4-action">
                            <Button onClick={handleClickBtn} component={Link} sx={{transition: "3s"}} to="/bot-discord" variant="contained" className="content4-btn">Voir le projet</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box onMouseOver={handleOver}  onMouseOut={handleOut} className="content5"> 
            <Box className="content5-introduce5">
                <Box className="content5-content">
                    <Typography variant="h4" className="content5-title">Un blog pour des recettes de cuisine</Typography>
                    <Typography  className="content5-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 5500s, when an unknown printer took a 
                        galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                    <Box className="content5-action">
                        <Button onClick={handleClickBtn} component={Link} to="/orecipes" variant="contained" className="content5-btn">Voir le projet</Button>
                    </Box>
                </Box>
            </Box>
            <Box className="content5-color5"></Box>
            </Box>
            <Box onMouseOver={handleOver}  onMouseOut={handleOut} className="content6"> 
                <Box className="content6-introduce6">
                    <Box className="content6-content">
                        <Typography variant="h4" className="content6-title">L'api Github avec React</Typography>
                        <Typography  className="content6-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy 
                            text ever since the 6500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Box className="content6-action">
                            <Button onClick={handleClickBtn} component={Link} to="/github-repos" variant="contained" className="content6-btn">Voir le projet</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className="content6-color6"></Box>
            </Box>
            <Box onMouseOver={handleOver}  onMouseOut={handleOut} className="content7"> 
                <Box className="content7-color7"></Box>
                <Box className="content7-introduce7">
                    <Box className="content7-content">
                        <Typography variant="h4" className="content7-title">Empire Of Chaos, Devenez un hero !</Typography>
                        <Typography  className="content7-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy 
                            text ever since the 7500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Box className="content7-action">
                            <Button onClick={handleClickBtn} component={Link} to="/rpg-python" variant="contained" className="content7-btn">Voir le projet</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box onMouseOver={handleOver}  onMouseOut={handleOut} className="content8"> 
                <Box className="content8-introduce8">
                    <Box className="content8-content">
                        <Typography variant="h4" className="content8-title">Vous aimez courrir ? sa tombe bien !</Typography>
                        <Typography  className="content8-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy 
                            text ever since the 8500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Box className="content8-action">
                            <Button onClick={handleClickBtn} component={Link} to="/runner-js" variant="contained" className="content7-btn">Voir le projet</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className="content8-color8"></Box>
            </Box>
        

        </Box>
    </>
  );
}

// == Export
export default Home;