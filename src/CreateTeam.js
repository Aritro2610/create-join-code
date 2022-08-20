import axios from 'axios';
import React,{ useState } from 'react'


const CreateTeam = () => {
    const [user,setUser] = useState({username:'',mobNo:'',userType:'createTeam',teamName:''});

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/create' ,user).then(function(response){
            if(response.data.status==='ok'){
                console.log('posted');
            }
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" id="username" onChange={(e)=>setUser({...user,username:e.target.value})}/>
            <label>mobNo</label>
            <input type="number" name="number" id="number" onChange={(e)=>setUser({...user,mobNo:e.target.value})}/>
            <label>teamName</label>
            <input type="text" name="teamname" id="teamname"onChange={(e)=>setUser({...user,teamName:e.target.value})} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CreateTeam