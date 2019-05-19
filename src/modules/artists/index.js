import { Router } from 'express';
import ArtistsController from './ArtistsController';

const artistsRouter = Router();

artistsRouter.get(
  '/artists',
  ArtistsController.getArtists
);

export default artistsRouter;
