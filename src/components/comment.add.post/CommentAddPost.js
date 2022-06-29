import {useForm} from "react-hook-form";

export default function CommentAddPost() {


    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: '@gmail.com'
        }
    });


    function submit(obj) {
        fetch("https://jsonplaceholder.typicode.com/comments", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers:{'Content-type': 'application/json; charset=UTF-8',},


        })
            .then(response => response.json())
            .then(result => console.log(result))
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required: true})}/>
                {errors.name && <samp>filed is required</samp>}
                <input type="text" {...register('email', {required: true})}/>
                {errors.email && <samp>filed is required</samp>}
                <input type="text" {...register('body', {required: true})}/>
                {errors.body && <samp>filed is required</samp>}
                <button>post</button>
            </form>

        </div>
    )
}