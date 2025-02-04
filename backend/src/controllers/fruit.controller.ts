import { RouterContext } from '../deps.ts';
import {
  createFruit,
  deleteFruit,
  getFruits,
  getFruitById,
  updateFruit,
} from '../services/fruit.service.ts';

export const fetchFruits = async (ctx: RouterContext<'/'>) => {
  const fruits = await getFruits();

  ctx.response.body = fruits;
};

export const fetchFruitById = async (ctx: RouterContext<'/:id'>) => {
  const id = ctx.params.id;

  if (!id) {
    ctx.response.status = 400;
    ctx.response.body = { message: 'Missing fruit ID' };
    return;
  }

  const fruit = await getFruitById(id);

  if (!fruit) {
    ctx.response.status = 404;
    ctx.response.body = { message: 'Fruit not found' };
    return;
  }

  ctx.response.body = fruit;
};

export const addFruit = async (ctx: RouterContext<'/'>) => {
  const body = await ctx.request.body.json();
  const id = await createFruit(body);

  ctx.response.status = 201;
  ctx.response.body = { _id: id, ...body };
};

export const modifyFruit = async (ctx: RouterContext<'/:id'>) => {
  const id = ctx.params.id;

  if (!id) {
    ctx.response.status = 400;
    ctx.response.body = { message: 'Missing fruit ID' };
    return;
  }

  const { _id, ...body } = await ctx.request.body.json();
  const updated = await updateFruit(id, body);

  if (!updated) {
    ctx.response.status = 404;
    ctx.response.body = { message: 'Fruit not found' };
    return;
  }

  ctx.response.body = {
    _id: id,
    ...body,
  };
};

export const removeFruit = async (ctx: RouterContext<'/:id'>) => {
  const id = ctx.params.id;

  if (!id) {
    ctx.response.status = 400;
    ctx.response.body = { message: 'Missing fruit ID' };
    return;
  }

  const deleted = await deleteFruit(id);

  if (!deleted) {
    ctx.response.status = 404;
    ctx.response.body = { message: 'Fruit not found' };
    return;
  }

  ctx.response.body = { message: 'Fruit deleted' };
};
