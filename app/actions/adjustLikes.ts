"use server"

import { revalidateTag } from "next/cache";

export const adjustLikes = async (amount: number) => {
    if (!amount) return;

    // This should NOT be cached,else it'll  assume the same value for all users

    await fetch("http://localhost:3000/likes", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({ amount }),
        headers: {
            "content-type": "application/json",
        },
    })

    revalidateTag("likes");
}