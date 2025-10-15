# Task Manager SSR - Frontend

## Descripción

Este es un proyecto **React + TypeScript** que sirve como **starter kit para la prueba técnica de nivel semi-senior**.  
El objetivo es que completes la lógica de consumo de API, manejo de estado y tipado correcto en TypeScript.

El proyecto consiste en una **mini aplicación de gestión de tareas** con los siguientes componentes ya preparados:

- `TaskList` → Lista de tareas.
- `TaskItem` → Elemento individual de tarea.
- `TaskForm` → Formulario para agregar tareas.
- `FilterPanel` → Panel para filtrar tareas por estado y prioridad.
- `Summary` → Resumen de tareas totales y completadas.

---

## Tecnologías

- React 18
- TypeScript
- Vite
- Fetch API (para conectarse con backend Node.js)
- CSS simple inline (puede mejorarse con módulos o Styled Components)

---

## Estructura del proyecto

src/
api/ # Funciones para consumir API (vacías, a completar)
tasks.ts
components/ # Componentes de React ya esqueleto
TaskList.tsx
TaskItem.tsx
TaskForm.tsx
FilterPanel.tsx
Summary.tsx
types/
Task.ts # Tipado de Task
App.tsx # Componente principal
main.tsx # Entry point

---

## Objetivos de la prueba

El candidato debe:

1. Completar las funciones de consumo de la API (`GET`, `POST`, `PATCH`, `DELETE`) en `src/api/tasks.ts`.
2. Conectar los componentes con estas funciones usando `useState` o `useReducer`.
3. Implementar las funcionalidades:
   - Mostrar lista de tareas.
   - Agregar tarea.
   - Editar tarea.
   - Eliminar tarea.
   - Filtrar por estado y prioridad.
   - Mostrar resumen de tareas completadas/total.
4. Mantener el **tipado correcto en TypeScript** y buenas prácticas de React.

Opcionales (bonus):

- Validaciones más estrictas en el formulario.
- Ordenar tareas por prioridad y título.
- Estilos más avanzados (CSS Modules o Styled Components).

---

## Instalación

1. Clonar el repo:

```bash
git clone <repo-url>
cd task-manager-ssr
```

2. Instalar dependencias:

```bash
npm install
```

3. Levantar la aplicación:

```bash
npm run dev
```
La app correrá en http://localhost:5173 por defecto.

---

## Notas

Actualmente los componentes no tienen lógica de fetch ni manejo de estado avanzado, eso es lo que debe completar el candidato.

Se espera que el candidato use TypeScript y hooks de React correctamente.