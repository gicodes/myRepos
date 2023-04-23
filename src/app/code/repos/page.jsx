// Import key dependencies for this Page
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import Link from 'next/link';

// Fetches the Repos using the github repos API
export async function fetchRepos() {
  const response = await fetch(`https://api.github.com/users/gicodes/repos`,
    {
      next: {
        revalidate: 60,
      }
    });

  // wait 1.5 seconds before resolving and returning repos
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const repos = await response.json();
  return repos;
}

// ReposPage maps the data fetched from the repos object
const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {(
          repos.map(repo =>
            <li key={repo.id}>
              <Link href={`/code/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-details">
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span>
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default ReposPage;