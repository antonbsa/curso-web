interface InputProps {
  type?: 'text' | 'number';
  text: string;
  value: any;
  readOnly?: boolean;
  className?: string;
  valueChanged?: (value: any) => void;
}

export default function Input(props: InputProps) {
  const { type, text, value, readOnly, className, valueChanged } = props;

  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2">
        {text}
      </label>
      <input
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-100 px-4 py-2
          ${!readOnly && 'focus:bg-white'}
        `}
        onChange={e => valueChanged?.(e.target.value)}
        type={type ?? 'text'}
        value={value}
        readOnly={readOnly} />
    </div>
  )
}