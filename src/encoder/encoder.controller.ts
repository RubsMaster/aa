import { Controller, Get } from "@nestjs/common";
import { EncoderService } from "src/services/encoder.service";

@Controller('encoder')
export class EncoderController{
    constructor(private service:EncoderService){}

    @Get('all')
    async GetAll(){
        return await this.service.getAll();
    }
}