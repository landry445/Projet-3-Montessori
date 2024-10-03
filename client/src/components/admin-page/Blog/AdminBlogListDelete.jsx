// import PropTypes from "prop-types";
import { useState, useContext } from "react";
import "./styles/AdminBlogListDelete.css";
import AdminblogCardContainer from "./AdminblogCardContainer";
import Button from "../../shared/Button";
import Modal from "../shared/Modal";

// Context
import { BlogContext } from "../../../context/BlogContext";

function AdminBlogListDelete() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const { blogData, blogIsLoading } = useContext(BlogContext);
  if (blogIsLoading) return "loading";
  // Afficher 6 cards de plus :
  const handleShowMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  // Simuler la suppression d'un blog
  const handleDeleteBlog = (blogId) => {
    console.info(`Deleting blog with id: ${blogId}`);
    // Logique de suppression ici (si nécessaire)
  };

  if (blogIsLoading) return "loading";

  const handleShowDeleteModal = (blogId) => {
    setSelectedBlogId(blogId);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedBlogId) {
      handleDeleteBlog(selectedBlogId);
      setShowModal(false);
    }
  };

  return (
    <div className="blog-cardlist-admin">
      <ul className="blog-cardlist-admin__list">
        {blogData.slice(0, visibleCount).map((blog) => (
          <li className="Blog-card_delete-admin__list-item" key={blog.Blog_id}>
            <AdminblogCardContainer
              title={blog.title}
              onClick={() => handleShowDeleteModal(blog.Blog_id)}
              onDelete={handleShowDeleteModal}
              showDeleteButton
            />
          </li>
        ))}
      </ul>
      {visibleCount < blogData.length && (
        <Button
          onClick={handleShowMore}
          text="Voir plus"
          style={{
            backgroundColor: "var(--clr-yellow)",
            margin: "0 auto",
            display: "block",
            alignSelf: "center",
          }}
        />
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        actiontext="supprimer ce blog ?"
        validateButton="Supprimer"
        onValidate={handleConfirmDelete}
      />
    </div>
  );
}

export default AdminBlogListDelete;
