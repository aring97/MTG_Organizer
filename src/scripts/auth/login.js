import React, { useRef } from "react"
import { Link } from "react-router-dom";


export const Login = props => {
    const userName = useRef()
    const password = useRef()
    const existDialog = useRef()
    const passwordDialog = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/user?userName=${userName.current.value}`)
            .then(_ => _.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.password === password.current.value) {
                    localStorage.setItem("user", exists.id)
                    props.history.push("/")
                } else if (exists && exists.password !== password.current.value) {
                    passwordDialog.current.showModal()
                } else if (!exists) {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>
            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Password does not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Magic The Gatering Organizer</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputUserName"> userName </label>
                        <input ref={userName} type="text"
                            id="userName"
                            className="form-control"
                            placeholder="userName"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
