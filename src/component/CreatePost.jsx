import { useContext, useRef, useState } from "react";
import { PostListData } from "../store/PostListContext";

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const { addPost } = useContext(PostListData);
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const ImageElement = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (postTitle && postContent && image) {
      const postTitle = postTitleElement.current.value;
      const postContent = postContentElement.current.value;
      addPost(postTitle, postContent, image);
      alert("Post Successfully Created");
      postTitleElement.current.value = "";
      postContentElement.current.value = "";
      setImage(null);
    }
  };
  const onImageChange = () => {
    setImage(URL.createObjectURL(ImageElement.current.files[0]));
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          placeholder="Enter a Title"
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="postTitle"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postContent" className="form-label">
          Post Content
        </label>
        <textarea
          placeholder="What's on your mind?"
          ref={postContentElement}
          rows="4"
          type="text"
          className="form-control"
          id="postContent"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Image" className="form-label">
          Add An Image
        </label>
        <input
          onChange={onImageChange}
          ref={ImageElement}
          type="file"
          className="form-control"
          id="Image"
        />
        <div className="preview">
          {image ? <img src={image} alt="" /> : null}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
