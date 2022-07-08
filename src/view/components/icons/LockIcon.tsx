interface Props {
  className?: string
}

export const LockIcon = (props: Props) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path strokeWidth="1.2344" d="m4 8.0018v-1.1428a8 6.8566 0 1 1 16 0v1.1428h2.6667a1.3333 1.1428 0 0 1 1.3333 1.1428v13.713a1.3333 1.1428 0 0 1-1.3333 1.1428h-21.333a1.3333 1.1428 0 0 1-1.3333-1.1428v-13.713a1.3333 1.1428 0 0 1 1.3333-1.1428zm17.333 2.2855h-18.667v11.428h18.667zm-10.667 6.5503a2.6667 2.2855 0 1 1 2.6667 0v2.5918h-2.6667zm-4-8.8358h10.667v-1.1428a5.3333 4.5711 0 1 0-10.667 0z"/>
  </svg>
)
