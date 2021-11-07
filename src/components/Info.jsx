import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import axios from 'axios'

const Info = () => {
    const {id} = useParams();
    const [infoGathered, setInfoGathered] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            // console.log(response)
            setInfoGathered(response.data)
        })
        .catch(err=> console.log(err))
    },[id])


    return (
        <div>
            <h1>Gathered Info</h1>
            <h1>Name: {infoGathered.name}</h1>
            <p>Height: {infoGathered.height}</p>
            <p>Mass: {infoGathered.mass}</p>
        </div>
    );
};

export default Info;