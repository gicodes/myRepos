// importing Link to serve the Directories data
import Link from "next/link";

// creating  a function for fectching contents
async function fetchRepoContents(name) {
  // wait 3 seconds && fetch the contents
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/gicodes/${name}/contents`,
    {
      next: {
        revalidate: 60,
      }
    }
  )

  // get and filter the contents
  const contents = await response.json();
  const dirs = contents.filter(
    (content) => content.type === 'dir'
  )
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {
          dirs.map((dir) => (
            <li key={dir.path}>
              <Link href={`/code/repos/${name}/${dir.path}`}>
                {dir.path}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);

  return (
    <div className="">
      {contents}
    </div>
  )
}

export default RepoDirs;