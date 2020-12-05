import { homeserverUrl, accessToken, storage } from './bot_config';
const client = new MatrixClient(homeserverUrl, accessToken, storage);

AutojoinRoomsMixin.setupOnClient(client);

client.start().then(() => console.log("Client started!"));