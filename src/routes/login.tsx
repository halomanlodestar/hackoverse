import { loginpage } from "./login/login_signup"
import "./login/style_2.css"

export const LoginPage = () => {
    return <div dangerouslySetInnerHTML={{__html: loginpage}}>
        {/* <section className="flex border p-4 md:p-10 w-full md:w-2/3 lg:w-1/3 text-lg flex-col space-y-5">
            <h1>Login</h1>
            <form className="flex flex-col space-y-4">
                <div>

                <label htmlFor="email">Email</label>
                <input name="email" type="email" />
                </div>
            
                <div>

                <label htmlFor="password">Password</label>
                <input name="password" type="password" />
                </div>

                <span className="text-base">Don't have an account? <a href="/register">Register</a></span>
            </form>
        </section> */}
    </div>
}