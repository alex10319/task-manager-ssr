export const FilterPanel = () => {
  return (
    <div>
      <select>
        <option value="all">Todos</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </select>
      <select>
        <option value="all">Todas prioridades</option>
        <option value="high">Alta</option>
        <option value="medium">Media</option>
        <option value="low">Baja</option>
      </select>
    </div>
  );
};
