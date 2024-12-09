import PropTypes from "prop-types";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ToggleContext } from "../../contexts/ToggleContext";
import { useContext } from "react";

function NoteCard({ id, title, detail, date, handleDeleteNote }) {
  const { lightmode } = useContext(ToggleContext);

  return (
    <div className="min-h-[250px] px-4 py-3 bg-primary rounded-md flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <h2 className="text-base break-words">{title}</h2>
        <p className="text-sm break-words whitespace-pre-wrap">{detail}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm">{date}</p>
        <button
          onClick={() => handleDeleteNote(id)}
          className={`flex items-center gap-1 py-1 px-2 ${
            lightmode
              ? "text-destructive"
              : "bg-destructive hover:bg-destructive-foreground"
          }  rounded-lg`}
        >
          <RiDeleteBin5Line />
          {!lightmode && <span className="text-xs p-[1px]">Delete</span>}
        </button>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  date: PropTypes.string,
  handleDeleteNote: PropTypes.func,
};

export default NoteCard;
