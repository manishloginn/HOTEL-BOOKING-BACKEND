
const hotelschema = require("../models/hotelschema");
const userschema = require("../models/userschema");
const JWT = require('jsonwebtoken')


const { registrationValidator, addHotelValidator, validateAdmin } = require("../utils/registraionvalidator");
const roomschema = require("../models/roomschema");


const hotelRegistration = async (req, res) => {
    const { name, location, description, amenities, images, createdAt, email, password } = req.body
    try {
        await addHotelValidator({ name, location, description, amenities, images, createdAt, email })
        const data = new hotelschema({
            name,
            location,
            description,
            amenities,
            images,
            createdAt,
            email,
            password
        })
        data.save()
        res.send({
            status: 200,
            message: "Hotel Data save"
        })
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send({ error: "An error occurred while adding data." });
    }
}

const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        validateAdmin({ email, password })
        const findadmin = await hotelschema.findOne({ email: email })
        console.log(findadmin)
        if (!findadmin) {
            return res.send({
                status: 401,
                message: "admin not found"
            })
        }
        const match = findadmin.password !== password
        if (match) {
            return res.send({
                statud: 401,
                message: "password not match"
            })
        }

        const token = JWT.sign(
            {id:findadmin._id, email:findadmin.email, role:findadmin.role},
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        )

        res.cookie("adminToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict', 
            maxAge: 3600000, 
        })

        return res.send({
            status: 200,
            message: "user Login successfull",
            data: findadmin
        })

    } catch (error) {
        res.status(500).json(error)
    }
}


const roomAdd = (req, res) => {
    const {  roomtype, price, availability, capacity, amenities } = req.body

    const token = req.cookies.adminToken

    admin = JWT.verify(token, process.env.JWT_SECRET)

    req.hotelId = admin.id

   const hotelId = req.hotelId

    // console.log("roomadd", admin)

    
    try {
        const data = new roomschema({
            hotelId : hotelId,
            roomtype,
            price,
            availability,
            capacity,
            amenities
        })

        data.save()
        res.status(201).send(data);
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send({ error: "An error occurred while adding data." });
    }
}


const userRegistration = async (req, res) => {
    const { username, password, email, role } = req.body;
    try {
        await registrationValidator({ username, password, email, role });
        let findindb = await userschema.findOne({ email });
        if (findindb) {
            return res.status(401).json({
                message: "User already exists"
            });
        }
        const data = new userschema({
            username,
            password,
            email,
            role
        });

        await data.save();

        res.status(201).json(data);
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).send({ error: "An error occurred during registration." });
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const findUser = await userschema.findOne({ email: email })
        if (!findUser) {
            return res.status(401).json({
                message: "user Not found"
            })
        }

        console.log(findUser)
        const passwordmatch = findUser.password !== password

        if (passwordmatch) {
            return res.send({
                status: 401,
                message: "password not match"
            })
        }
        const token = JWT.sign(
            { id: findUser._id, email: findUser.email, role: findUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '10h' }
        )

        res.cookie("userToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict', 
            maxAge: 3600000 + 86400, 
        })


        
        res.send({
            message: "login Success",
            token: token,
            findUser
        })

        // res.status(200).json({
        //     message: "login Success",
        //     token: token
        // })
    } catch (error) {
        return res.status(500).json(error)
    }
}





module.exports = { userRegistration, userLogin, roomAdd, hotelRegistration, adminLogin }
