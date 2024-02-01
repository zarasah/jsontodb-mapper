import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('/import')
  importData() {
    const jsonData = require('../../resources/users.json')
    console.log('jsonData', jsonData)
    return this.dataService.saveData(jsonData);
  }
}
