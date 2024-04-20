export const RegisterPage = () => {
    return <main className="p-4">
        <section className="flex border p-4 md:p-10 w-full md:w-2/3 lg:w-1/3 text-lg flex-col space-y-5">
            <h1>Register</h1>
            <form className="flex flex-col space-y-4">
            <div>

<label htmlFor="name">Name</label>
<input name="name" type="text" />
</div>

                <div>

                <label htmlFor="email">Email</label>
                <input name="email" type="email" />
                </div>
            
                <div>

                <label htmlFor="password">Password</label>
                <input name="password" type="password" />
                </div>

                <span className="text-base">Already have an account? <a href="/login">Login</a></span>
            </form>
        </section>
    </main>
}