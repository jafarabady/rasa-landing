const sizeClasses = {
  sm: 'h-[32px]  font-medium',
  md: 'h-[44px] font-bold',
}
function Button({ title, size = 'md', children }) {
  return (
    <div className="w-full p-[4px] rounded-[10px] border border-accent bg-transparent">
      <button
        className={`w-full ${sizeClasses[size]} p-[6px] text-black bg-primary rounded-[5px] flex items-center justify-center`}
      >
        {title || children}
      </button>
    </div>
  )
}

export default Button
