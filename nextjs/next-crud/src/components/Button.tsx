interface ButtonProps {
  children: any;
  color?: 'green' | 'blue' | 'gray';
  className?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { children, color, className, onClick } = props;
  // const buttonColor = `from-${color ?? 'gray'}-400 to-${color ?? 'gray'}-700`;
  const buttonColor = color == 'green' ? 'from-green-400 to-green-700'
    : color == 'blue' ? 'from-blue-400 to-blue-700'
    : 'from-gray-400 to-gray-700' ;

  return (
    <button onClick={onClick} className={`
      bg-gradient-to-r ${buttonColor}
      text-white px-4 py-2 rounded-md
      ${className}
    `}>
      {children}
    </button>
  )
}
