const { createUser } = require("../repository/userRepository")

const saveUser= (req, res) => {
    createUser({
        email:  "1@gmail.com",
        password: "123",
        username: "Vivek"
    })
    
    console.log(createUser)
}

module.exports= saveUser;