import { Router } from 'express';
import PlaylistsController from './PlaylistsController';

const playlistsRouter = Router();

playlistsRouter.get(
  '/playlists',
  PlaylistsController.getPlaylists
);

playlistsRouter.get(
  '/playlist/stream',
  PlaylistsController.streamMusicVideo
)

export default playlistsRouter;
