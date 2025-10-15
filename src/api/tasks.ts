import { type Task } from "../interfaces/Tasks.interfaces";

const BASE_URL = "http://localhost:3001/tasks";

export const getTasks = async (): Promise<Task[]> => {
  // TODO: completar fetch GET
  return Promise.reject("getTasks no implementado");
};

export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
  // TODO: completar fetch POST
  return Promise.reject("createTask no implementado");
};

export const updateTask = async (id: number, task: Partial<Task>): Promise<Task> => {
  // TODO: completar fetch PATCH
  return Promise.reject("updateTask no implementado");
};

export const deleteTask = async (id: number): Promise<void> => {
  // TODO: completar fetch DELETE
  return Promise.reject("deleteTask no implementado");
};
