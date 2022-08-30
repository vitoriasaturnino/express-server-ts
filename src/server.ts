import * as express from "express";
import * as dotenv from "dotenv";
import {Request, Response} from "express";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Rodando em localhost:${PORT}`));

app.get("/", (req:Request, res:Response) => res.send("oizinho"));

// https://github.com/arleysouza/typeorm/blob/master/.e
// https://typeorm.io/