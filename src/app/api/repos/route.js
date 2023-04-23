import Repos from "../../../components/repos";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

// Get request: return the repos data
export async function GET(request) {
  return NextResponse.json(repos);
}

// POST request: data flow and response handling
export async function POST(request) {
  // destructure data from body request
  const { name, description, stars, link } = await request.json();
  const newRepo = {
    id: uuidv4(),
    name: name,
    description: description,
    stars: stars,
    link: link
  }

  // create new repo with new data
  Repos.push(newRepo);

  // responders and return message
  return NextResponse.json({ message: 'Repo Added successfully' }, Repos);
}