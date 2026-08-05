import Sidebar from "./Sidebar";
import Projects from "./Projects";
import Messages from "./Messages";


function Dashboard(){

return(

<div className="dashboard">

<Sidebar/>

<div className="content">

<h1>
Nhial Admin Dashboard
</h1>


<div className="cards">

<div>
<h2>20</h2>
<p>Projects</p>
</div>


<div>
<h2>50</h2>
<p>Messages</p>
</div>


</div>


<Projects/>

<Messages/>


</div>

</div>

)

}

export default Dashboard;
