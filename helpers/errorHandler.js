module.exports = (error, res) => {
    res.status(500).json({
        message: "error",
        messages: error.message ?? error
    });
}
