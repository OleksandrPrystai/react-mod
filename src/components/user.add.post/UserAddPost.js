import {useForm} from "react-hook-form";


export default function UserAddPost() {


    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: '@gmail.com'
        }
    });


    let submit = (obj) => {

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8',},
        })
            .then(response => response.json())
            .then(result => console.log(result))

    }

    return (

        <div>
            <form onSubmit={handleSubmit(submit)}>

                <input type="text" {...register('username', {required: true})}/>

                {errors.username && <samp> field is required</samp>}

                <input type="text" {...register('email', {required: true})}/>

                {errors.email && <samp> field is required</samp>}

                <button>save</button>

            </form>


        </div>
    )
}