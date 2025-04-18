import React from "react";
import "./archives.css";
import Image from "next/image";
import articles from "./articles"; 

const Article = ({ title, imageSrc, altText, caption, paragraphs }) => (
  <div className="column">
    <h2 className="headline">{title}</h2>
    <div className="article-content">
      <figure className="image-figure">
        <Image
          src={imageSrc}
          alt={altText}
          width={400}
          height={150}
          className="article-image"
        />
        <figcaption className="image-caption">{caption}</figcaption>
      </figure>
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </div>
);

const Archives = () => {
  return (
    <div className="archives-page">
      <header>
        <h1>The Ink That Never Fades</h1>
      </header>

      <div className="subhead">
        An archive of voices, thoughts, and timeless creativity.
      </div>

      <div className="content">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Archives;
