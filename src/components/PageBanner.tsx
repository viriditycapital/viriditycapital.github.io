import React from "react";

interface PageBannerProps {
  pictureSrc: string;
  title?: string;
  description?: string;
  link: string; // Link where this banner leads us to
}

class PageBanner extends React.Component<PageBannerProps> {
  render() {
    const { pictureSrc, title, description, link } = this.props;
    return <div className="banner-image"
      style={{
        backgroundImage: `url(${pictureSrc})`,
        height: "100%",
        width: "100vw",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ color: "white" }}>
        {
          title && <h1>{title}</h1>
        }
        {
          description &&
          <div>
            {description}
          </div>
        }
        <a href={link} target="_blank">Learn More</a>
      </div>
    </div>
  }
}

export default PageBanner;
