import models from '../../server/models';

const { Artist, Album, Playlist } = models;

class ArtistsService {
  static async getArtists() {
    const artists = await Artist.findAll();
    
    return artists;
  }

  static async getArtist(id) {
    const artist = await Artist.findOne(
      {
        where: { id },
        include: [{
          model: Album,
          as: 'albums',
          include: [{
            model: Playlist,
            as: 'songs'
          }]
        }],
      },
    );

    return artist;
  }
}

export default ArtistsService;
