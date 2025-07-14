import { useOptimistic, Suspense, useState, useEffect } from "react";
import apiClient from "../config/axious";
import { EditIcon, Eraser } from "lucide-react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { sleep } from "../utils/sleep";
import axios from "axios";
import NotesNotFound from "../components/NotesNotFound";

function Home() {
  return (
    <div className="relative">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-full">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Notes />
      </Suspense>
    </div>
  );
}

export default Home;

function Notes() {
  const [notes, setNotes] = useState<getResponse>({ count: 0, data: [] });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNotes() {
      try {
        const data = (await apiClient
          .get("/api/notes")
          .then((res) => res.data)) as getResponse;
        setNotes(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 429) {
            toast.error("Too many requests. Please slow down.");
            navigate("/rate-limit");
          } else {
            console.error("API Error:", error.response?.status);
          }
        } else {
          console.error("Unexpected error:", error);
        }
        toast.error((error instanceof Error && error.name) || "fetching error");
      }
    }

    fetchNotes();
  }, [navigate]);

  const [optNotes, setOptNotes] = useOptimistic(notes, (prev, id) => {
    return {
      count: prev.count - 1,
      data: prev.data.filter((note) => note._id !== id),
    };
  });

  const deleteNote = async (formdata: FormData) => {
    const id = formdata.get("id") as string;
    try {
      setOptNotes(id);
      toast.promise(
        async () => {
          await sleep(2000);
          await apiClient.delete(`api/notes/${id}`);
        },
        {
          loading: "Deleting...",
          success: <b>Deleting Note!</b>,
          error: <b>Failed to Delete.</b>,
        }
      );
      setNotes((prev) => ({
        count: prev.count - 1,
        data: prev.data.filter((note) => note._id !== id),
      }));
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : "Something wrong happend"
      );
    }
  };

  return (
    optNotes &&
    (optNotes.count == 0 ? (
      <NotesNotFound />
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {optNotes.data.map((note) => (
          <div className="card bg-base-300 shadow-sm" key={note._id}>
            <div className="card-body">
              <h2 className="card-title text-xl text-base-content capitalize">
                {note.title}
              </h2>
              <p>{note.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/editnote/${note._id}`}>
                  <button className="btn btn-accent text-accent-content">
                    <EditIcon size="20" />
                  </button>
                </Link>

                <form action={deleteNote}>
                  <input
                    type="text"
                    value={note._id}
                    name="id"
                    hidden
                    readOnly
                  />
                  <button className="btn btn-error text-error-content">
                    <Eraser size="20" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    ))
  );
}
