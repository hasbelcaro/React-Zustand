import { useCounterStore } from "./store/counterStore";

function App() {
  // const count = useCounterStore((state) => state.count);
  // const title = useCounterStore((state) => state.title);

  const values = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
  }));

  console.log(values);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
