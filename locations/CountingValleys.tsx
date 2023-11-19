import { NavigationBar } from "@/components/NavigationBar";
import { CVCode } from "@/components/counting-valleys/CVCode";
import { CVProblem } from "@/components/counting-valleys/CVProblem";
import { CVSample } from "@/components/counting-valleys/CVSample";

export function CountingValleys() {
  return (
    <div className="mx-auto max-w-4xl px-3">
      <header>
        <NavigationBar />
        <h1 className="text-4xl font-extrabold my-3">Counting Valleys</h1>
      </header>
      <main>
        <CVProblem />
        <CVSample />
        <CVCode />        
        <section className="my-4 border-t-2 border-cyan-700 text-center pt-2">
          <span className="me-1">Source:</span>
          <a
            href="https://www.hackerrank.com/challenges/counting-valleys/problem"
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
          >
            HackerRank - Counting Valleys
          </a>
        </section>
      </main>
    </div>
  );
}
