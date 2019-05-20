
import PlaylistsService from '../../services/PlaylistsService';
import HttpResponse from '../../helpers/httpResponses/responseHelper';
import { createReadStream } from 'fs';
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
      res.writeHead(200, { 'Content-Type': 'video/mp4'});
      createReadStream(path.resolve(__dirname, filePath)).pipe(res);  
    } catch(e) {
      console.log(e);
      return HttpError.sendErrorResponse(res, 500);
    }
  }
}

export default PlaylistsController;
