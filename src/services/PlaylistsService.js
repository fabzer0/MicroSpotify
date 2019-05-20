import models from '../../server/models';
import AlbumsService from './AlbumsService';

const { Playlist, Album } = models;

class PlaylistsService {
  static async getPlaylists() {
    const playlists = await Playlist.findAll();
    
    return playlists;
  }

  static async getPlaylist(id) {  
    const playlist = await Playlist.findOne(
      {
        where: { id },
        include: [{
          model: Album,
          as: 'album'
        }],
      },
    );

    return playlist;
  }
}

export default PlaylistsService;
