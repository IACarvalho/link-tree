import "./LinkTree.css";

export default function LinkTree() {
  const links = [{ name: "Live Pix", url: "https://livepix.gg/iacarvalho" }];

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
