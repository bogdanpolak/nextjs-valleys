export function CVProblem() {
  return (
    <>
      <section>
        <p className="my-3">
          An avid hiker keeps meticulous records of their hikes. During the last
          hike that took exactly steps, for every step it was noted if it was an
          uphill, <span className="badge bg-danger">U</span>, or a downhill,{" "}
          <span className="badge bg-danger">D</span> step. Hikes always start
          and end at sea level, and each step up or down represents a
          <span className="ms-1 badge bg-danger">1</span> unit change in
          altitude.
        </p>
        <p className="my-3">We define the following terms:</p>
        <ul className="list-disc ms-8">
          <li>
            A mountain is a sequence of consecutive steps above sea level,
            starting with a step up from sea level and ending with a step down
            to sea level.
          </li>
          <li>
            A valley is a sequence of consecutive steps below sea level,
            starting with a step down from sea level and ending with a step up
            to sea level.
          </li>
        </ul>
        <p className="my-3">
          Given the sequence of up and down steps during a hike, find and print
          the number of valleys walked through.
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
            and up onto a mountain 2 units high. sFinally, the hiker returns to
            sea level and ends the hike.
          </div>
        </div>
      </section>
      <section>
        <h2>Function Description</h2>
        <p className="my-3">
          Implement the <code>countingValleys</code> function. The function has
          the following parameter(s):
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
    </>
  );
}
