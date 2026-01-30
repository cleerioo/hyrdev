require('dotenv').config({ path: '.env.local' });
const { db } = require('@vercel/postgres');

async function seed() {
    const client = await db.connect();

    try {
        await client.sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        service VARCHAR(50) NOT NULL,
        message TEXT NOT NULL,
        date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
        console.log('Created "inquiries" table');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await client.end();
    }
}

seed();
