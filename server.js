import { handler } from './dist/serverless/entry.mjs';

// In the directory mode, Astro generates a serverless function handler.
// We just need to export this handler to be used by the serverless environment.
export default handler;
