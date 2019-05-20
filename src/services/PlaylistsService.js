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

  static async getPlaylistByName(musicName) {
    const { dataValues: { name } } = await Playlist.findOne(
      {
        where: { name: musicName }
      }
    );

    return name;
  }
}

export default PlaylistsService;
