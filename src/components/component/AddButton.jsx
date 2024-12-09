import PropTypes from "prop-types";
import { ToggleContext } from "../../contexts/ToggleContext";
import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

function AddButton({ handleAddNote }) {
  const noteTexts = { title: "", detail: "" };
  const [noteText, setNoteText] = useState(noteTexts);
  const characterLimit = 350;

  const { lightmode } = useContext(ToggleContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText((prevNoteText) => ({
        ...prevNoteText,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    if (noteText.title.trim().length > 0 && noteText.detail.trim().length > 0) {
      handleAddNote(noteText.title, noteText.detail);
      setNoteText({ title: "", detail: "" });
    }
  };

  return (
    <div className="py-8 sm:py-24 lg:px-44 flex justify-end">
      <AlertDialog>
        <AlertDialogTrigger className="w-14 h-14 bg-destructive rounded-full flex items-center justify-center">
          <FaPlus size={20} />
        </AlertDialogTrigger>
        <AlertDialogContent className={`${lightmode ? "" : "dark"}`}>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl text-accent mb-5">
              Create a New Note
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col gap-4">
              <span>
                <label
                  htmlFor="title"
                  className="block text-accent text-xs mb-2"
                >
                  Note Title
                </label>
                <input
                  type="text"
                  id="titles"
                  name="title"
                  value={noteText.title}
                  onChange={handleChange}
                  placeholder="Enter your note title here"
                  className="w-full px-3 py-2 rounded-md bg-background"
                />
              </span>
              <span>
                <label
                  htmlFor="detail"
                  className="block text-accent text-xs mb-2"
                >
                  Note Title
                </label>
                <textarea
                  id="details"
                  rows="8"
                  name="detail"
                  value={noteText.detail}
                  onChange={handleChange}
                  placeholder="write your note here..."
                  className="w-full px-3 py-2  bg-background rounded-md resize-none whitespace-pre-wrap"
                ></textarea>
                <span>{characterLimit - noteText.detail.length} Remaining</span>
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border border-foreground text-foreground hover:bg-primary">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSave}
              className="bg-destructive text-foreground hover:bg-destructive-foreground"
            >
              Save
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

AddButton.propTypes = {
  handleAddNote: PropTypes.func.isRequired,
};

export default AddButton;
