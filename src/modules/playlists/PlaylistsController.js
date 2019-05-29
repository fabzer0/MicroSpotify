
import PlaylistsService from '../../services/PlaylistsService';
import HttpResponse from '../../helpers/httpResponses/responseHelper';
import { createReadStream, statSync } from 'fs';
import path from 'path';
import HttpError from '../../helpers/httpResponses/errorHandler';

class PlaylistsController {
  static async getPlaylists(req, res) {
    const { query: { id } } = req;
    try {
      if(!id) {
        const playlists = await PlaylistsService.getPlaylists();
        return HttpResponse.sendResponse(res, 200, playlists);
      }

      const playlist = await PlaylistsService.getPlaylist(id);
      if(!playlist) {
        return HttpError.throwErrorIfNull(res);
      }
      
      return HttpResponse.sendResponse(res, 200, playlist);
      
    } catch(e) {
      console.log(e);
      return HttpError.sendErrorResponse(res, 500);
    }
  }

  static async streamMusicVideo(req, res) {
    try {
      const { query: { name } } = req;
      const musicKeyWords = await PlaylistsService.getPlaylistByName(name);
      const filePath = `../../assets/videos/${musicKeyWords}.mp4`;
      const stat = statSync(path.resolve(__dirname, filePath));
      const fileSize = stat.size;
      const range = req.headers.range;

      if(range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunkSize = (end - start) + 1;
        const song = createReadStream(path.resolve(__dirname, filePath), { start, end });
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize,
          'Content-Type': 'video/mp4',
        }

        res.writeHead(206, head);
        return song.pipe(res);
      }
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      
      res.writeHead(200, head);
      return createReadStream(path.resolve(__dirname, filePath)).pipe(res);
    } catch(e) {
      console.log(e);
      return HttpError.sendErrorResponse(res, 500);
    }
  }
}

export default PlaylistsController;
