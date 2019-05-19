import { Router } from 'express';
import AlbumsController from './AlbumsController';

const albumsRouter = Router();

albumsRouter.get(
  '/albums',
  AlbumsController.getAlbums
);

export default albumsRouter;
