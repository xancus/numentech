export function useGetCurrentTime (epochTime) {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  const dateTimeFormat = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: tz,
    hour12: false
  }).format(epochTime)
  return dateTimeFormat
}
