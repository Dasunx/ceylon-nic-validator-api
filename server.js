const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Api is running'));

app.use('/api/validate', require('./routes/validate'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
