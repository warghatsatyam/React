// create post context here
import { useContext, createContext, useState } from 'react';
const PostContext = createContext();

// Create custom hook that returns context value here
function usePost() {
    return useContext(PostContext);
}

// create a custom saved post provider here with add and reset functions
function CustomPostContext({children}){
    const [savedPosts,setSavedPosts] = useState([]);

    const addPost = (newPost) => setSavedPosts([...savedPosts, newPost]);

    const [showSavedList, setShowSavedList] = useState(false);

    const removePost = () => setSavedPosts([]);


    return (
        <PostContext.Provider value={{savedPosts,addPost,removePost,showSavedList,setShowSavedList}}>
            {children}
        </PostContext.Provider>
    )
}

export {usePost,CustomPostContext}