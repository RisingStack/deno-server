import { RCONServer } from 'https://github.com/RisingStack/rcon-deno/raw/master/index.ts';

const rconServer = new RCONServer(27015, "localhost", "aeYoqu2Aeh4see3");
await rconServer.connect();
const players = await rconServer.execCommand(
  "/players",
);

console.log(players);
