import { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../store/PostListContext";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
