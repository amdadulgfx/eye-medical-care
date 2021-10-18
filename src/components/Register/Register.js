import React from 'react';
import { useForm } from "react-hook-form";
const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    return (
        <div className='mx-auto'>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                Name: <br />
                <input defaultValue="test" {...register("example")} /> <br />

                {/* include validation with required or other standard HTML validation rules */}
                Email: <br />
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;