const sizeClasses = {
  sm: 'h-[43px] text-lg font-medium',
  md: 'h-[63px] text-xl font-bold',
}
function Button({ title, size = 'md', children }) {
  return (
    <div className="w-full p-[6px] rounded-2xl border border-accent bg-transparent">
      <button
        className={`w-full ${sizeClasses[size]} p-[10px] text-black bg-primary rounded-[10px] flex items-center justify-center`}
      >
        {title || children}
      </button>
    </div>
  )
}

export default Button
