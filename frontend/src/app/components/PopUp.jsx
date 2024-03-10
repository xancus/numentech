export function PopUp ({ children, edit }) {
  return (
    <div className={`${edit ? 'flex' : 'hidden'} absolute top-0 left-0 h-screen w-full bg-[rgba(0,0,0,.4)] items-center justify-center shadow-lg`}>
      {children}
    </div>
  )
}
