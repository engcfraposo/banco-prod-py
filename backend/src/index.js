const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const verifyAccessToken = require('./routes/middleware/verifyAccessTokenMiddleware')
const indexRoutes = require('./routes')
const userRoutes = require('./routes/user')

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-ub5tj.gcp.mongodb.net/bancoprodpy?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(cors());
app.use(express.json());
app.use('/auth',verifyAccessToken,indexRoutes);
app.use('/',userRoutes);

app.listen(3001);