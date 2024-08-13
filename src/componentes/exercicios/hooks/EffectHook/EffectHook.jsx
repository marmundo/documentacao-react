import { useState, useEffect } from "react";

function EffectHook() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Faz a chamada à API quando o componente é montado
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // O array vazio faz com que o useEffect seja executado apenas uma vez na montagem do componente
  useEffect(() => {
    console.log("Eu executo quando posts é atualizado");
  }, [posts]); // O array com post faz com que o useEffect seja executado apenas quando o estado posts for alterado
  useEffect(() => {
    console.log("Eu executo em todas as montagens e atualizações");
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EffectHook;
