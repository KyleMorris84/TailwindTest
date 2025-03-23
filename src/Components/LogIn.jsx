export default function LogIn() {
    return (
        <div class="flex flex-col bg-gray-100 rounded-md mx-100 mt-20 items-center gap-2 py-5">

            <h2 class="text-3xl text-center pb-8">Log In</h2>

            <input placeholder="Email" class="border border-gray-600 w-75 p-1"></input>
            <input type="password" placeholder="Password" class="border border-gray-600 w-75 p-1 mt-3"></input>
            
            <div class="flex items-center mt-4">
                <input id="remember-me" type="checkbox" class="mr-1.5"></input>
                <label for="remember-me" class="pb-0.5">Remember Me</label>
            </div>

            <button class="mt-8 border px-5 py-1 bg-blue-500 text-white">Log in</button>

            <p class="text-xs">Dont have an account? <a href="/" class="underline">Sign up</a></p>
        </div>
    )
}