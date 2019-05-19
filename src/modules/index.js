import artistsRouter from './artists';


const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, artistsRouter);
  return app;
};

export default routes;
