import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { CreateSongDto, GetSongDto } from './dto/create-song.dto';
import { SongsService } from './songs.service';
import { Connection } from 'src/common/constants/connections';

// @Controller({
//   path: 'songs',
//   scope: Scope.REQUEST,
// })
@Controller('songs')
export class SongsController {
  constructor(
    private readonly songService: SongsService,
    @Inject('CONNECTION')
    private readonly connection: Connection,
  ) {
    console.log('CONNECTION_STRING: ', this.connection.CONNECTION_STRING);
  }

  @Get()
  findAll(): GetSongDto[] {
    try {
      return this.songService.getSongs();
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    params: any,
  ): GetSongDto[] {
    return this.songService.getSong(params.id);
  }

  @Post()
  create(@Body() createSongDto: CreateSongDto): GetSongDto[] {
    console.log(createSongDto);
    return this.songService.createSong(createSongDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() songDto: CreateSongDto) {
    return this.songService.updateSong(id, songDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.songService.deleteSong(id);
  }
}
