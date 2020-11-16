const fs = require("fs");
const path = require("path");
let apiHits = 0;

let mockData = fs.readFileSync(path.join(__dirname, "../mocks/providers.json"), 'utf-8');


const getProviders = (req, res, next) => {
    apiHits++;
    const q = req.query.q || "";
    const sortBy = req.query.sortBy || "";
    let data = JSON.parse(mockData);
    if (q.length > 0) {
        data = data.filter((item) => {
            return (
                (item.name.toLowerCase().indexOf(q) !== -1) ||
                (item.rating.toString().indexOf(q.toString()) === 0) ||
                (item.lowest_price.toString() == q)
            )
        })
    }
    if (sortBy === 'price' || sortBy === 'rating') {
        switch (sortBy) {
            case 'price': {
                data = data.sort((a, b) => a.lowest_price - b.lowest_price)
                break;
            }
            case 'rating': {
                data = data.sort((a, b) => b.rating - a.rating)
                break;
            }
        }
    }
    res.json(data);
}


const getProviderById = (req, res, next) => {
    apiHits++;
    const id = req.params.id;
    if (!id) {
        throw new Error("Id not provided");
    }
    let data = JSON.parse(mockData);
    data = data.filter((item) => {
        return item.id === parseInt(id);
    })
    if (data.length > 0) {
        res.json(data[0]);
    }
    else {
        res.json({});
    }
}

const getCounts = (req, res, next) => {
    let data = JSON.parse(mockData);
    res.json({
        apiHits,
        ispCount: data.length
    });
}

module.exports = {
    getProviders,
    getProviderById,
    getCounts
}