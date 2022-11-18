// Your code goes here
// do a default export
import React from "react"
function UserCard({image,name,address,followers,posts}){

    const [flw,setFlw] = React.useState("FOLLOW")


    const ghsghs = ()=>{
        flw==="FOLLOW"?setFlw("UNFOLLOW"):setFlw("FOLLOW");
    }


    return(
        <div style = {{display:"flex",gap:"20px"}}>
        <div>
        <img style = {{height : "200px",width :"200px",borderRadius:"50%"}}src = {image}/>
        </div>
        <div>
        <h2>{name}</h2>
        <p>{address}</p>
        <button onClick={ghsghs}>{flw}</button>
        <div style = {{display:"flex",gap:"10px"}}>
            <div>
        <h3>Posts</h3>
        <p>{posts}</p>
        </div>
        <div>
        <h3>Followers</h3>
        <p>{followers}</p>
        </div>
        </div>
        </div>
        

        </div>
    )
}


export default UserCard;