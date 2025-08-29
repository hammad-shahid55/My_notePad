import React, { useState } from "react";
import Header from "../components/Header";

// Note type for storing title and content
interface Note {
  title: string;
  content: string;
}

const Notes: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search term

  // Open modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Save new note
  const saveNote = () => {
    const newNote = { title, content: note };
    setNotes([...notes, newNote]);
    setTitle("");
    setNote("");
    closeModal();
  };

  // Select note to preview
  const openPreview = (note: Note) => {
    setSelectedNote(note);
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search term change
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className={`h-screen flex flex-col bg-gray-900 text-white ${isModalOpen ? "bg-blur-sm" : ""}`}>
      {/* Header with search functionality */}
      <Header onSearch={handleSearch} />

      {/* Take a note */}
      <div className="flex items-center justify-center px-6 py-3">
        <input
          type="text"
          placeholder="Take a note..."
          className="w-full max-w-3xl px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={openModal}
        />
      </div>

      {/* Left: Note Cards */}
      <div className="flex gap-6 px-6 py-4 overflow-auto">
        {filteredNotes.map((note, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg w-64 cursor-pointer"
            onClick={() => openPreview(note)}
          >
            <h4 className="text-xl text-white">{note.title}</h4>
            <p className="text-sm text-gray-300">{note.content}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1">
        <p className="text-red-500 text-2xl font-bold">No Notes Found!~</p>
      </main>

      {/* Modal for note input */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-lg w-96">
            <h3 className="text-lg text-white mb-4">Title</h3>
            <input
              type="text"
              placeholder="Title"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 mb-4"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h3 className="text-lg text-white mb-4">Take a note...</h3>
            <textarea
              placeholder="Your note..."
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 mb-4"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-md"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={saveNote}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {selectedNote && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-lg w-96">
            <h3 className="text-2xl text-white">{selectedNote.title}</h3>
            <p className="text-white mt-4">{selectedNote.content}</p>
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded-md mt-4"
              onClick={() => setSelectedNote(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
