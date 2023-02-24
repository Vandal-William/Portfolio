// == Import
import { Box } from "@mui/material";
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

    const handleClick = (e) => {
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
    
    const handleOver = () =>{
        dispatch({
            type: "MOUSE_OVER",
            isOver: false,
            duration: 0
        });
    }

    const handleOut = () => {
        dispatch({
            type: "MOUSE_OUT",
            isOver: true,
            duration: 10000
            });
    }

      
  
  return (
    <>
        <Box className="gallery" onMouseMove={ isOver ? scroll : null} sx={{}}>

            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClick} to="/beloved" className="beloved">Beloved</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClick} to="/bot-discord" className="bot-discord">Bot Discord</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClick} to="/chatroom" className="chatroom">Chatroom</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClick} to="/orecipes" className="orecipes">Orecipes</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClick} to="/github-repos" className="github-repos">Github repos</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClick} to="/rpg-python " className="rpg-python">RPG Python</Link>
            <Link onMouseOver={handleOver}  onMouseOut={handleOut} onClick={handleClick} to="/runner-js" className="runner-js">Runner js</Link>

        </Box>
    </>
  );
}

// == Export
export default Home;