import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import apiClient from "../config/axious";
import { sleep } from "../utils/sleep";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { Home } from "lucide-react";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        className="btn btn-primary w-full disabled:bg-primary/45 active:scale-95  active:btn-primary/70 transition-all duration-100"
        disabled={pending}
      >
        {pending ? (
          <>
            Creating Note{" "}
            <span className="loading loading-ring loading-lg"></span>
          </>
        ) : (
          <span> Create Note</span>
        )}
      </button>
      {/* {pending && (
        <div className="text-sm opacity-70 text-center mt-4">
          <p>
            <strong>Method:</strong> {method}
          </p>
          <p>
            <strong>Title:</strong> {data?.get("title")?.toString()}
          </p>
          <p>
            <strong>Descripton:</strong> {data?.get("description")?.toString()}
          </p>
        </div>
      )} */}
    </div>
  );
}

function CreateNote() {
  const navigate = useNavigate();

  const initialState = { message: "" };

  const addNote = async (
    _prevState: { message?: string },
    formdata: FormData
  ) => {
    const title = formdata.get("title") as string;
    const description = formdata.get("description") as string;

    try {
      await sleep(2000);
      await apiClient.post("api/notes", { title, description });
      toast.success("Note Created Succesfully");
      navigate("/");
      return { message: "hi note created" };
    } catch (error) {
      console.log("hi");
      console.error("Error creating note:", error);
      toast.error(
        (error instanceof Error && error.message) || "some error occured."
      );
      return { message: "Invalid credentials" };
    }
  };

  const [state, formAction] = useActionState(addNote, initialState);

  return (
    <div className="flex flex-col items-center justify-start py-12">
      <form className="card w-96 p-8 bg-base-200" action={formAction}>
        <div>
          <p className="text-primary text-2xl font-semibold">Make a Note</p>
        </div>
        <div className="divider"></div>
        <div className="space-y-4">
          <label className="floating-label">
            <span>Title</span>
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              className="input input-md validator"
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
              required
            />
            <div className="validator-hint">Please enter description</div>
          </label>
          <Submit />
          {state && state.message && (
            <div className="text-base-content text-xl text-center">
              {state.message}
            </div>
          )}
          <Link
            className="text-base-content/70 gap-2 text-center flex items-center justify-center"
            to="/"
          >
            <Home size={20} /> <span>Back to home</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
