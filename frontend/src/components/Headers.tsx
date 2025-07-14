import { Link, useNavigate } from "react-router";

function Headers() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-base-300">
      <p className="text-3xl font-bold tracking-wide text-primary">
        <Link to="/">NotesMaker</Link>
      </p>
      <div>
        <button
          className="px-4 btn btn-primary"
          onClick={() => navigate("/addnote")}
        >
          Create Note
        </button>
      </div>
    </nav>
  );
}

export default Headers;
