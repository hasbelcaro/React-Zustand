import { useEffect } from "react";
import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";

function App() {
  // const count = useCounterStore((state) => state.count);
  // const title = useCounterStore((state) => state.title);

  // Obtener los valores del store
  const { title, count, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  // Obtener función del store
  // const increment = useCounterStore((state) => state.increment);
  const { increment, getPosts } = useCounterStore(); //Destructuring

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>

      <button
        onClick={() => {
          increment(10);
        }}
      >
        Increment by 10
      </button>

      <hr />

      {JSON.stringify(posts)}
    </div>
  );
}

export default App;
