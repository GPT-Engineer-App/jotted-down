import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "First Note", content: "This is the first note" },
    { id: 2, title: "Second Note", content: "This is the second note" },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Notes</h1>
        <Button as={Link} to="/new">
          Create Note
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{note.content}</p>
              <Button as={Link} to={`/edit/${note.id}`} className="mt-2">
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;