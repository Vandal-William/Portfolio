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

            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClickBtn} to="/beloved" className="beloved">Beloved</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClickBtn} to="/bot-discord" className="bot-discord">Bot Discord</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClickBtn} to="/chatroom" className="chatroom">Chatroom</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClickBtn} to="/orecipes" className="orecipes">Orecipes</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClickBtn} to="/github-repos" className="github-repos">Github repos</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClickBtn} to="/rpg-python " className="rpg-python">RPG Python</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClickBtn} to="/todolist" className="todolist">Todolist</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClickBtn} to="/runner-js" className="runner-js">Runner js</Link>

        </Box>
    </>
  );
}

// == Export
export default Home;