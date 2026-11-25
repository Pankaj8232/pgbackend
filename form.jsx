
import { useForm } from "react-hook-form"

function Formcheck() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    async function Postdata(data) {

        let apilink = await fetch("http://localhost:5000/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (apilink.ok) {
            alert("Data send successfully")
        } else {
            alert("Try again")
        }

    }

    return (
        <form onSubmit={handleSubmit(Postdata)}>

            <input
                {...register("firstName", {
                    required: "First name is required",
                    minLength: { value: 2, message: "Min length is 2" },
                })}
            />

            <p>{errors.firstName?.message}</p>

            <input
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email"
                    },
                })}
            />

            <p>{errors.email?.message}</p>

            <input
                type="number"
                {...register("age", {
                    valueAsNumber: true,
                })}
            />

            <p>{errors.age?.message}</p>

            <button type="submit">Submit</button>

        </form>
    )
}

export { Formcheck }
