import errorHandler from "./errorHandler"
import regexes from "./regexes"
const submitHandler = async (e, errors, setErrors, userData, setUser) => {
    e.preventDefault()
    setErrors({})
    let errr = errorHandler(regexes, userData)
    if (Object.keys(errr).length > 0) {
        setErrors({ messages: errr })
    }
    if (Object.keys(errr).length === 0) {
        let res = await fetch('http://localhost:3050/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        let resJson = await res.json()
        if (resJson.message) {
             setErrors({messages: {email: resJson.message}})
        } else {
           setUser(resJson)
        }
    }
}
export default submitHandler