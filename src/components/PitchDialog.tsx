
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Plus } from "lucide-react";
import { getDashboardData, updateDashboardData } from "@/utils/storage";
import { useToast } from "@/hooks/use-toast";

const PitchDialog = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date().toISOString();
    
    updateDashboardData({
      pitchData: {
        id: crypto.randomUUID(),
        title,
        content,
        createdAt: now,
        updatedAt: now,
      },
    });

    toast({
      title: "Success",
      description: "Your pitch has been saved.",
    });
    
    setOpen(false);
    setTitle("");
    setContent("");
  };

  const existingPitch = getDashboardData().pitchData;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          {existingPitch ? (
            <>
              <FileText className="h-4 w-4" />
              Edit Pitch
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" />
              Add Pitch
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{existingPitch ? "Edit Your Pitch" : "Add Your Pitch"}</DialogTitle>
          <DialogDescription>
            Share your startup's vision and goals with mentors.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Pitch Title"
              value={title || (existingPitch?.title ?? "")}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Describe your startup..."
              value={content || (existingPitch?.content ?? "")}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={5}
            />
          </div>
          <Button type="submit" className="w-full">
            {existingPitch ? "Update Pitch" : "Save Pitch"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PitchDialog;
