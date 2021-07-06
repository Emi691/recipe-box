import React from 'react'
import CoverPhoto from '../components/CoverPhoto'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
    <br/>
    <h1>Welcome to Recipe Box!</h1>
    <Link to="/signup" >Sign Up!</Link>
    <br/>
    <br/>
    <CoverPhoto/>
    </div>
)

export default Home