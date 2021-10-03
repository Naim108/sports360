import React, { useEffect, useState } from 'react';
import './AllTeams.css'

const AllTeams = () => {
    const [teams,setTeams]=useState([])
    const [searchText,setSearchText]=useState("")
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
        .then(res=>res.json())
        .then(data=>setTeams(data?.teams))
    },[searchText])
    const handleSearch=(e)=>{
        setSearchText(e.target.value)
        
    }
    console.log(searchText)
    console.log(teams)
    

    
    return (
        <div className="team-container ">
            <h1>Our Teams</h1>
            <div>
                <input onChange={handleSearch} className="p-2" type="text" placeholder="Enter your team name" />
                <button className="btn btn-danger p-2 ">Search</button>
            </div>
            <div className="teams">
                <div className="row">
                    {
                        teams?.map(team=><div className="col-md-4">
                            <div className="cart">
                                <div className="logo-image">
                                    <img className="w-50" src={team.strTeamBadge} alt="" />

                                </div>
                                <h1>{team.strTeam}</h1>
                                <p>{team.strLeague}</p>
                                <p>{team.strCountry}</p>
                                <p>{team.strGender}</p>
                                <button className="btn btn-success">Details</button>
                            </div>
                        </div>)
                    }

                </div>

            </div>
        </div>
    );
};

export default AllTeams;