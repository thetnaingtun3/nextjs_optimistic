"use client";

import { adjustLikes } from "@/app/actions/adjustLikes";

import { experimental_useOptimistic as useOptimistic } from "react";
type Props = {
  likes: number;
};
function OptimisticCounter({ likes }: Props) {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    likes,
    (state, amount) => state + Number(amount)
  );

  const updateLikes = async (amount: number) => {
    setOptimisticLikes(amount);
    await adjustLikes(amount);
  };

  return (
    <div className="flex p-5 space-x-2 border ">
      <h2>Optimistic Counter</h2>

      <button
        className="px-4 py-2 bg-orange-300 rounded-md"
        onClick={() => updateLikes(-1)}
      >
        -
      </button>
      <p>{optimisticLikes}</p>

      <button
        className="px-4 py-2 bg-orange-300 rounded-md"
        onClick={() => updateLikes(1)}
      >
        +
      </button>
    </div>
  );
}

export default OptimisticCounter;
