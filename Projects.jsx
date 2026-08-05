import {useEffect,useState} from "react";
import axios from "axios";


function Projects(){

const [projects,setProjects]=useState([]);


useEffect(()=>{

axios.get(
"http://localhost:5000/api/projects"
)
.then(res=>{
setProjects(res.data);
})

},[]);



return(

<section>

<h2>
My Projects
</h2>


{
projects.map(project=>(

<div className="project">

<h3>
{project.title}
</h3>

<p>
{project.technology}
</p>


<button>
Delete
</button>

</div>

))

}


</section>

)

}

export default Projects;
