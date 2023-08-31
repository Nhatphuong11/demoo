import React from 'react'
import { useFormik, validationSchema } from 'formik'
import * as Yup from "yup"
import {  toast } from 'react-toastify';
function RegisterFrom() {
    const formik = useFormik({ 
        initialValues:{
        name: "",
        email: "",
        address: "",
        password: "",
        confirmPassword: "",

    },
    validationSchema: Yup.object({ 
        name: Yup.string()
            .min(5, "can nhap du 5 ki tu")
            .max(25, "ko dc nhap qua 25 ki tu")
            .required("ko dc nhap trong"),
        email: Yup.string()
            .email("email nhap ko dung dinh dang")
            .required("pass ko dc de trong"),
        address: Yup.string()
            .required("ko dc de trong"),
        password: Yup.string()
            .min(8, "khong du ki tu")
            .required("ko dc de trong"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")],"mat khau khong trung khop")
            .required("ko dc de trong"),
    }),
    onSubmit:(values) => {
        console.log(values);
        toast.success("vo");
    }
        
    });

  return (
    <div>
        <h1>RegisterFrom</h1>
        <form onSubmit={formik.handleSubmit}>
            <label>Name:</label>
            <input 
                type='Text'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
                <p style={{ color: "red" }}>{formik.errors.name}</p>
            )}
            <br/>
            <label>Email:</label>
            <input 
                type='Text'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
                <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}
            <br/>
            <label>address:</label>
            <input 
                type='Text'
                name='address'
                value={formik.values.address}
                onChange={formik.handleChange}
            />
            {formik.errors.address && formik.touched.address && (
                <p style={{ color: "red" }}>{formik.errors.address}</p>
            )}
            <br/>
            <label>PassWord:</label>
            <input 
                type='Text'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
                <p style={{ color: "red" }}>{formik.errors.password}</p>
            )}
            <br/>
            <label>Confirm Password:</label>
            <input 
                type='Text'
                name='confirmPassword'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
            )}
            <br />
           <button type='submit'>Rgister</button>
        </form>
    </div>
  )
}

export default RegisterFrom