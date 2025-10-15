export const TaskForm = () => {
    return (
        <form>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <input placeholder="Título" />
                <textarea placeholder="Descripción" />
                <select>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button type="submit">Agregar</button>
            </div>
        </form>
    );
};
