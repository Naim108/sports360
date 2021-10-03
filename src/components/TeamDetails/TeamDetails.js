import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'
import MenuBar from '../MenuBar/MenuBar';
import './TeamDetails.css'
import Male from '../../images/male.png'
import Female from '../../images/female.png'

const TeamDetails = (props) => {
    const {teamId}=useParams()
    const [details,setDetails]=useState({})


    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data.teams[0]))

    },[])
    
    
    return (
        <div className="details">
            <MenuBar></MenuBar>
            <div className="team-details mt-5">
                <div className="male-female">
                       {details.strGender=="Male"?(<img src={Male} alt="" />):(
                    <img src={Female} alt="" />)}
                    

                </div>
                <div className="row mt-5 d-flex justify-content-center">
                    <img className="w-25" src={details.strTeamBadge} alt="" />
                    <p>{details.strDescriptionEN}</p>
                </div>


            </div>

            
        </div>
    );
};

export default TeamDetails;