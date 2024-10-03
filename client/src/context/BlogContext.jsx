import { createContext, useMemo, useCallback } from "react";
import axios from "axios";
import useSWR from "swr";
import PropTypes from "prop-types";
import fetcher from "../functions/fetcher";

const BlogContext = createContext();

function BlogContextProvider({ children, id }) {
  const {
    data: sampleBlogData,
    isLoading: sampleBlogIsLoading,
    error: sampleBlogError,
  } = useSWR(`http://localhost:3310/api/blog/sample`, fetcher);

  const {
    data: blogData,
    isLoading: blogIsLoading,
    error: blogError,
    mutate: refetchBlog,
  } = useSWR(`http://localhost:3310/api/blog`, fetcher);

  const {
    data: blogArticleData,
    isLoading: blogArticleIsLoading,
    error: blogArticleError,
  } = useSWR(`http://localhost:3310/api/blog/${id}`, fetcher);

  const updateBlog = useCallback(
    async (blogId, formData) => {
      try {
        await axios.put(`http://localhost:3310/api/blog/${blogId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        refetchBlog();
      } catch (error) {
        console.error("Erreur lors de la mise à jour de la ressource:", error);
      }
    },
    [refetchBlog]
  );

  const handleUpdateBlog = useCallback(
    async (blogId, formData) => {
      try {
        await updateBlog(blogId, formData);
      } catch (error) {
        console.error("Erreur lors de la mise à jour Blog:", error);
      }
    },
    [updateBlog]
  );

  const contextValue = useMemo(
    () => ({
      sampleBlogData,
      sampleBlogIsLoading,
      sampleBlogError,
      blogData,
      blogIsLoading,
      blogError,
      blogArticleData,
      blogArticleIsLoading,
      blogArticleError,
      handleUpdateBlog,
    }),
    [
      sampleBlogData,
      sampleBlogIsLoading,
      sampleBlogError,
      blogData,
      blogIsLoading,
      blogError,
      blogArticleData,
      blogArticleIsLoading,
      blogArticleError,
      handleUpdateBlog,
    ]
  );

  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  );
}

BlogContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
};

export { BlogContext, BlogContextProvider };
