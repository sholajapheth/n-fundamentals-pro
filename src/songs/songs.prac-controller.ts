import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SongService } from './prac-songs.service';
import { CreateSongDto, GetSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  getSongs(): string {
    return this.songService.getSongs();
  }

  @Get(':id')
  getSong(@Param('id') params: any): string {
    return this.songService.getSong(params.id);
  }

  @Post()
  createSong(@Body() createSongDto: CreateSongDto): GetSongDto[] {
    console.log(createSongDto);
    return this.songService.createSong(createSongDto);
  }

  @Put(':id')
  updateSong(@Param('id') id: string, @Body() songDto: CreateSongDto) {
    return this.songService.updateSong(id, songDto);
  }
}
