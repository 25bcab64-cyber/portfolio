const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tiger',
  database: 'portfolio'
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('MySQL Connected ✅');
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend Running 🚀');
});

// Sample projects endpoint
app.get('/projects', (req, res) => {
  const projects = [
    { title: "Stock Market Portfolio", description: "Visual portfolio with analytics dashboards", icon: "📊" },
    { title: "College Listing Website", description: "500+ colleges • Search • Filters • Full-stack", icon: "🌐" },
    { title: "Python Programs", description: "DSA • Algorithms • Academic problem solving", icon: "💻" }
  ];
  res.json(projects);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});