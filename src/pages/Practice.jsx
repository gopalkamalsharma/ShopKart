import { useForm } from "react-hook-form"
export default function Practice() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    return (
        <div>
            <form onSubmit={handleSubmit(console.log)}>
                <input 
                {...register("firstName", 
                    { 
                        required: {value: true, message:"This field is mandatory"}, 
                        minLength:{value: 3, message:"Minimum characters required 3"}
                    }
                )}
                />
                <p>{errors.firstName?.message}</p>
                <input 
                {...register("lastName", 
                    { 
                        required: {value: true, message: "This field is mandatory"}, 
                        maxLength: {value:10, message: "Maximum allowed character is 10"}
                    }
                )}
                />
                <p>{errors.lastName?.message}</p>
                <input 
                {...register("emailAddress", 
                    { 
                        required: { value: true, message: "This field is mandatory" }, 
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address"
                        }
                    }
                )}
                />
                <p>{errors.emailAddress?.message}</p>
                <button>Submit</button>
            </form>
        </div>

    );
}



