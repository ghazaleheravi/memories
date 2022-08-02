import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//our routers
import postRouters from './routes/posts.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

//all the routes in postRoutes are accessible from http://localhost:5000/posts
app.use('/posts', postRouters)

const uri = "mongodb+srv://admin_ghazalehH:RezaGhazalehBibak123@sandbox.mxfyc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  })
  .catch(error => console.log(error.message));








