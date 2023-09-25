const { v4: uuidv4 } = require("uuid")

module.exports = [
    {
        id: uuidv4(),
        item_name: "Street Fighter 6",
        amount: -60,
        date: "8-4-23",
        from: "Steam",
        category: "Video Games"
    },
    {
        id: uuidv4(),
        item_name: "Water Bottle",
        amount: -15,
        date: "7-29-23",
        from: "Target",
        category: "Hygeine"
    },
    {
        id: uuidv4(),
        item_name: "Drone",
        amount: -500,
        date: "8-3-23",
        from: "Microcenter",
        category: "Technology"
    },
    {
        id: uuidv4(),
        item_name: "Direct Deposit",
        amount: 700,
        date: "6-16-23",
        from: "Office",
        category: "Income"
    },
    {
        id: uuidv4(),
        item_name: "Groceries",
        amount: -90,
        date: "6-20-23",
        from: "Costco",
        category: "food"
    }
]