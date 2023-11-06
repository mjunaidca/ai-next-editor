"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { Extension, JSONContent } from "@tiptap/core";
import { defaultExtensions } from "@/ui/editor/extensions";
import { EditorProps } from "@tiptap/pm/view";

interface ReadOnlyEditorProps {
  content: JSONContent;
  extensions?: Extension[];
  editorProps?: Partial<EditorProps>;
}

export const ReadOnlyEditor = ({
  content,
  extensions = [],
  editorProps = {},
}: ReadOnlyEditorProps) => {
  const editor = useEditor({
    extensions: [...defaultExtensions, ...extensions],
    content, // Load the content from props.
    editorProps: {
      ...editorProps,
      // Provide a function that returns false for the editable property
      editable: () => false,
    },
  });
  // The read-only editor does not need to handle updates,
  // so we do not need to include the onUpdate logic here.

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }

    // Clean up the editor on component unmount
    return () => {
      editor?.destroy();
    };
  }, [editor, content]);

  if (!editor) {
    return <div>Loading...</div>;
  }

  return <EditorContent editor={editor} />;
};
