import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncoderController } from './encoder/encoder.controller';
import { encoderSchema } from './schema/Encoder.schema';
import { EncoderService } from './services/encoder.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name:'Encoder',
      schema:encoderSchema,
      collection:'links'
    }]),
    MongooseModule.forRoot("mongodb+srv://root:root@urlshortener.vphtu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  ],
  controllers: [AppController, EncoderController],
  providers: [AppService, EncoderService],
})

export class AppModule {}
