import { useNavigate } from "react-router-dom";

export const Profile = () =>{
    const navigate = useNavigate();
    return (
        <div>
            <h1>Profile</h1>
            <button onClick={()=>{navigate('/')}}>Home</button>
            
        </div>
    )
}