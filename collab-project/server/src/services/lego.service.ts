import { Lego } from '@common/models/lego';
import {databaseService} from './database.service';

class LegoService {
    async createLego(lego: Lego): Promise<void> {
        const collection = await databaseService.getCollection('legos');
        await collection.insertOne(lego as Document & Lego);
    }

    async getLegos(): Promise<Lego[]> {
        const collection = await databaseService.getCollection<Lego>('legos');
        const legos = await collection.find({}).toArray();
        return legos.map((lego) => ({
            ...lego,
            id: lego._id.toString(),
        }));
    }
}

export const legoService = new LegoService();
