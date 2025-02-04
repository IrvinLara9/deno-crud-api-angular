import { db } from "../config/db.ts";
import { ObjectId } from "../deps.ts";

export interface FruitSchema {
  _id: ObjectId;
  name: string;
  color: string;
  price: number;
}

export const fruitsCollection = db.collection<FruitSchema>("fruits");