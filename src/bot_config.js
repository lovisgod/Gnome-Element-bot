import {
    MatrixClient,
    SimpleFsStorageProvider,
    AutojoinRoomsMixin
} from "matrix-bot-sdk";

import 'dotenv/config';


const homeserverUrl = process.env.HOME_SERVER_URL;
const accessToken = process.env.ACCESS_TOKEN;
// const homeserverUrl = "https://gnome.modular.im"
// const accessToken = "MDAxN2xvY2F0aW9uIGdub21lLm9yZwowMDEzaWRlbnRpZmllciBrZXkKMDAxMGNpZCBnZW4gPSAxCjAwMjdjaWQgdXNlcl9pZCA9IEBncmVldC1ib3Q6Z25vbWUub3JnCjAwMTZjaWQgdHlwZSA9IGFjY2VzcwowMDIxY2lkIG5vbmNlID0gR3AzXn5iQSszYi0qdV9nNAowMDJmc2lnbmF0dXJlINibrQKMvj_oOsacRP-rwTAw9qvIflp-rBXtwAHYIPodCg";
const storage = new SimpleFsStorageProvider("bot.json");

export {
    homeserverUrl, accessToken, storage, MatrixClient, AutojoinRoomsMixin
}