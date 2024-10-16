import { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { PostListData } from "../store/PostListContext";
import { BiLike, BiComment } from "react-icons/bi";
import { FaCircleArrowRight } from "react-icons/fa6";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  const [like, setLike] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const handleComment = () => {
    setShowCommentBox(!showCommentBox);
  };

  return (
    <div className="card post-card" style={{ width: "38rem" }}>
      <img src={post.url} className="card-img-top" alt="..." />
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.id)}
      >
        <TiDelete />
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
      <div className="reactions">
        <button
          type="button"
          className="btn btn-outline-primary "
          onClick={() => setLike(like + 1)}
        >
          <span>{like}</span> <BiLike /> Like
        </button>
        <button
          type="button"
          className="btn btn-outline-primary "
          onClick={handleComment}
        >
          <span></span> <BiComment />
          Comment
        </button>
      </div>
      {showCommentBox && (
        <div className="comment-input">
          <textarea type="text" name="" id="" />
          <div className="arrow-icon">
            {" "}
            <FaCircleArrowRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
