import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoryController } from '@modules/cars/useCases/listCategory/ListCategoryController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle
);

categoriesRoutes.get('/', listCategoryController.handle);

categoriesRoutes.post(
  '/import',
  ensureAuthenticated,
  ensureAdmin,
  upload.single('file'),
  importCategoryController.handle
);

export { categoriesRoutes };
