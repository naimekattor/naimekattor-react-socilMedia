import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currState, action) => {
  if (action.type === "DELETE_POST") {
    currState = currState.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "ADD_POST") {
    currState = [action.payload, ...currState];
  }
  return currState;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (postTitle, postContent, image) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postContent,
        url: image,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id: postId,
      },
    });
  };
  return (
    <PostListData.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListData.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "React",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    reaction: "10",
    userId: "user-1",
    tags: ["react", "course"],
    url: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
  },
  {
    id: "2",
    title: "Node",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    reaction: "10",
    userId: "user-1",
    tags: ["Node", "course"],
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s",
  },
];
export default PostListProvider;
