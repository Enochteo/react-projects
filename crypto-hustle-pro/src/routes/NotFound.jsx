import React from "react"
import { Link } from "react-router-dom"


function NotFound() {
    return (
        <>
            <p>Page Not Found</p>
            <Link style={{ color: 'white' }} to='/'>Back to Home</Link>
        </>
    )
}
export default NotFound;