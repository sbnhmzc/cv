export default function AboutMeList({ title, listData }) {
  return (
    <div className="about-me-list-container py-4">
      <h2 className="text-xl md:text-2xl font-semibold py-8">{title}</h2>
      {listData.map((item) => {
        return (
          <div className="item-wrapper py-6">
            {item.duration && (
              <div className="text-sm text-gray-400 pb-2">{item.duration}</div>
            )}
            <div>
              <div className="yellow-dot"></div>
              <a
                href={item.website}
                target="_blank"
                className="text-blue-400 hover:text-blue-900 font-semibold"
              >
                {item.name}
              </a>{" "}
              {item.slogan && "-"} <i className="underline">{item.slogan}</i>
            </div>
            {item.title && (
              <div className="font-semibold py-2">{item.title}</div>
            )}
            {item.description.map((descriptionPart) => {
              if (descriptionPart.type === "text") {
                return descriptionPart.text;
              } else if (descriptionPart.type === "link") {
                return (
                  <a href={descriptionPart.href} className="text-blue-500">
                    {descriptionPart.text}
                  </a>
                );
              }
            })}
            {item.skills?.length > 0 && (
              <div className="pt-4">
                {item.skills?.map((skill) => (
                  <span className="skill-item text-yellow-500 pr-4 font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
