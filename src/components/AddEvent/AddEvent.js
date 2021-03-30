import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const[imgURL, setImgURl] = useState(null)

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const eventData = {
            name : data.name,
            img : imgURL
        }
        console.log(eventData)

        fetch('https://whispering-brook-95503.herokuapp.com/addEventDatabase', { 
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    const handleImg = (event) =>{
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '07945127d96230e24a48010e87b1a758');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImgURl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
}

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>

      <input name="name" defaultValue="new exacting event" ref={register} /> <br/>
      

      <input name="exampleRequired" type="file" onChange={handleImg} /><br/>
    
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddEvent;