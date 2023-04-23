import { fetchRepos } from "@/app/code/repos/page";
import Link from "next/link";


// fetch repo files with fetchRepos
export const RepoFiles = async () => {
  const repos = await fetchRepos();
  return repos;
}

{/* 
// export or wrote repo files to JSON
export RepoFiles('./repos.json'); 
*/ }

const Repos = ({ repos }) => {
  return (
    <div className="courses">
      {
        repos.map((repo) => (
          <div className='card' key={repo.id}>
            <h2>{repo.name}</h2>
            <small>Stars: {repo.stargazers_count}</small>
            <p>{repo.description}</p>
            <Link className='btn' href={repo.link} target='_blank'>
              Go to URL
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Repos;