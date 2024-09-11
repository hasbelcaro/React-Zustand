import { useCounterStore } from "./store/counterStore";

function App() {
  const count = useCounterStore((state) => state.count);
  const title = useCounterStore((state) => state.title);

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>
    </div>
  );
}

export default App;
