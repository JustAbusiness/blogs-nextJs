import  React, { Suspense } from "react";
import "../../app/globals.css";
import { usePathname} from "next/navigation";
import Link from 'next/link';


async function getData() {
  const res =  await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error('Fail to fetch');
  }
  return res.json();
}

const Dashboard = async () => {
  const data = await getData();

  return (
    <div className="min-h-screen p-24 gap-4">
      <div className="text-3xl font-semibold text-blue-500">Dashboard</div>
      <Suspense fallback={<div> Loading... </div>}>
          {(data || []).map((item: any) => (
            <Link href={`/dashboard/` + item?.userId} key={item.userId} >
                  <b>{item?.title}</b>
            </Link>
          ))}
      </Suspense>       
    </div>
  );
};

export default Dashboard;
