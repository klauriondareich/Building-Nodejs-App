const express = require("express");
const {User, validate} = require("../models/user");

const router = express.Router();

// CRUD Operations

// Create User route

router.post("/createUser", async (req, res) => {

        const user = new User({

            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            datenaissance: req.body.datenaissance,
            profession: req.body.profession,
            sexe: req.body.sexe
    
        });

        const result = await user.save();
    
        res.status(200).send(result)

});

// Get all users route

router.get("/getUsers", async(req, res) => {

    const result = await User.find()
        .sort({"createdAt": -1})
        .select({firstname: 1, lastname: 1});

    res.status(200).send(result)
});

// Get an user by id

router.get("/getUsers/:id", async (req, res) => {
    
    const id = req.params.id;
    const result = await User.findOne({_id: id});
    res.status(200).send(result)

});

// Get users with pagination 
router.get("/getUsers/:pageNumber/:pageSize", async (req, res) => {

    const pageNumber = req.params.pageNumber;
    const pageSize = req.params.pageSize;

    const result = await User.find()
        .skip((pageSize -1) * pageNumber)
        .limit(pageSize);
    
    res.status(200).send(result)
    
});

// Update an user route

router.put("/updateUsers/:id", async (req, res) => {

    const id = req.params.id;

    const result = await User.findByIdAndUpdate(id, {

       $set:{
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            createdAt: req.body.createdAt,
            datenaissance: req.body.datenaissance,
            profession: req.body.profession,
            sexe: req.body.sexe
       }

    }, {new: true});

    res.status(200).send(result)
});

// Delete an user route

router.delete("/deleteUser/:id", async (req, res) => {

    const id = req.params.id;
    const result = await User.findByIdAndRemove(id);

    res.status(200).send(result)

})


module.exports = router