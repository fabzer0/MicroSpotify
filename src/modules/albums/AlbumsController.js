import AlbumsService from '../../services/AlbumsService';
import HttpResponse from '../../helpers/httpResponses/responseHelper';
import HttpError from '../../helpers/httpResponses/errorHandler';

class AlbumsController {
  static async getAlbums(req, res) {
    const { query: { id } } = req;
    try {
      if(!id) {
        const albums = await AlbumsService.getAlbums();
        return HttpResponse.sendResponse(res, 200, albums);
      }

      const album = await AlbumsService.getAlbum(id);
      if(!album) {
        return HttpError.throwErrorIfNull(res);
      } 
      
      return HttpResponse.sendResponse(res, 200, album);
    } catch(e) {
      console.log(e);
      return HttpError.sendErrorResponse(res, 500);
    }
  }
}

export default AlbumsController;
