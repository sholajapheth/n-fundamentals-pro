import { Song } from 'src/songs/song.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('playlists')
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  /**
   * Each Playlist will have multiple songs
   */
  @OneToMany(() => Song, (song) => song.playlist)
  songs: Song[];

  /**
   * Many PLaylist can belong to a single unique user
   */
  @ManyToOne(() => UserActivation, (user) => user.playlists)
  user: UserActivation;
}
