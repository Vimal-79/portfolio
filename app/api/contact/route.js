import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
const collectionName = process.env.MONGODB_COLLECTION || 'messages';

let client;
let cachedDb;

async function getDb() {
  if (cachedDb) return cachedDb;

  if (!uri) {
    throw new Error('Missing MONGODB_URI');
  }

  client = new MongoClient(uri);
  await client.connect();
  cachedDb = client.db(dbName || 'portfolio');
  return cachedDb;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }

    const db = await getDb();
    const collection = db.collection(collectionName);

    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return Response.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ success: false, error: 'Failed to save message.' }, { status: 500 });
  }
}
