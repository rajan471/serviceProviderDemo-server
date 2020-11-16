module.exports = (app) => {
    require("./providers")(app);

    app.use((err, req, res, next) => {
        if (err) {
            res.json({ error: err })
        } else {
            res.json({
                error: "Internal error"
            })
        }
    })
}