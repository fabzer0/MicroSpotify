import models from '../../server/models';

const { Artist, Album, Playlist } = models;

class ArtistsService {
  static async getArtists() {
    let artists = await Artist.findAll({ raw: true });
    
    return artists;
  }

  static async getArtist(id) {
    const artist = await Artist.findOne(
      {
        where: { id },
        include: [{
          model: Album,
          as: 'albums',
        }],
      },
    );

    return artist;
  }
}

export default ArtistsService;
