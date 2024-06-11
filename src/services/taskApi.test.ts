import { renderHook } from '@testing-library/react-hooks';
import  rest, { http } from 'msw';
import { setupServer } from 'msw/node';
import { taskApi } from './taskApi';
import { API_URL } from '@env';

// Tipos y datos de prueba
type TaskType = {
  id: string;
  avatar: string;
  name: string;
  createdAt: string;
};
const mockTasks: TaskType[] = [
  {
    id: '1',
    avatar: 'https://example.com/avatar.jpg',
    name: 'Task 1',
    createdAt: '2023-05-01T10:00:00.000Z',
  },
  {
    id: '2',
    avatar: 'https://example.com/avatar2.jpg',
    name: 'Task 2',
    createdAt: '2023-05-02T12:30:00.000Z',
  },
];



const server = setupServer(
  http.get(`${API_URL}`, (req, res, ctx) => {
    return res(ctx.json(mockTasks));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('taskApi', () => {
  describe('getTask', () => {
    it('should return the list of tasks', async () => {
      const { result, waitForValueToChange } = renderHook(
        () => taskApi.useGetTaskQuery(),
        {
          wrapper: taskApi.Provider,
        }
      );

      await waitForValueToChange(() => result.current.isSuccess);

      expect(result.current.data).toEqual(mockTasks);
    });
  });
});
