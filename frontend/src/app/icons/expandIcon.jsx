export function ExpandIcon ({ cls }) {
  return (
    <svg
      aria-label='Press to expand this task'
      width='20px'
      height='20px'
      className={cls}
      fill='currentColor'
      viewBox='0 0 32 32' aria-hidden='true' focusable='false'
    ><path d='M13.7,19.7L5.4,28H13c0.6,0,1,0.4,1,1s-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V19c0-0.6,0.4-1,1-1s1,0.4,1,1v7.6l8.3-8.3c0.4-0.4,1-0.4,1.4,0S14.1,19.3,13.7,19.7z M29,2H19c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.6l-8.3,8.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3L28,5.4V13c0,0.6,0.4,1,1,1s1-0.4,1-1V3C30,2.4,29.6,2,29,2z' />
    </svg>
  )
}
