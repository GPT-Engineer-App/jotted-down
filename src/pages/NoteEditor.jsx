import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const NoteEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    // Save logic here
    navigate("/");
  };

  const handleDelete = () => {
    // Delete logic here
    navigate("/");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">{id ? "Edit Note" : "New Note"}</h1>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex space-x-2">
        <Button onClick={handleSave}>Save</Button>
        {id && <Button variant="destructive" onClick={handleDelete}>Delete</Button>}
      </div>
    </div>
  );
};

export default NoteEditor;