import models from '../../server/models';

const { Album, Playlist, Artist } = models;

class AlbumsService {
  static async getAlbums() {
    const albums = await Album.findAll();
    
    return albums;
  }
  
  static async getAlbum(id) {
    const album = await Album.findOne(
      {
        where: { id },
        include: [
          {
            model: Playlist,
            as: 'songs'
          },
          {
            model: Artist,
            as: 'owner'
          }
        ],
      },
    );

    return album;
  }

}

export default AlbumsService;
