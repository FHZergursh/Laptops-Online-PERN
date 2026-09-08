import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);

async function setup() {
  try {
    console.log('Connection established');

  } catch (err) {
    console.error('Connection failed.', err);
  }
}

setup();