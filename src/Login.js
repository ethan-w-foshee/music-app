import Dashboard from "./components/Dashboard"
import { Button , TextField } from '@mui/material'
import React from "react"

function Login() {

    const [loggedIn, setLoggedIn] = React.useState(false)

    if (loggedIn === true) {
        return <Dashboard />
    } else {
        return (
            <div>
                <TextField id="filled-basic" label="Username" variant="filled" />
                <TextField id="filled-basic" label="Password" variant="filled" />
                <Button variant="contained" color="secondary" onClick={() => setLoggedIn(!loggedIn)}>Submit</Button>
            </div>
        )
    }
}

export default Login