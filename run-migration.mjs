import mysql from 'mysql2/promise';

const conn = await mysql.createConnection(process.env.DATABASE_URL);

// Drop old tables in reverse dependency order, then recreate with visitorId columns
const dropStatements = [
  'DROP TABLE IF EXISTS `posts`',
  'DROP TABLE IF EXISTS `chatSessions`',
  'DROP TABLE IF EXISTS `profiles`',
];

const createStatements = [
  // Users table (kept for OAuth session management, unchanged)
  `CREATE TABLE IF NOT EXISTS \`users\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`openId\` varchar(64) NOT NULL,
    \`name\` text,
    \`email\` varchar(320),
    \`loginMethod\` varchar(64),
    \`role\` enum('user','admin') NOT NULL DEFAULT 'user',
    \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    \`lastSignedIn\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT \`users_id\` PRIMARY KEY(\`id\`),
    UNIQUE KEY \`users_openId_unique\` (\`openId\`)
  )`,

  // Profiles table — keyed by visitorId (localStorage UUID)
  `CREATE TABLE IF NOT EXISTS \`profiles\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`visitorId\` varchar(128) NOT NULL,
    \`fullName\` varchar(255),
    \`jobTitle\` varchar(255),
    \`company\` varchar(255),
    \`industry\` varchar(255),
    \`websiteUrl\` varchar(500),
    \`businessContext\` text,
    \`primaryColor\` varchar(20) DEFAULT '#378add',
    \`secondaryColor\` varchar(20) DEFAULT '#1a2340',
    \`brandFont\` varchar(100) DEFAULT 'DM Sans',
    \`platforms\` json,
    \`onboardingComplete\` boolean DEFAULT false,
    \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT \`profiles_id\` PRIMARY KEY(\`id\`),
    UNIQUE KEY \`profiles_visitorId_unique\` (\`visitorId\`)
  )`,

  // Chat sessions table — keyed by visitorId
  `CREATE TABLE IF NOT EXISTS \`chatSessions\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`visitorId\` varchar(128) NOT NULL,
    \`title\` varchar(500),
    \`messages\` json,
    \`addedToSchedule\` boolean DEFAULT false,
    \`scheduledAt\` timestamp NULL,
    \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT \`chatSessions_id\` PRIMARY KEY(\`id\`)
  )`,

  // Posts table — keyed by visitorId
  `CREATE TABLE IF NOT EXISTS \`posts\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`sessionId\` int NOT NULL,
    \`visitorId\` varchar(128) NOT NULL,
    \`variant\` enum('professional','conversational','story') NOT NULL,
    \`content\` text NOT NULL,
    \`hashtags\` json,
    \`imageUrl\` varchar(1000),
    \`imagePrompt\` text,
    \`platform\` varchar(50) DEFAULT 'linkedin',
    \`status\` enum('draft','scheduled','posted') NOT NULL DEFAULT 'draft',
    \`scheduledAt\` timestamp NULL,
    \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT \`posts_id\` PRIMARY KEY(\`id\`)
  )`,
];

console.log('Dropping old tables...');
for (const stmt of dropStatements) {
  const tableName = stmt.match(/DROP TABLE IF EXISTS `(\w+)`/)?.[1] || 'unknown';
  try {
    await conn.execute(stmt);
    console.log(`✓ Dropped: ${tableName}`);
  } catch(e) {
    console.log(`✗ Error dropping ${tableName}:`, e.message.slice(0, 120));
  }
}

console.log('\nCreating new tables...');
for (const stmt of createStatements) {
  const tableName = stmt.match(/CREATE TABLE IF NOT EXISTS `(\w+)`/)?.[1] || 'unknown';
  try {
    await conn.execute(stmt);
    console.log(`✓ Created: ${tableName}`);
  } catch(e) {
    console.log(`✗ Error creating ${tableName}:`, e.message.slice(0, 120));
  }
}

await conn.end();
console.log('\nMigration complete!');
