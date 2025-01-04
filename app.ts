import 'dotenv/config'
import "reflect-metadata"
import { Server } from "./src/model/server";


const app = new Server()


app.listen()