import React from 'react'
import {register} from '@/lib/actions'
import styles from './registerForm.module.css'
import {useFormState} from 'react-dom'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const registerForm = () => {
    const [state, formAction] = useFormState(register, undefined)
    const router = useRouter()

    useEffect(() => {
        state?.success && router.push("/login")
    }, [state?.success, router])

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder='username' name="username"/>
            <input type="email" placeholder='email' name="email"/>
            <input type="password" placeholder='password' name="password"/>
            <input type="password" placeholder='password again' name="passwordRepeat"/>
            <button>|Register</button>
            {state?.error}
            <Link href="/login">
                {"Have an account?"}<b>Login</b>
            </Link>
        </form>
    )
}

export default registerForm