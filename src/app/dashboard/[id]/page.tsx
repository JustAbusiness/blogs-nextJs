import React from "react";
import "../../../app/globals.css";

async function getPost(id: string) {
  const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Fail to fetch');
  }
  return res.json();
}


const DashboardDetailPage = async ({
  params: { id }
}: {
  params: { id: string };
}) => {
  const post = await getPost(id);

  return (
    <div className="min-h-screen p-24 gap-4">
      <div className="text-3xl font-semibold text-blue-500">{id}</div>
        <h2>
          {post?.title}
        </h2>
      <span>
        <b className="text-xs"> {post?.body}</b>
      </span>  
    </div>
  );
};

export default DashboardDetailPage;
