import express from "express";
import bodyParser from "body-parser";
import filmeRouters from "../src/routes/filmeRouters.js"
const app = express();

app.use(bodyParser.json());

app.use('/', filmeRouters);

export default app;


