export function Problem() {
  return (
    <>
      <main className="container mx-auto max-w-md ">
        <header>
          <nav className="flex my-3" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Projects
                  </a>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-extrabold my-3">Counting Valleys</h1>
          <div>
            <a
              href="solution"
              className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Try it
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </header>
        <section>
          <p className="my-3">
            An avid hiker keeps meticulous records of their hikes. During the
            last hike that took exactly steps, for every step it was noted if it
            was an uphill, <span className="badge bg-danger">U</span>, or a
            downhill, <span className="badge bg-danger">D</span> step. Hikes
            always start and end at sea level, and each step up or down
            represents a<span className="ms-1 badge bg-danger">1</span> unit
            change in altitude.
          </p>
          <p className="my-3">
            We define the following terms:
          </p>
          <ul className="list-disc ms-8">
              <li>
                A mountain is a sequence of consecutive steps above sea level,
                starting with a step up from sea level and ending with a step
                down to sea level.
              </li>
              <li>
                A valley is a sequence of consecutive steps below sea level,
                starting with a step down from sea level and ending with a step
                up to sea level.
              </li>
            </ul>
          <p className="my-3">
            Given the sequence of up and down steps during a hike, find and
            print the number of valleys walked through.
          </p>
        </section>
        <section>
          <h2>The Path</h2>
          <div className="my-3">
            <code className="tracking-wider bg-slate-200 px-10 py-2">
              DDUUUUDD
            </code>
            <div className="mt-1">
              The hiker first enters a valley 2 units deep. Then they climb out
              and up onto a mountain 2 units high. sFinally, the hiker returns
              to sea level and ends the hike.
            </div>
          </div>
        </section>
        <section>
          <h2>Function Description</h2>
          <p className="my-3">
            Implement the <code>countingValleys</code> function. The function
            has the following parameter(s):
          </p>
          <ul>
              <li>
                <code>string path</code>: a string describing the path
              </li>
              <li>
                Returns: <code>int</code>: the number of valleys traversed
              </li>
            </ul>
        </section>
        <section>
          <h2>Constraints</h2>
          <ul className="list-disc ms-8">
            <li>
              <code>2 ≤ length(path) ≤ 1 000 000</code>
            </li>
            <li>
              <code>path[i] ∈ {"{'U' 'D'}"}</code>
            </li>
          </ul>
        </section>
        <section>
          <h2>Sample</h2>
          <div className="bg-warning px-4 pt-2 pb-3">
            <span className="bg-orange-300 rounded px-4 py-2 me-1">Input</span>
            <span>UDDDUDUU</span>
            <span className="bg-orange-300 rounded px-4 py-2 ms-4 me-1">
              Output
            </span>
            <span>1</span>
          </div>
          <p className=" font-extrabold">Explanation</p>
          <p>
            If we represent <code>_</code> as sea level, a step up as{" "}
            <code>/</code>, and a step down as <code>\</code>, the hike can be
            drawn as:
            <svg
              viewBox="0 0 120 50"
              preserveAspectRatio="xMidYMid slice"
              role="img"
            >
              <line
                x1="0"
                y1="20"
                x2="200"
                y2="20"
                stroke="silver"
                strokeWidth="0.5"
              />
              <path
                strokeWidth="1"
                stroke="black"
                fill="none"
                d={
                  "M10,20" +
                  " h10 m1,0" +
                  " l9,-9 m1,-1" +
                  " l9,9 m1,1" +
                  " l9,9 m1,1" +
                  " l9,9 m1,1" +
                  " l9,-9 m1,-1" +
                  " l9,9 m1,1" +
                  " l9,-9 m1,-1" +
                  " l9,-9 m1,-1" +
                  " h10 m1,0"
                }
              />
            </svg>
            The hiker enters and leaves one valley.
          </p>
        </section>
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
    </>
  );
}
