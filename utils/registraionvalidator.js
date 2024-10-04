const registrationValidator = ({ username, password, email, role }) => {

    return new Promise((res, rej) => {
        if (!username || !password || !email || !role ) rej("please fill all detail")
        res("ok")
    })

}

const addHotelValidator = ({name, location, description, amenities, images, createdAt, email}) => {
    return new Promise((res, rej) => {
        if(!name || !location || !description || !amenities || !images || !createdAt || !email) rej('please fill all detail ')
            res("ok")
    })
}


const validateAdmin = ({email, password}) => {
    return new Promise((res, rej) => {
        if(!email || !password) rej('please fill all details')

        res('admin is approved')
    })
}

module.exports = {registrationValidator, addHotelValidator, validateAdmin}