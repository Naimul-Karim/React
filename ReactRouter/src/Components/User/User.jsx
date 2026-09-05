import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='bg-amber-950 text-white p-4 rounded-md'>user: {userid}</div>
    )
}

export default User
