import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";

function App() {
  // const count = useCounterStore((state) => state.count);
  // const title = useCounterStore((state) => state.title);

  const { title, count } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
    }),
    shallow
  );

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>
    </div>
  );
}

export default App;
