export const HtmlText = ({ str }: { str: string }) => (
  <div dangerouslySetInnerHTML={{ __html: str }}></div>
)
