import { Box } from "@mui/material";
import { useFormikContext } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MEditor({ name, label, ...others }) {
  const { setFieldValue, values } = useFormikContext();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const rteChange = (content, delta, source, editor) => {
    // console.log(editor.getHTML()); // HTML/rich text
    // console.log(editor.getText()); // plain text
    //  setValue(editor.getHTML());
    setFieldValue(name, editor.getHTML());
    //  console.log(editor.getLength()); // number of characters
  };

  return (
    <Box className="content" sx={{ marginY: 1 }}>
      <ReactQuill
        value={values?.message}
        theme={"snow"}
        onChange={rteChange}
        modules={modules}
      />
    </Box>
  );
}
