"use client";

import { adjustLikes } from "@/app/actions/adjustLikes";

type Props = {
  likes: number;
};

function Counter({ likes }: Props) {
  return (
    <div className="flex p-5 mb-2 space-x-2 border">
      <h2>Normal Counter</h2>

      <button
        className="px-4 py-2 bg-teal-700 rounded-md"
        onClick={() => adjustLikes(-1)}
      >
        -
      </button>
      <p>{likes}</p>
      <button
        className="px-4 py-2 bg-teal-700 rounded-md"
        onClick={() => adjustLikes(1)}
      >
        +
      </button>
    </div>
  );
}
export default Counter;
