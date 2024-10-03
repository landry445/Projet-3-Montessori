import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import BlogArticleCard from "./BlogArticleCard";
import { mdToHTML } from "../../functions/parseContent";

const formatDate = (dateString) => {
  const date = new Date(dateString); // Format français : jour/mois/année
  return date.toLocaleDateString("fr-FR");
};

function BlogArticleList() {
  const { blogArticleData, blogArticleIsLoading, blogArticleError } =
    useContext(BlogContext);

  if (blogArticleIsLoading) {
    return <p>Chargement en cours...</p>;
  }

  if (blogArticleError) {
    return <p>Erreur lors du chargement des articles de blog...</p>;
  }

  if (!blogArticleData || blogArticleData.length === 0) {
    return <p>Aucun article de blog disponible.</p>;
  }

  return (
    <section>
      <BlogArticleCard
        key={blogArticleData.id}
        image={`http://localhost:3310/${blogArticleData.image}`}
        title={blogArticleData.title}
        date={formatDate(blogArticleData.published_date)}
        description={mdToHTML(blogArticleData.content)}
      />
    </section>
  );
}

export default BlogArticleList;
