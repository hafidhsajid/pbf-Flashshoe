import { useState } from "react";

const Post = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("level");
  const [address, setAddress] = useState("address");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { username, password, level, address };
    console.log(username);

    fetch("http://localhost/server/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="number"
          required
          value="2"
          onChange={(e) => setLevel(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Address:</label>
        <textarea
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Post;
