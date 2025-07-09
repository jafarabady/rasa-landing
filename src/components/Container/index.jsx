function Container({ className, isActiveContainer = true, children }) {
  return (
    <div
      className={`${isActiveContainer && 'w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1260px] 2xl:max-w-[1440px]'} ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
