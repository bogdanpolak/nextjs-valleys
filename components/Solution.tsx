"use client";

import React, { useState } from "react";
import { ValleysDiagram } from "./ValleysDiagram";

type ApiResult = { path: string; valleys: number };

export function Solution() {
  const [path, setPath] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ApiResult | null>(null);

  const handlePathChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newPath = event.target.value.toUpperCase();
    const isValid = newPath.match(/^[UD]*$/) !== null;
    isValid && changePath(newPath);
  };

  const changePath = (path: string): void => {
    setPath(path);
    setResult(null);
  };

  const apiCallCountingValleys = () => {
    setResult(null);
    // apiRequest(path).then((data) => setResult(data));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({ path: path, valleys: path.length });
    }, 600);

    async function apiRequest(path: string): Promise<ApiResult> {
      const response = await fetch(
        `https://localhost:7147/Solution/CountingValleys(${path})`
      );
      return await response.json();
    }
  };

  const handlePathInputKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      apiCallCountingValleys();
    }
  };

  const samples: string[] = [
    "UDDDUDUU",
    "DDUDUUUUUDDUDDUDDU",
    "DDDUUDUUUUUDDUDDDU",
  ];

  return (
    <main className="max-w-5xl mx-auto px-2">
      <section className="flex mt-2">
        <div className="mt-3 flex-grow-0">Path:</div>
        <div className="ms-2 flex-grow">
          <div className="flex items-center">
            <input
              className="appearance-none bg-transparent bg-teal-100 border border-teal-600 w-full text-gray-700 mr-1 py-2 px-2 leading-tight focus:outline-none"
              type="text"
              aria-label="Full name"
              value={path}
              onChange={handlePathChanged}
              onKeyDown={handlePathInputKeyDown}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={apiCallCountingValleys}
            >
              Count Valleys
            </button>
          </div>
          <p className="text-green-700 text-xs italic">
            Enter the hiker path: type <code>D</code> or <code>U</code> on the
            keyboard. <code className="ms-2">Enter</code> will call the Count
            Valleys api with the path
          </p>
        </div>
      </section>
      <section className="mt-2">
        <div className="px-4 py-2 border border-info rounded">
          {!loading && !result && <>&nbsp;</>}
          {loading && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {result && (
            <>
              <span className="me-1 py-1 px-3 rounded bg-slate-300">Input</span>
              <code className="tracking-widest">{result.path}</code>
              <span className="ms-5 me-1 py-1 px-3 rounded bg-slate-300">Output</span>
              <code>{result.valleys}</code>
            </>
          )}
        </div>
      </section>
      <section>
        <ValleysDiagram path={path} />
      </section>
      <h3>Samples</h3>
      <section className="ms-5 py-2">
        {samples.map((sample) => (
          <button
            key={sample}
            type="button"
            className="bg-transparent me-2 tracking-wider hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
            style={{ letterSpacing: "1px" }}
            onClick={() => changePath(sample)}
          >
            {sample}
          </button>
        ))}
      </section>
    </main>
  );
}
