declare module 'public/assets/*.svg' {
  const content: (props: React.ComponentProps<'svg'>) => JSX.Element
  export default content
}
