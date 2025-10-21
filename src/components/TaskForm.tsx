import { useState } from "react";
import type { Task } from "../interfaces/Tasks.interfaces";
import { createTask } from "../api/tasks";

export const TaskForm = () => {

    const [formData, setFormData] = useState<Partial<Task>>({})

    const handleChange = ({ name, value }: { name: string, value: string }) => {

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const submitData = async ({ data }: { data: Partial<Task> }) => {
        
        const { title, description, priority } = data

        if (title && description && priority) {

            await createTask({
                title: title,
                description: description,
                priority: priority,
                completed: false
            })

        }

        return

    }

    return (
        < form onSubmit={() => submitData({ data: formData })}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <input onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} name="title" placeholder="Título" />
                <textarea onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} name="description" placeholder="Descripción" />
                <select onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} name="priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button type="submit">Agregar</button>
            </div>
        </form >
    );
};
