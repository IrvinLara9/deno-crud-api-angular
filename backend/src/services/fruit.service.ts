import { fruitsCollection, FruitSchema } from '../models/fruit.model.ts';
import { ObjectId } from '../deps.ts';

export const getFruits = async (): Promise<FruitSchema[]> => {
  return await fruitsCollection.find({}).toArray();
};

export const getFruitById = async (id: string): Promise<FruitSchema | null> => {
  const fruit = await fruitsCollection.findOne({ _id: new ObjectId(id) });

  return fruit ?? null;
};

export const createFruit = async (fruit: Omit<FruitSchema, '_id'>) => {
  const insertId = await fruitsCollection.insertOne({
    _id: new ObjectId(),
    ...fruit,
  });

  return insertId.toString();
};

export const updateFruit = async (id: string, fruit: Partial<FruitSchema>) => {
  const { _id, ...updatedData } = fruit; 

  const { matchedCount } = await fruitsCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData  }
  );

  return matchedCount > 0;
};

export const deleteFruit = async (id: string): Promise<boolean> => {
  const deletedCount = await fruitsCollection.deleteOne({
    _id: new ObjectId(id),
  });

  return deletedCount > 0;
};
