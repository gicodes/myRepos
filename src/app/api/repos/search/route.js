import { NextResponse } from "next/server";
import Repos from "../../../components/repos";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const filteredRepos = Repos.filter((repo) => {
    return repo.name.toLowerCase().includes(query.toLowerCase());
  })


  return NextResponse.json(filteredRepos);
}