import { NotebookTabsIcon } from "lucide-react";
import { Link } from "react-router";

function NotesNotFound() {
  return (
    <div className="flex flex-col items-center justify-start py-12">
      <div className="bg-base-100  rounded-2xl w-full max-w-sm p-6 flex flex-col items-center text-center gap-4">
        <NotebookTabsIcon
          size={70}
          className="mt-2 px-3 rounded-full bg-primary/15 text-primary"
        />

        <h3 className="text-xl font-semibold text-base-content">
          No Notes Yet
        </h3>

        <p className="text-sm text-muted-foreground">
          Ready to organise your thoughts? Create your first note to get started
          on your journey.
        </p>

        <Link to="/addnote" className="mt-2 btn btn-primary">
          Create Your First Note
        </Link>
      </div>
    </div>
  );
}

export default NotesNotFound;
