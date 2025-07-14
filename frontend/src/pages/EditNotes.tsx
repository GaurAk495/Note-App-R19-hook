import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import apiClient from "../config/axious";
import { useEffect, useState, useTransition } from "react";
import { sleep } from "../utils/sleep";

function EditNote() {
  const navigate = useNavigate();
  const params = useParams();
  const [note, setNote] = useState<Notes | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isPendingUpdate, startTransitionUpdate] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await apiClient.get(`api/notes/${params.id}`);
        setNote(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error(
          (error instanceof Error && error.message) || "delete note failed"
        );
      }
    });
  }, [params]);

  const editNote = async (formdata: FormData) => {
    console.log(formdata);
    const title = formdata.get("title") as string;
    const description = formdata.get("description") as string;
    startTransitionUpdate(async () => {
      await sleep(2000);
      try {
        await apiClient.put(`api/notes/${params.id}`, {
          title,
          description,
        });
        toast.success("Note updated Succesfully");
        navigate("/");
      } catch (error) {
        console.error("Error updating note:", error);
        toast.error(
          (error instanceof Error && error.message) || "some error occured."
        );
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-start py-12">
      {note && (
        <form className="card w-96 p-8 bg-base-200" action={editNote}>
          <div>
            <p className="text-primary text-2xl">Edit a Note</p>
          </div>
          <div className="divider"></div>
          <div className="space-y-1">
            <label className="floating-label">
              <span>Title</span>
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                className="input input-md validator"
                defaultValue={note.title}
                required
              />
              <div className="validator-hint">Please enter Title</div>
            </label>
            <label className="floating-label">
              <span>Description</span>
              <input
                type="text"
                name="description"
                placeholder="Enter Description"
                className="input input-md validator"
                defaultValue={note.description}
                required
              />
              <div className="validator-hint">Please enter description</div>
            </label>
            <button
              className="btn btn-primary w-full disabled:bg-primary/45"
              disabled={isPendingUpdate}
            >
              {isPendingUpdate ? (
                <>
                  Editing Note{" "}
                  <span className="loading loading-ring loading-lg"></span>
                </>
              ) : (
                <span> Edit Note</span>
              )}
            </button>
          </div>
        </form>
      )}
      {isPending && (
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      )}
    </div>
  );
}

export default EditNote;
