import { Document } from 'mongoose';

export interface user extends Document {
  name: string;
}
