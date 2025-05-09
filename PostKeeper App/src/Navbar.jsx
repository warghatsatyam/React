import {usePost} from "./postContext";
export const Navbar = () => {
  const { removePost,savedPosts,showSavedList,setShowSavedList} = usePost()

  return (
    <div className="navbar">
      <span onClick={() => setShowSavedList(!showSavedList)}>
        Saved Posts: {savedPosts.length}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      <button onClick={removePost}>Reset</button>
    </div>
  );
};
