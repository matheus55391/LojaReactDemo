import { useNavigate } from 'react-router-dom'

export const Home = () =>{
	const navigate = useNavigate()
	return (
		<div>
			<h1>Home</h1>
			<h1>Home</h1>
			<h1>Home</h1>
			<h1>Home</h1>
			<h1>Home</h1>

			<button onClick={()=>{navigate('/profile')}}>Profile</button>
		</div>
	)
}