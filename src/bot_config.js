import {
    MatrixClient,
    SimpleFsStorageProvider,
    AutojoinRoomsMixin
} from "matrix-bot-sdk";

import 'dotenv/config';


const homeserverUrl = process.env.HOME_SERVER_URL;
const accessToken = process.env.ACCESS_TOKEN;
const storage = new SimpleFsStorageProvider("bot.json");

export {
    homeserverUrl, accessToken, storage, MatrixClient, AutojoinRoomsMixin
}