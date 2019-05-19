import { Router } from 'express';
import PlaylistsController from './PlaylistsController';

const playlistsRouter = Router();

playlistsRouter.get(
  '/playlists',
  PlaylistsController.getPlaylists
);

export default playlistsRouter;
