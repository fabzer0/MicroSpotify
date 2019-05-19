import ArtistsService from '../../services/ArtistsService';
import HttpResponse from '../../helpers/httpResponses/responseHelper';
import HttpError from '../../helpers/httpResponses/errorHandler';

class ArtistsController {
  static async getArtists(req, res) {
    const { query: { id } } = req;
    try {
      if(!id) {
        const artists = await ArtistsService.getArtists();
        return HttpResponse.sendResponse(res, 200, artists);
      }

      const artist = await ArtistsService.getArtist(id);
      if(!artist) {
        return HttpError.throwErrorIfNull(res);
      } 
      
      return HttpResponse.sendResponse(res, 200, artist);
    } catch(e) {
      console.log(e);
      return HttpError.sendErrorResponse(res, 500);
    }
  }
}

export default ArtistsController;
