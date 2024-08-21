import AxiosMockAdapter from 'axios-mock-adapter';
import { login, register } from './authService';
import axiosInstance from './axiosConfig'; 

const mock = new AxiosMockAdapter(axiosInstance);

beforeEach(() => {
  mock.reset();
});

describe('Auth Service Tests', () => {
  it('should login successfully', async () => {
    const email = 'eve.holt2@reqres.in';
    const password = 'cityslicka';
    const mockResponse = { token: 'fake_token' };
    mock.onPost('/login').reply(200, mockResponse);
    const response = await login(email, password);
    expect(response).toEqual(mockResponse);
  });

  it('should fail login with error', async () => {
    const email = 'wrongemail@reqres.in';
    const password = 'password123';
    mock.onPost('/login').reply(400, { message: 'Login failed' });
    await expect(login(email, password)).rejects.toThrow('Login failed');
  });

  it('should register successfully', async () => {
    const email = 'eve.holt@reqres.in';
    const password = 'cityslicka';
    const mockResponse = { userId: 'user_id' };
    mock.onPost('/register').reply(200, mockResponse);
    const response = await register(email, password);
    expect(response).toEqual(mockResponse);
  });

  it('should fail registration with error', async () => {
    const email = 'newuser@example.com';
    const password = 'newpassword123';
    mock.onPost('/register').reply(400, { message: 'Registration failed' });
    await expect(register(email, password)).rejects.toThrow('Registration failed');
  });
});
