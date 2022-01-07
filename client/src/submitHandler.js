const submitHandler = (e, errors, setErrors, userData) => {
    e.preventDefault()
    const errr = {}
    if (userData.password !== userData.confirmPassword) {
        errr.password = 'Missmatched password'
    }
    if (userData.fullName.length < 5) {
        errr.fullName = 'Invalid Name'
    }
    if (errr !== {}) {
        setErrors({messages: errr})
    }
}
export default submitHandler