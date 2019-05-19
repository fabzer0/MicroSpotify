import models from '../../server/models';

const { Playlist } = models;

class PlaylistsService {
  static async getPlaylists() {
    const playlists = await Playlist.findAll();
    
    return playlists;
  }
}

export default PlaylistsService;
