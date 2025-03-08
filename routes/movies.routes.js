const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "List of movies",
        movies: [
            { id: 1, title: "Inception", genre: "Sci-Fi" },
            { id: 2, title: "The Dark Knight", genre: "Action" }
        ]
    });
});

router.get("/:id", (req, res) => {
    res.json({
        message: `Movie details for ID: ${req.params.id}`,
        movie: { id: req.params.id, title: "Inception", genre: "Sci-Fi" }
    });
});

module.exports = router;
