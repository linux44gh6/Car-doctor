import Image from "next/image";
import HomePage from "./components/HomePage/HomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     <HomePage></HomePage>
    </main>
  );
}
