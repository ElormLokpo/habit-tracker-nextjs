import { Hono } from 'hono'
import { cors } from 'hono/cors'
import * as dotenv from "dotenv"
// import { drizzle } from 'drizzle-orm/neon-http';
import { authRoutes, routineRoutes } from './routes';
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

dotenv.config();

const app = new Hono()

app.use('/*', cors({
  origin: [
    process.env.NEXT_APP_URL as string,
    process.env.NEXT_LOCALHOST as string
  ],
  credentials: true,
}))


// export const db = drizzle(process.env.DATABASE_URL as string);


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);



app.route("/auth", authRoutes);
app.route("/routine", routineRoutes)

const port = parseInt(process.env.PORT || '10000')

Bun.serve({
  port,
  hostname: '0.0.0.0',
  fetch: app.fetch,
})

console.log(`Server running on http://0.0.0.0:${port}`)
