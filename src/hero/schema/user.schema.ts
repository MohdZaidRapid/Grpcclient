import * as mongoose from 'mongoose';
import { user } from '../interfaces/user.interface';

export const UserSchema = new mongoose.Schema<user>({
  name: String
});
