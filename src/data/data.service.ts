import { Injectable } from '@nestjs/common';
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}
  saveData(data: any[]) {
    const users = this.userRepository.create(data)
    return this.userRepository.save(users)
  }
}
