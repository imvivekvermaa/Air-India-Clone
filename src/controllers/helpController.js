const helpDetails = (req, res) => {
    return res.status(200).send({
        success: true,
        message: "Successfully hitting the api",
        data: {
            contact: "91XXXXXXXX"
        }
    })
}

module.exports = helpDetails