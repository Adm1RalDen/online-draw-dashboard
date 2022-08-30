import { ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";

export const FormatHtmlToString = (str: string) => {
  const contentBlock = htmlToDraft(str || "");
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );

  return contentState;
};
