const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// הגשת קבצים סטטיים כמו HTML, CSS, ו-JS
app.use(express.static(path.join(__dirname, 'public')));

// הגדרת route לדף הראשי
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// התחלת השרת
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
