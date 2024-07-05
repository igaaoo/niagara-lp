export function Badge({ title, colorBadge }: { title: string, colorBadge: string; }) {
  return (
    <span className={`${colorBadge == 'white' ? 'bg-white bg-opacity-20' : `bg-${colorBadge}-900 bg-opacity-50`}  font-red-hat  font-semibold  text-center p-2 backdrop-blur-md backdrop-filter text-white rounded`}>{title}</span>
  );
}