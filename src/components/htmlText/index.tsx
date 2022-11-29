export const HtmlText = ({ str }: { str: string }) => (
  <p dangerouslySetInnerHTML={{ __html: str }} />
)
