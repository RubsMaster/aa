import * as mongoose from 'mongoose';

export const encoderSchema = new mongoose.Schema({
    URL: String,
    URLshort: String,
    Code: String
}, {
    versionKey:false
})