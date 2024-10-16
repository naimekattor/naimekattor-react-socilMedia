import "./App.css";
import Header from "./component/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import { useState } from "react";
import PostListProvider from "./store/PostListContext";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="main-div">
        <SideBar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
