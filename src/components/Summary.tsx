interface SummaryProps {
  total: number;
  completed: number;
}

export const Summary = ({ total, completed }: SummaryProps) => {
  return (
    <div>
      Total: {total}, Completadas: {completed}
    </div>
  );
};
