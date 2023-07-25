import Counter from "@/components/Counter";
import OptimisticCounter from "@/components/OptimisticCounter";

export default async function Home() {
  const res = await fetch("http://localhost:3000/likes", {
    cache: "no-cache",
    next: {
      tags: ["likes"],
    },
  });

  const { likes } = await res.json();

  return (
    <div className="flex flex-col items-center justify-center p-5 ">
      <h1 className="mb-5 text-3xl font-bold">Counter: {likes}</h1>
      <Counter likes={likes} />
      <hr />
      <OptimisticCounter likes={likes} />
    </div>
  );
}
