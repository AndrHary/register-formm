function errorHandler(regexes, userData) {
    const errr = {}
    if (userData.password !== userData.confirmPassword) {
        errr.confirmPassword = 'Missmatched passwords!'
    }
    if (!userData.fullName.match(regexes.fullName)) {
        errr.fullName = 'Invalid name!'
    }
    if (!userData.email.match(regexes.email)) {
        errr.email = 'Invalid email!'
    }
    if (!userData.phoneNumber.match(regexes.phoneNumber)) {
        errr.phoneNumber = 'Invalid phone number!'
    }
    if (!userData.password.match(regexes.password)) {
        errr.password = 'Stronger password please!'
    }
    return errr
}
export default errorHandler