import {
    MatrixClient,
    SimpleFsStorageProvider,
    AutojoinRoomsMixin
} from "matrix-bot-sdk";

const homeserverUrl = "https://matrix.org"; // make sure to update this with your url
const accessToken = "YourSecretAccessToken";
const storage = new SimpleFsStorageProvider("bot.json");

export {
    homeserverUrl, accessToken, storage
}