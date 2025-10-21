import { type Task } from "../interfaces/Tasks.interfaces";

const BASE_URL = "http://localhost:3000/api";

export const getTasks = async (): Promise<Task[]> => {

  try {
    const tasks = await fetch(`${BASE_URL}/tasks`, {
      method: 'GET',

    })

    if (!tasks.ok) {
      throw new Error("No fue posible cargar tareas")
    }

    const data = await tasks.json()

    return data

  } catch (error) {

    console.error({ error })

  }

  // TODO: completar fetch GET
  return Promise.reject("getTasks no implementado");
};

export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
  // TODO: completar fetch POST

  try {

    const submit = await fetch(`${BASE_URL}/tasks/create-tasks`, {
      method: 'POST',
      body: JSON.stringify(task)
    })

    if (!submit.ok) throw new Error('No se pudo crear la tarea')

    return submit.json()

  } catch (error) {
    console.error({ error })
  }

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
