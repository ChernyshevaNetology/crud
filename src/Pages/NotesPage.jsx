import React, { useState, useEffect } from "react";
import Note from "../components/Note";
import Header from "../components/Header";
import InputNote from "../components/InputNote";
import axios from "axios";

const NotesPage = () => {
  const url = "http://localhost:3000/posts";
  const [posts, setPosts] = useState([]);
  const [val, setVal] = useState("");

  const loadPosts = async () => {
    const data = await axios.get(url).then((data) => setPosts(data.data));
    return data;
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const updatePosts = () => loadPosts();

  const handleValue = ({ target: { value } }) => setVal(value);

  const addNote = async () => {
    return await axios
      .post(url, {
        content: val,
      })
      .then(() => loadPosts())
      .catch((err) => console.log(err));
  };

  const deletePost = async (id) =>
    axios.delete(url + `/${id}`).then(() => loadPosts());

  return (
    <div className="container">
      <Header update={updatePosts} />
      <div className="notes">
        {posts &&
          posts.map(({ id, content }) => (
            <Note key={id} id={id} content={content} deletePost={deletePost} />
          ))}
      </div>
      <InputNote handleValue={handleValue} addNote={addNote} />
    </div>
  );
};

export default NotesPage;
