import { homeserverUrl, accessToken, storage, MatrixClient, AutojoinRoomsMixin } from './bot_config';
const client = new MatrixClient(homeserverUrl, accessToken, storage);

AutojoinRoomsMixin.setupOnClient(client);

client.start().then(() => console.log("Client started!"));

client.on("room.message", (roomId, event) => {
    if (! event["content"]) return;
    const sender = event["sender"];
    const body = event["content"]["body"];

   
    if (body.startsWith("hello")) {
        const replyText = "hello " + sender
        if (sender.includes('@greet-bot')) {
            return;
        } else {
            client.sendMessage(roomId, {
                "msgtype": "m.text",
                "body": replyText,
            });
        }
       
    }
});


//  listen to any event in the room

client.on("room.event", (roomId, event) => {
    if (! event["content"]) return;
    const sender = event["sender"];
    const type = event["type"]

    console.log(event);
    console.log(event["type"]);

   
    if (type === 'm.room.member') {
        event["content"]["membership"]
        const replyText = "hello " + sender + " " + "welcome to gnome extension channel. Please message @sri:gnome.org for more clarification"
        if (event["content"]["membership"] == "leave") {
            return;
        } else if (event["content"]["membership"] == "join") {
            client.sendMessage(roomId, {
                "msgtype": "m.text",
                "body": replyText,
            });
        }
       
    }
});


// { type: 'm.room.message',
//   sender: '@lovisgod:gnome.org',
//   content: { msgtype: 'm.text', body: 'hello bot' },
//   origin_server_ts: 1607284479645,
//   unsigned: { age: 636 },
//   event_id: '$rkuqQA_fsc8JzrflaMm6GHfkhb6e69Ob3h1CfjsTQrg' }


// { type: 'm.room.member',
//   sender: '@lovisgod:gnome.org',
//   content: { membership: 'leave' },
//   state_key: '@lovisgod:gnome.org',
//   origin_server_ts: 1607287459078,
//   unsigned:
//    { replaces_state: '$ER6jrrmuPPaWiZZYaI5zDu-nPAiJ9nFNgjFaRpGGpZg',
//      prev_content: { membership: 'join', displayname: 'lovisgod' },
//      prev_sender: '@lovisgod:gnome.org',
//      age: 220 },
//   event_id: '$d3jC2slkV0jca4j0-i97YQhHfEg9SFY-1E6YkKW3PdI' }