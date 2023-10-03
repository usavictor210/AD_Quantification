export default {
  entries: [{
    name: "Windows Media Player",
    action() {
      const links = [
        // Get trolled
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        // Rite of spring
        "https://youtu.be/rP42C-4zL3w?t=2",
        // Aleph 0 which for some reason caught on for a while
        "https://www.youtube.com/watch?v=fTaWKbD3UK8",
        // "If you have not listened to first suite in E flat by Gustav Holst do it now" -Erf
        "https://www.youtube.com/watch?v=fLbP6qpI1YI",
        "https://www.youtube.com/watch?v=UEpiASdLRYc",
        "https://www.youtube.com/watch?v=1rwAvUvvQzQ",
        "https://www.youtube.com/watch?v=u1yLkoQvd-Y",
        "https://www.youtube.com/watch?v=6Q57JfIz2Mg",
        "https://www.youtube.com/watch?v=DekTSh1QmvY",
        "https://www.youtube.com/watch?v=-Fn8yIJ-W4U",
        "https://www.youtube.com/watch?v=1PUsih-V9P4",
      ];
      window.open(links[Math.floor(Math.random() * links.length)]);
    },
    image: "desktop--windows-media-player.png"
  },
  {
    name: "AD Discord",
    action() {
      window.open("https://discord.gg/ST9NaXa");
    },
    image: "desktop--discord-logo.png"
  },
  {
    name: "Games",
    action() {
      Modal.s12Games.show();
    },
    image: "desktop--games.png"
  },
  {
    name: "???",
    action() {
      Modal.message.show("This does nothing yet");
    },
    image: "desktop--unsmith.png"
  },
  {
    name: "Depression Game",
    action() {
      window.open("/public/fungame/depression.html");
    },
    image: ""
  }

],
  selected: -1,
};
