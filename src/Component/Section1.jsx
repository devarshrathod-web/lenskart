import React from "react";

function Section1() {
  const sections = [
    {
      title: "Free Lens Replacement at Stores",
      img: "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-hustlrswitch-GJ-150525.png",
    },
    {
      title: "Buy One Get One Free",
      img: "https://static5.lenskart.com/media/uploads/1920x520-desktop-banner.png",
    },
    {
      title: "Book Eye Test at Home",
      img: "https://static5.lenskart.com/media/uploads/hechome11.png",
    },
    {
      title: "Free Online Eye Test",
      img: "https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg",
    },
    {
      title: "Premium Eyewear",
      img: "https://static1.lenskart.com/media/desktop/img/16-sep-24/r1.jpeg",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {sections.map((sec, index) => (
        <div
          key={index}
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            background: "#fff",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "600",
              padding: "12px",
              margin: 0,
              background: "#f8f8f8",
              borderBottom: "1px solid #eee",
            }}
          >
            {sec.title}
          </h2>
          <img
            src={sec.img}
            alt={sec.title}
            style={{ width: "100%", display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}

export default Section1;
