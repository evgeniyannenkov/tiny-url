import { Db, MongoClient } from 'mongodb';

export type ConnectionDetails = {
  database: Db;
  connection: MongoClient;
  close: () => Promise<void>;
};

export async function getDbConnection(): Promise<ConnectionDetails> {
  const mongoUri = (global as any).__MONGO_URI__;

  console.log('MONGO_URI', mongoUri);

  const connection = await MongoClient.connect(mongoUri);

  return {
    connection,
    database: connection.db((global as any).__MONGO_DB_NAME__),
    close: () => connection.close(),
  };
}
