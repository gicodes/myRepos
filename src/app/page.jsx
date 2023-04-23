'use client';

import RepoSearch from "./components/repoSearch";
import { useState, useEffect } from "react";
import Repos from "./components/repos"
import Loading from "./loading";

const HomePage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch('/code/repos');
      const data = await res.json();
      setRepos(data);
      setLoading(true);
    }

    fetchRepos();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <h1>Welcome to My Repositories </h1>
      <RepoSearch getSearchResults={(results) => (results)} />
      <Repos repos={repos} />
    </>
  )
}

export default HomePage;