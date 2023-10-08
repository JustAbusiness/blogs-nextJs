import Image from "next/image";
import "../../app/globals.css";

export default function About() {
  return (
    <main className="min-h-screen p-24 gap-4">
      <div className="text-3xl font-semibold text-blue-500">About Page</div>
      <span>
        <i>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          quisquam doloribus necessitatibus nihil sequi, enim nostrum. Doloribus
          sit ea at deleniti sequi?
        </i>
      </span>
    </main>
  );
}
