import { Injectable } from '@nestjs/common';
import { CreateSongDto, GetSongDto } from './dto/create-song.dto';

let newSongs = [];

@Injectable()
export class SongService {
  getSongs(): string {
    return 'Returns all songs i guess';
  }
  getSong(id: string): string {
    return 'Returns 1 song probs, id: ' + id;
  }
  createSong(song: CreateSongDto): GetSongDto[] {
    newSongs.push(song);
    return newSongs;
  }
  updateSong(id: string, song: CreateSongDto): GetSongDto {
    const songsCopy = newSongs.filter((song) => song.id !== id);
    songsCopy.push(song);
    newSongs = songsCopy;

    return song;
  }
  deleteSong(id: string): string {
    const songsCopy = newSongs.filter((song) => song.id !== id);

    newSongs = songsCopy;

    return 'Done!';
  }
}
