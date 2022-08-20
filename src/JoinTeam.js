import React,{useState} from 'react'
import axios from 'axios'


const JoinTeam = () => {
    const [displayUser,setDisplayUser] = useState([]);
    // const [team,setTeam] = useState({username:'',mobNo:'',teamUserId:[{playerId:''},{playerName:''}]})
    const [team,setTeam] = useState({username:'',mobNo:'',teamUserId:''})
    const handleClick=()=>{
        axios.get('http://localhost:8000/join-team').then(function(response){
            if(response.data.status==="ok"){
                setDisplayUser(response.data.user);
            }
        })
    }
    const handleJoin=(e,id)=>{
        e.preventDefault();
        console.log('joined team');
        axios.post(`http://localhost:8000/join-team/${id}`,team).then(function(response){
            if(response.data.status==="ok"){
                // setDisplayUser(response.data.user);
                console.log("updated team");
            }
        })
    }
  return (
    <div>
        Join Teams
        {/* <button onClick={handleClick}>Join team</button> */}
        <div>
            <label onClick={handleClick}>Teams</label>
        </div>
        <br />
        <div>
            {displayUser&&
                displayUser.map((user)=>(<div key={user._id}>
                    <label>Team {user.teamName}-</label>
                    <div>
                        Username <input type="text" onChange={(e)=>setTeam({...team,username:e.target.value})}/>
                    </div>
                    {/* <div>
                        PlayerId <input type="text" onChange={(e)=>setTeam({...team,teamUserId:{playerId:e.target.value}})}/>
                    </div> */}
                    <div>
                        Mob No <input type="number" onChange={(e)=>setTeam({...team,mobNo:e.target.value})} />
                    </div>
                    <button onClick={(e)=>handleJoin(e,user._id)}>Join team</button><br />
                    <hr />
                </div>))
            }
        </div>
    </div>
  )
}

export default JoinTeam