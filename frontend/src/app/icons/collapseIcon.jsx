export function CollapseIcon ({ cls }) {
  return (
    <svg
      aria-label='Press to collapse this task'
      width='20px'
      height='20px'
      className={cls}
      fill='currentColor'
      viewBox='0 0 32 32' aria-hidden='true' focusable='false'
    ><path d='M14,19v10c0,0.6-0.4,1-1,1s-1-0.4-1-1v-7.6l-9.3,9.3C2.5,30.9,2.3,31,2,31s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l9.3-9.3H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h10C13.6,18,14,18.4,14,19z M30.7,1.3c-0.4-0.4-1-0.4-1.4,0L20,10.6V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1s-0.4-1-1-1h-7.6l9.3-9.3C31.1,2.3,31.1,1.7,30.7,1.3z' />
    </svg>
  )
}
