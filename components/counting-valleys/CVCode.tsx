"use client";

import { useState } from "react";
import { getCountingValleysCode } from "./countingValleysCode";

export function CVCode() {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <section>
      <div>
        <h2>The Code</h2>
        <code className="dotnet relative border-2 p-3 rounded-lg">
          {getCountingValleysCode()}
          <div className="absolute top-0 right-0 pt-3 pe-4">
            <div className="relative z-20 flex items-center">
              {copied && (
                <div className="absolute left-0">
                  <div className="px-3 h-7 -ml-1.5 items-center flex text-xs bg-green-500 border-r border-green-500 -translate-x-full text-white rounded">
                    <span>Copied!</span>
                    <div className="absolute right-0 inline-block h-full -mt-px overflow-hidden translate-x-3 -translate-y-2 top-1/2">
                      <div className="w-3 h-3 origin-top-left transform rotate-45 bg-green-500 border border-transparent"></div>
                    </div>
                  </div>
                </div>
              )}
              <button
                title="copy-code"
                className="flex items-center justify-center h-8 text-xs bg-white border rounded-md cursor-pointer w-9 border-neutral-200/60 hover:bg-neutral-100 active:bg-white focus:bg-white focus:outline-none text-neutral-500 hover:text-neutral-600 group"
                onClick={() => {
                  navigator.clipboard.writeText(getCountingValleysCode());
                  setCopied(true);
                }}
              >
                {!copied && (
                  <svg
                    className="w-4 h-4 stroke-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" stroke="none">
                      <path
                        d="M7.75 7.757V6.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-.992"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3.75 10.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-6.5a3 3 0 0 1-3-3v-6.5z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                )}
                {copied && (
                  <svg
                    className="w-4 h-4 text-green-500 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    x-cloak
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </code>
      </div>
    </section>
  );
}
