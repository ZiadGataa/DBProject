const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());  // For parsing JSON data
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'ziad2003us',
    database: 'moviereviewdb'
});

// Route to get movie list for dropdown
app.get('/movies', (req, res) => {
    db.query('SELECT MovieID, Name FROM movie', (err, results) => {
        if (err) {
            console.error('Error fetching movies:', err);
            return res.status(500).json({ error: 'Failed to fetch movies' });
        }
        res.json({ movies: results });
    });
});

// Route to submit review
app.post('/submit-review', (req, res) => {
    const { movie, review, rating, tags, name, email, age } = req.body;
    const reviewId = Math.floor(Math.random() * 1000000); // Random ID for demo

    // Insert into reviewer table if new reviewer, then add review
    db.query('INSERT INTO reviewer (Name, Email, Age, ReviewID) VALUES (?, ?, ?, ?)', [name, email, age, reviewId], (err, result) => {
        if (err) return res.status(500).json({ error: 'Failed to insert reviewer' });

        const reviewerId = result.insertId;

        db.query('INSERT INTO review (ReviewID, ReviewerID, MovieID, ReviewRating) VALUES (?, ?, ?, ?)',
            [reviewId, reviewerId, movie, rating], (err) => {
                if (err) {
                    console.error('Error inserting review:', err);
                    return res.status(500).json({ error: 'Failed to insert review' });
                }
                res.json({ success: true, reviewId: reviewId });
            }
        );
    });
});

// Route to get a review by ID
app.get('/reviews/:id', (req, res) => {
    const reviewId = req.params.id;
    db.query('SELECT * FROM review WHERE ReviewID = ?', [reviewId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch review' });
        if (results.length > 0) {
            res.json({ success: true, review: { reviewText: results[0].ReviewText, rating: results[0].ReviewRating } });
        } else {
            res.json({ success: false });
        }
    });
});

// Route to update a review by ID
app.put('/reviews/:id', (req, res) => {
    const reviewId = req.params.id;
    const { review, rating } = req.body;

    // Console log to check if data is received correctly
    console.log(`Updating review with ID: ${reviewId}, Review Text: ${review}, Rating: ${rating}`);

    // Check if data is received correctly before running the query
    if (!review || !rating) {
        return res.status(400).json({ error: 'Review text or rating missing.' });
    }

    db.query(
        'UPDATE review SET ReviewText = ?, ReviewRating = ? WHERE ReviewID = ?',
        [review, rating, reviewId],
        (err, results) => {
            if (err) {
                console.error('Error updating review:', err);
                return res.status(500).json({ error: 'Failed to update review' });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Review not found.' });
            }
            res.json({ success: true });
        }
    );
});


// Route to delete a review by ID
app.delete('/reviews/:id', (req, res) => {
    const reviewId = req.params.id;
    db.query('DELETE FROM review WHERE ReviewID = ?', [reviewId], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete review' });
        res.json({ success: true });
    });
});



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
