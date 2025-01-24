import { MongoClient } from 'mongodb'

const databaseUrl = 'mongodb://db:27017'

class DatabaseService {
  private client: MongoClient

  constructor() {
    this.client = new MongoClient(databaseUrl)
    this.connect()
  }

  async connect() {
    await this.client.connect()
  }

  async getCollection<T>(name: string) {
    return this.client.db('mongo').collection<Document & T>(name)
  }

  async close() {
    await this.client.close()
  }
}

export const databaseService = new DatabaseService();
