const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "List of users",
        users: [
            { id: 1, name: "John Doe", email: "john@example.com" },
            { id: 2, name: "Jane Doe", email: "jane@example.com" }
        ]
    });
});

router.get("/:id", (req, res) => {
    res.json({
        message: `User details for ID: ${req.params.id}`,
        user: { id: req.params.id, name: "John Doe", email: "john@example.com" }
    });
});

module.exports = router;
