import { useState } from "react";
import React from 'react';

export const userForm=(initForm={})=>{
    
    const[formData, setFormData]=useState(initForm);

    const  onInputChange=(e)=>{
        const {name, value} =e.target


        setFormData({
            ...formData,
            [name]:value
        })

    }

    const resetForm=()=>{
        setFormData({initForm});
    }

    return{
        ...f,
        formData,
        onInputChange,
        resetForm
    }
}