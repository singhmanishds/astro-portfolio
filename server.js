import { startServer } from 'astro/server';
import { handler } from './dist/server/entry.mjs';

startServer(handler, {
  port: process.env.PORT || 8080, // Cloud Run expects port 8080
  hostname: '0.0.0.0',
});
