import models from '../../server/models';

const { Artist, Album } = models;

class ArtistsService {
  static async getArtists() {
    const artists = await Artist.findAll(
      { 
        include: [{
          model: Album,
          as: 'albums'
        }],
      },    
    );
    
    return artists;
  }

  static async getArtist(id) {
    const artist = await Artist.findOne(
      {
        where: { id },
        include: [{
          model: Album,
          as: 'albums'
        }],
      },
    );

    return artist;
  }
}

export default ArtistsService;
