const mongoose = require("mongoose");
const Joi = require("joi");


// Schema structure

const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        lowercase: true
    },
    lastname: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 100,
    },
    profession:{
        type: String,
        minLength: 5,
        maxLength: 500
    },
    datenaissance:{
        type: String,
    },
    sexe:{
        type: String,
        enum: ['f', 'm'],
        lowercase: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

// Creating model

const User = mongoose.model("user", userSchema);

// Validation logic
function validateUser(user){

    const schema = Joi.object({
        firstname: Joi.string().min(2).max(50).required(),
        lastname: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(8)
        .email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
        password: Joi.string().min(8).max(100).required(),
        profession: Joi.string().min(5).max(500),
        datenaissance: Joi.date(),
        sexe: Joi.string(),
        createdAt: Joi.date().timestamp(),
    });

    return Joi.validate(user, schema)
};

module.exports.User = User;
module.exports.validate = validateUser;
