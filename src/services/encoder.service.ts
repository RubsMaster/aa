import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Encoder } from "src/models/encoder.model";

@Injectable()
export class EncoderService{
    constructor(@InjectModel('encoders') private readonly Encoder: Model<Encoder>) {}

    async getAll(){
        return await this.Encoder.find()
    }
}

