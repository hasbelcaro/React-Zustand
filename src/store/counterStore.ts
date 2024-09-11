import { create } from "zustand";

// Tipo de dato para posts del counterState
interface Post {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  increment: (value: number) => void;
  posts: Post[];
  getPosts: () => Promise<void>;
  clearStore: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 10,
  title: "Some title",
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),
  posts: [],
  getPosts: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts);
    set((state) => ({
      ...state,
      posts,
    }));
  },
  clearStore: () => {
    set({}, true);
  },
}));
