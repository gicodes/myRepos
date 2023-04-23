{/* importing react server components and other dependencies */ }
import Link from "next/link";
import { Suspense } from "react";
import Repo from "@/app/components/repo";
import RepoDirs from "@/app/components/repoDirs";

{/*  creating a layout for repository card */ }
const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link className='btn btn-back' href={'code/repos'}>
        Back to Repositories
      </Link>

      {/* let suspense boundaries display client messages */}
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>

    </div>
  )
}

export default RepoPage;