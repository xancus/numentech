export function RemoveTaskIcon ({ cls }) {
  return (
    <svg
      aria-label='Press to remove this task'
      className={cls}
      viewBox='0 0 32 32'
      aria-hidden='true'
      focusable='false'
      fill='currentColor'
      width='18px'
    ><path d='M30,6h-8V4c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4v2H2C1.4,6,1,6.4,1,7s0.4,1,1,1h2v18c0,3.3,2.7,6,6,6h12c3.3,0,6-2.7,6-6V8h2c0.6,0,1-0.4,1-1S30.6,6,30,6z M12,4c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v2h-8V4z M26,26c0,2.2-1.8,4-4,4H10c-2.2,0-4-1.8-4-4V8h20V26z M12,23v-8c0-0.6,0.4-1,1-1s1,0.4,1,1v8c0,0.6-0.4,1-1,1S12,23.6,12,23z M18,23v-8c0-0.6,0.4-1,1-1s1,0.4,1,1v8c0,0.6-0.4,1-1,1S18,23.6,18,23z' />
    </svg>
  )
}
