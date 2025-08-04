import { handleRequest } from "../src/handle_request.js";

export const config = {
  runtime: 'edge'
};

export default async function handler(req) {
  return handleRequest(req);
}