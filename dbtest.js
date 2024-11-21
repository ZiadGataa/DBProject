const mysql = require('mysql2');

// Create a connection to MySQL
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'ziad2003us',  // Replace 'yourpassword' with your actual root password
    database: 'moviereviewdb'
});

// Test connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

// Close the connection
connection.end();
