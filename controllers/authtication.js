const userschema = require("../models/userschema");
const { registrationValidator } = require("../utils/registraionvalidator");


const registration = async (req, res) => {
    const { username, password, email, role } = req.body;

    try {
        // Validate the incoming data
        await registrationValidator({ username, password, email, role });
        let findindb = await userschema.findOne({ email }); 

        if (findindb) {
            return res.send({
                status: 401,
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

const login = async (req, res) => {
    
}


module.exports = { registration, login }
