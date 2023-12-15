import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../common/Input';
import { toast } from 'react-toastify';
import Button from '../common/Button';
import FileInput from "../common/Input/FileInput"

function CreatePodcastForm() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [displayImage,setDisplayImage] = useState();
    const [bannerImage,setBannerImage] = useState();

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit =()=>{
        toast.success("Handling Form");
        if(title && desc && displayImage && bannerImage){

        } else{
            toast.error("Please Enter All Values");
        }
    }

    const displayImageHandle = (file)=>{
        setDisplayImage(file);
    }

    const bannerImageHandle = (file)=>{
        setBannerImage(file);
    }

  return (
    <>
        <InputComponent 
            state={title} 
            setState={setTitle} 
            placeholder="Title" 
            type="text" 
            required={true} 

        />
        <InputComponent 
            state={desc} 
            setState={setDesc} 
            placeholder="Description" 
            type="email" 
            required={true} 

        />

        <FileInput
            accept={"image/*"}
            id={"display-image-input"} 
            fileHandleFnc={displayImageHandle}
            text = {"Display Image Upload"}     
        />

        <FileInput 
            accept={"image/*"}
            id={"banner-image-input"}
            fileHandleFnc={bannerImageHandle}
            text = {"Banner Image Upload"}
        />
        
        <Button
            text={loading ? "Loading...":"Create Podcast"} 
            disabled={loading} 
            onClick={handleSubmit}

        />
    </>
  )
}

export default CreatePodcastForm