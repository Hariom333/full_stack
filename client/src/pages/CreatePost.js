import React from 'react'
import {Formik, Form,Field, ErrorMessage} from "formik";
import * as yup from 'yup'; 
import axios from "axios";
import { useHistory } from 'react-router-dom';


function CreatePost() {

    let history = useHistory();


    const initialValue = {
        title:"",
        postText : "",
        userName : "",
    };


    const validationSchema = yup.object().shape({
           
        title: yup.string().required("you must put title"),
        postText:yup.string().required(" please enter posttext") ,
        userName:yup.string().min(3).max(15).required(),

    });

    const onSubmit = (data) => {

axios.post("http://localhost:3001/posts", data).then((response)=>{

history.push("/");
   console.log(data);

});

 
}

    return (
        <div>
            <Formik initialValues={initialValue} onSubmit = {onSubmit} validationSchema = {validationSchema}>
                <Form>
                    <label> Title:</label>
                    <ErrorMessage name="title" component = "span" />
                  <Field autoComplete = "off" id="inputCreatePost" name = "title" placeholder ="{EX . title ... }" /> <br />

                  <label> Post:</label>
                  <ErrorMessage name="postText" component = "span" />
                  <Field autoComplete = "off" id="postText" name = "postText" placeholder ="{EX . title ... }" /><br />

                  <label> UserName:</label>
                  <ErrorMessage name="userName" component = "span" />
                  <Field autoComplete = "off" id="userName" name = "userName" placeholder ="{EX . title ... }" /><br />

                    <button type="submit"> Create </button>


                </Form>

            </Formik>
        </div>
    )
}

export default CreatePost
