import mysql from 'mysql2/promise';
import { readFileSync } from 'fs';

const conn = await mysql.createConnection(process.env.DATABASE_URL);

const sql1 = readFileSync('./drizzle/0000_gigantic_salo.sql', 'utf8');
const sql2 = readFileSync('./drizzle/0001_colorful_night_thrasher.sql', 'utf8');

const allSql = sql1 + '\n' + sql2;
const stmts = allSql
  .split('--> statement-breakpoint')
  .map(s => s.trim())
  .filter(s => s.length > 0 && !s.startsWith('--'));

for (const stmt of stmts) {
  try {
    await conn.execute(stmt);
    console.log('✓', stmt.slice(0, 70));
  } catch(e) {
    if (e.message.includes('already exists')) {
      console.log('~ already exists:', stmt.slice(0, 50));
    } else {
      console.log('✗ ERROR:', e.message.slice(0, 100));
      console.log('  SQL:', stmt.slice(0, 100));
    }
  }
}
await conn.end();
console.log('Migration complete!');
