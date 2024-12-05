import { Injectable } from '@nestjs/common';
import { CreateSongDto, GetSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(song) {
    this.songs.push(song);
    return this.songs;
  }
  getSongs(): GetSongDto[] {
    // throw new Error('simulaktiong error');
    return this.songs;
  }
  getSong(id: string): GetSongDto[] {
    return this.songs.filter((song) => song.id === id);
  }
  createSong(song: CreateSongDto): GetSongDto[] {
    this.songs.push(song);
    return this.songs;
  }
  updateSong(id: string, song: CreateSongDto): GetSongDto {
    this.songs.splice(parseInt(id), 1);
    this.songs.push(song);

    return song;
  }
  deleteSong(id: string): GetSongDto[] {
    this.songs.splice(parseInt(id), 1);

    return this.songs;
  }
}
