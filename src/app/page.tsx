import Image from "next/image";
import NovelEditor from "./nivel-editor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NovelEditor />
    </main>
  );
}
