import { NavigationBar } from "@/components/NavigationBar";

export function Home() {
  return (
    <>
      <main className="container mx-auto max-w-5xl ">
        <header>
          <NavigationBar />
          <h1 className="text-4xl font-extrabold my-3">Algorithmic Problems</h1>
        </header>
      </main>
    </>
  );
}
