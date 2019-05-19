import models from '../../server/models';

const { Album, Playlist } = models;

class AlbumsService {
  static async getAlbums() {
    const albums = await Album.findAll();
    
    return albums;
  }
  
  static async getAlbum(id) {
    const album = await Album.findOne(
      {
        where: { id },
        include: [{
          model: Playlist,
          as: 'songs'
        }],
      },
    );

    return album;
  }

}

export default AlbumsService;
