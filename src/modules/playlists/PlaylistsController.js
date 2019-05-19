import PlaylistsService from '../../services/PlaylistsService';
import HttpResponse from '../../helpers/httpResponses/responseHelper';
import HttpError from '../../helpers/httpResponses/errorHandler';

class PlaylistsController {
  static async getPlaylists(req, res) {
    try {
      const playlists = await PlaylistsService.getPlaylists();
      return HttpResponse.sendResponse(res, 200, playlists);
    } catch(e) {
      console.log(e);
      return HttpError.sendErrorResponse(res, 500);
    }
  }
}

export default PlaylistsController;
