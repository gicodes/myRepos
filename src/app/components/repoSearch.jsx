'use client'

import { useState } from "react";

const RepoSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/repos/search?query=${query}`)
    const repos = await res.json();

    getSearchResults(repos);
  }

  return (
    <>
      <form
        className="search-form"
        onSubmit={handleSubmit} >
        <input
          className="search-input"
          placeholder="Search Repo"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
        />

        <button
          className='search-button'
          type='submit'>
          Search
        </button>
      </form>
    </>
  )
}

export default RepoSearch;