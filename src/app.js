const clientId = "masukan client id";
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });

// gambar
const gambar =
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXQ3cXN2N3QyMnIwbGZ4bTdoOWJtZDhrMjZ6MnBlMmtveHl1Mm42eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SS8CV2rQdlYNLtBCiF/giphy.gif";

const gambar2 = "https://media.tenor.com/Gi-2B1fmMcUAAAAi/intense-cat-money-bath.gif";
// ----

async function setActivity() {
  if (!RPC) return;

  const currentTimestamp = Date.now();

  RPC.setActivity({
    details: "Life is so cute and adorable.",
    state: "It's so funny, I can't stop laughing.",
    startTimestamp: currentTimestamp,
    largeImageKey: gambar,
    largeImageText: "Haha.",
    smallImageKey: gambar2,
    smallImageText: "Sucks.",
    type: 2,
    instance: false,
    buttons: [
      {
        label: "PixiHive 🍔",
        url: "https://dsc.gg/pixihive/",
      },
      {
        label: "zeemarimo 🍔",
        url: "https://www.youtube.com/@zeemarimoo/",
      }
    ],
  });
}

RPC.on("ready", () => {
  setActivity();

  // update every 48 hours
  setInterval(() => {
    setActivity();
  }, 172800000); //172800000 milisecond = 48 hours
});

RPC.login({ clientId }).catch(console.error);


