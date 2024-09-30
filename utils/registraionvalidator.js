const registrationValidator = ({ username, password, email, role }) => {

    return new Promise((res, rej) => {
        if (!username || !password || !email || !role ) rej("please fill all detail")
        res("ok")
    })

}

module.exports = {registrationValidator}