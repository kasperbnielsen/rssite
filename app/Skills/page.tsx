"use client";

import useSWR from "swr";

export type RSN = {
  totalLevel: number;
  name: string;
};

export default function Skills() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR<RSN>("/api/hiscore", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div>
      <p>Skills page</p>
      <p>aaaa</p>
      <p>{data.totalLevel}</p>
    </div>
  );
}
