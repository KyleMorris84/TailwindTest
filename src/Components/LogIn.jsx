import { useForm } from "react-hook-form"

export default function LogIn() {

    const {register, handleSubmit , formState: {errors} } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <form 
            className="flex flex-col bg-gray-100 rounded-md mx-auto w-100 mt-20 items-center gap-2 py-5"
            onSubmit={handleSubmit(onSubmit)}
        >

            <h2 className="text-3xl text-center pb-8">Log In</h2>

            <input type="email" placeholder="Email" className="border border-gray-600 w-75 p-1" {...register("email")} required />
            <input type="password" placeholder="Password" className="border border-gray-600 w-75 p-1 mt-3" {...register("password")} required minLength={8} />
            
            <div className="flex items-center mt-4">
                <input id="remember-me" type="checkbox" className="mr-1.5" {...register("remember-me")}></input>
                <label htmlFor="remember-me" className="pb-0.5">Remember Me</label>
            </div>

            <input type="submit" className="mt-8 border px-5 py-1 bg-blue-500 text-white" value="Log In" />

            <p className="text-xs">Dont have an account? <a href="/" className="underline">Sign up</a></p>
        </form>
    )
}