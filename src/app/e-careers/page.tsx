"use client";

import { useEffect, useState } from "react";

type Opening = {
  id: string;
  title: string;
};

export default function AdminOpeningsPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [openings, setOpenings] = useState<Opening[]>([]);
  const [newJob, setNewJob] = useState("");

  const ADMIN_PASSWORD = process.env.ADMIN_OPENINGS_PASSWORD || "Happin@123";

  useEffect(() => {
    if (authorized) {
      fetch("/api/openings")
        .then((res) => res.json())
        .then(setOpenings);
    }
  }, [authorized]);

  function handleLogin() {
    if (password === ADMIN_PASSWORD) {
      setAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  }

  async function saveOpenings(updated: Opening[]) {
    setOpenings(updated);

    await fetch("/api/openings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
        openings: updated,
      }),
    });
  }

  function addJob() {
    if (!newJob.trim()) return;

    saveOpenings([...openings, { id: Date.now().toString(), title: newJob }]);
    setNewJob("");
  }

  function removeJob(id: string) {
    saveOpenings(openings.filter((job) => job.id !== id));
  }

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-6 rounded shadow max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">Admin Login</h2>

          <input
            type="password"
            placeholder="Admin Password"
            className="w-full border px-4 py-2 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => {
              handleLogin();
            }}
            className="w-full bg-[#214d3b] text-white py-2 rounded">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Manage Job Openings</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="New Job Title"
          className="flex-1 border px-4 py-2 rounded"
          value={newJob}
          onChange={(e) => setNewJob(e.target.value)}
        />
        <button onClick={addJob} className="bg-[#214d3b] text-white px-4 rounded">
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {openings.map((job) => (
          <li key={job.id} className="flex justify-between items-center border p-3 rounded">
            <span>{job.title}</span>
            <button onClick={() => removeJob(job.id)} className="text-red-600 text-sm">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

// "use client";

// import { useState } from "react";
// import { openings as initialOpenings } from "@/data/openings";

// const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_OPENINGS_PASSWORD || "Happin@123";

// export default function AdminOpeningsPage() {
//   const [password, setPassword] = useState("");
//   const [authorized, setAuthorized] = useState(false);
//   const [jobs, setJobs] = useState(initialOpenings);
//   const [newJob, setNewJob] = useState("");

//   function handleLogin() {
//     if (password === ADMIN_PASSWORD) {
//       setAuthorized(true);
//     } else {
//       alert("Incorrect password");
//     }
//   }

//   function addJob() {
//     if (!newJob.trim()) return;

//     setJobs([...jobs, { id: Date.now().toString(), title: newJob }]);
//     setNewJob("");
//   }

//   function removeJob(id: string) {
//     setJobs(jobs.filter((job) => job.id !== id));
//   }

//   if (!authorized) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="bg-white p-6 rounded shadow w-full max-w-sm">
//           <h2 className="text-xl font-semibold mb-4">Admin Login</h2>

//           <input
//             type="password"
//             placeholder="Enter Admin Password"
//             className="w-full border px-4 py-2 rounded mb-4"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button onClick={handleLogin} className="w-full bg-[#214d3b] text-white py-2 rounded">
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="max-w-3xl mx-auto px-4 py-10">
//       <h1 className="text-2xl font-semibold mb-6">Manage Job Openings</h1>

//       {/* Add Job */}
//       <div className="flex gap-2 mb-6">
//         <input
//           type="text"
//           placeholder="New Job Title"
//           className="flex-1 border px-4 py-2 rounded"
//           value={newJob}
//           onChange={(e) => setNewJob(e.target.value)}
//         />
//         <button onClick={addJob} className="bg-[#214d3b] text-white px-4 rounded">
//           Add
//         </button>
//       </div>

//       {/* Job List */}
//       <ul className="space-y-3">
//         {jobs.map((job) => (
//           <li key={job.id} className="flex justify-between items-center border p-3 rounded">
//             <span>{job.title}</span>
//             <button onClick={() => removeJob(job.id)} className="text-red-600 text-sm">
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
