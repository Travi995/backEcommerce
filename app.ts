import 'dotenv/config'
import { Server } from "./src/model/server";
import "reflect-metadata"


const app = new Server()


app.listen()