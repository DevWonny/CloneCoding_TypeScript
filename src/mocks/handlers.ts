import { rest } from 'msw';

const todos = ['eat', 'sleep', 'study'];

export const handlers = [
  // 할 일 목록
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos))
  }),

  // 할 일 추가
  rest.post('/todos', (req, res, ctx) => {
    console.log(req);
    // todos.push(req);
    return res(ctx.status(201));
  })
]