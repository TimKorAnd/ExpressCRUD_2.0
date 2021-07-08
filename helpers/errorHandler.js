module.exports = (error, res) => {
    console.log(error); // TODO remove log
    res.status(500).json({
        message: "error",
        messages: error.message ?? error
    });
}
