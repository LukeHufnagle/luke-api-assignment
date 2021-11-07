import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Form = () => {
    // CREATE VARIABLE TO REPRESENT CATEGORIES
    const [categories, setCategories] = useState([])

    const [formInfo, setFormInfo] = useState({
        id:"",
        options:"people"
    })

    const history = useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response=>{
            // console.log("RESPONSE-->", response.data)
            let result = Object.keys(response.data)
            // console.log("RESULT-->", result)
            setCategories(result)
            
        })
        .catch(err=>console.log(err))
    },[])

    // CHANGE HANDLER
    const changeHandler = (e)=>{
        // console.log("CHANGE")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    // SUBMIT HANDLER
    const submitHandler = (e)=>{
        e.preventDefault()
        // console.log("SUBMIT", formInfo)
        axios.get(`https://swapi.dev/api/${formInfo.options}/${formInfo.id}`)
            .then(response=>{
                console.log("RESPONSE FROM SUBMIT", response)
                history.push(`/${formInfo.options}/${formInfo.id}`)
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            {/* CREATE THE FORM */}
            <form className="form" onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Search for: </label>
                    <select onChange={changeHandler} name="options">
                        {
                            categories.map((option, i)=>{
                                return(
                                    <option key={i} value={option}>{option}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="id">ID: </label>
                    <input onChange={changeHandler} type="number" name="id" />
                </div>
                <input type="submit" value="Search" className="btn btn-dark" />
            </form>
        </div>
    );
};


export default Form;