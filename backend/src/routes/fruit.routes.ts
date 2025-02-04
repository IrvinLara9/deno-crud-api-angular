import { Router } from '../deps.ts';
import {
  addFruit,
  fetchFruits,
  fetchFruitById,
  modifyFruit,
  removeFruit,
} from '../controllers/fruit.controller.ts';

const router = new Router();

router
  .prefix('/api/fruits')
  .get('/', fetchFruits)
  .get('/:id', fetchFruitById)
  .post('/', addFruit)
  .put('/:id', modifyFruit)
  .delete('/:id', removeFruit);

export default router;
