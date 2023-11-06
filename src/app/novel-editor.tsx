"use client";
import { useState } from "react";
import { Editor } from "../index";
import { JSONContent } from "@tiptap/react";
import { ReadOnlyEditor } from "./readonly";
import { defaultEditorContent } from "@/ui/editor/default-content";

export default function NovelEditor() {
  const [editorContent, setEditorContent] = useState<JSONContent | null>(
    defaultEditorContent
  );

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   console.log("handleSubmit editorContent", editorContent);
  // };

  return (
    <>
      {/* <form onSubmit={handleSubmit} className="relative w-full max-w-screen-lg"> */}
      <h2 className="font-bold py-3 pt-5">
        Here's the Notion Styled AI Power Editor
      </h2>
      <Editor
        onUpdate={(editor) => {
          if (editor) {
            setEditorContent(editor.getJSON());
          }
        }}
        defaultValue={""}
        disableLocalStorage={true}
      />
      {/* <button type="submit" className="">
          Submit Post
        </button> */}
      {/* </form> */}
      {editorContent && ( // Only render ReadOnlyEditor if there is content
        <div className="max-w-screen-2xl h-[200vh]">
          <h2 className="font-bold py-3 pt-5">
            Below is the Read only mode of TipTap Editor
          </h2>
          <ReadOnlyEditor content={editorContent} />
        </div>
      )}
    </>
  );
}
