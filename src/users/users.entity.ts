import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnonymousUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
