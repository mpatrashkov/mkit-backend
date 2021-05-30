import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FavouriteMovie {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  uid: string;

  @Column()
  movieId: string;
}
