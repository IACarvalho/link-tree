import "./LinkTree.css";

export default function LinkTree() {
  const links = [
    { name: "Live Pix", url: "https://livepix.gg/iacarvalho" },
    { name: "Discord", url: "https://discord.gg/sCJNZmf64n" },
    { name: "BlueSky", url: "https://bsky.app/profile/iacarvalho.bsky.social" },
    { name: "Twitch", url: "https://www.twitch.tv/afonsoverse" },
  ];

  return (
    <div className="link-tree">
      {links.map((link, index) => (
        <a
          className="link-button"
          href={link.url}
          key={index}
          target="_blanck"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
