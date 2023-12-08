
export interface ICategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

export default function CategoryItem ({ color, value, heading }: ICategoryItemProps) {
  return (
    <div className='category-item'>
      <h5>{heading}</h5>
      <div>
        <div style={{
          backgroundColor: color,
          width: `${value}%`,
        }}>
        </div>
        <span>{value}%</span>
      </div>
    </div>
  );
}
