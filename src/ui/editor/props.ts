import { EditorProps } from "@tiptap/pm/view";

export const defaultEditorProps: EditorProps = {
  attributes: {
    class: `novel-prose-lg novel-prose-stone dark:novel-prose-invert prose-headings:novel-font-title novel-font-default focus:novel-outline-none novel-max-w-full`,
  },
  handleDOMEvents: {
    keydown: (_view, event) => {
      // prevent default event listeners from firing when slash command is active
      if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
        const slashCommand = document.querySelector("#slash-command");
        if (slashCommand) {
          return true;
        }
      }
    },
  }
};
