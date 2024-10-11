import { sayHello } from '@/libs/actions'
import React from 'react'

const ServerActionTestPage = () => {
    return (
        <div>
            <form action={sayHello}>
                <button>Test me baby</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage