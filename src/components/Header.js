export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="intro">
          <h1 className="text-2xl md:text-6xl font-semibold text-black pb-2">
            Sabina Hamzić
          </h1>
          <h4 className="text-lg md:text-4xl font-semibold">
            Front-end engineer
          </h4>
        </div>
        <div className="socials pl-5 border-l-4 border-yellow-500 py-20 align-middle">
          {socials.map((item) => (
            <div className="social-item flex items-center py-2">
              <img src={item.imageUrl} style={{ height: "20px" }} />
              <a
                href={item.href}
                target="_blank"
                className="pl-2 text-blue-400 hover:text-blue-900 font-semibold"
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

const socials = [
  {
    imageUrl: "email.png",
    href: "mailto:hi.sabinam@gmail.com",
    text: "hi.sabinam@gmail.com",
  },
  {
    imageUrl: "linkedin.png",
    href: "https://www.linkedin.com/in/sabina-hamzic-muminovic-41ab44116/?originalSubdomain=ba",
    text: "LinkedIn",
  },
];
