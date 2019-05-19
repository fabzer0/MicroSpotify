import artistsRouter from './artists';
import albumsRouter from './albums';
import playlistsRouter from './playlists';


const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, artistsRouter);
  app.use(apiPrefix, albumsRouter);
  app.use(apiPrefix, playlistsRouter);
  return app;
};

export default routes;
