const clientId = "masukin client id";
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });

// gambar
const scream_cat = "https://media.tenor.com/qG3RhKKfngMAAAAS/fiamani-cat.gif";
const scream_cat2 =
  "https://media.tenor.com/yVB7cwslsHcAAAAC/cat-screaming.gif";
const sadcat = "https://media.tenor.com/o9owbF_iALAAAAAC/sad-cat.gif";
const kingflippynips =
  "https://media.tenor.com/n9d7ic_UDMkAAAAC/flippynyps.gif";
// ----

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    details: "Life is so cute and adorable.",
    state: "It's so funny, I can't stop laughing.",
    // startTimestamp: new Date(Date.now() - 720 * 1000000 ),

    largeImageKey: kingflippynips,
    largeImageText: "Haha.",
    // smallImageKey: "",
    smallImageText: "Sucks.",
    type: 2,
    instance: false,
    // buttons: [
    //   // {
    //   //   label: "PixiHive 🍔",
    //   //   url: "https://dsc.gg/pixihive/",
    //   // },
    //   // {
    //   //   label: "zeemarimo 🍔",
    //   //   url: "https://www.youtube.com/@zeemarimo/",
    //   // }
    // ],
  });
}

RPC.on("ready", () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 2000);
});

RPC.login({ clientId }).catch(console.error);
