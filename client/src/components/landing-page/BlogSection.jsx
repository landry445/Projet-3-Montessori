// Hooks
import { useContext, useRef } from "react";

// Context
import { BlogContext } from "../../context/BlogContext";

// Utils
import parseContent from "../../functions/parseContent";

// Custom Hooks
import useScreenSize from "../../hooks/useScreenSize";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";

// CSS
import "./styles/BlogSection.css";

// Components
import SplashTwo from "../svg/SplashTwo";
import BlogCard from "./BlogCard";
import Title from "../shared/Title";
import BigSun from "../svg/BigSun";

function BlogSection() {
  const { sampleBlogData, sampleBlogIsLoading } = useContext(BlogContext);
  const scrollContainerRef = useRef(null);
  const screenSize = useScreenSize(800);

  const formatDate = (dateString) => {
    const date = new Date(dateString); // Format français : jour/mois/année
    return date.toLocaleDateString("fr-FR");
  };

  useHorizontalScroll(scrollContainerRef, screenSize);

  if (sampleBlogIsLoading) return "loading";

  return (
    <section className="blog-section__container">
      <div className="blog-section__title-container">
        <Title
          style={{ marginBottom: "4rem" }}
          boldText="Découvrez nos"
          italicText="derniers articles"
          htmlTag="h2"
        />
        <BigSun className="blog-section__sun" />
      </div>
      <div className="blog-section" ref={scrollContainerRef}>
        {sampleBlogData.map((comment) => (
          <BlogCard
            key={comment.id}
            imgSrc={`http://localhost:3310/${comment.image}`}
            title={comment.title}
            date={formatDate(comment.published_date)}
            content={parseContent(comment.content)}
          />
        ))}
      </div>
      <SplashTwo className="blog-section__splash" />
    </section>
  );
}

export default BlogSection;
