import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({limit: "16kb"}));
app.use(bodyParser.urlencoded({extended: true, limit: "1mb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

//routers
import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes.js';

app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);

export { app, port };