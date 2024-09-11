import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";

function App() {
  // const count = useCounterStore((state) => state.count);
  // const title = useCounterStore((state) => state.title);

  // Obtener los valores del store
  const { title, count } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
    }),
    shallow
  );

  // Obtener función del store
  // const increment = useCounterStore((state) => state.increment);
  const { increment } = useCounterStore(); //Destructuring

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
    </div>
  );
}

export default App;
