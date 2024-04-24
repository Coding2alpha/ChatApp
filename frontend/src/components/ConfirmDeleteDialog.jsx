import { useRef, useEffect } from "react";

export default function ConfirmDeleteDialog({ isOpen, closeHandler }) {
  const dialogRef = useRef(null);

  // Handle clicks outside the dialog to close it
  const handleOutsideClick = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      closeHandler();
    }
  };

  // Add event listener for clicks outside the dialog when it's open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <main
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 cursor-pointer ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-500 bg-gray-900 bg-opacity-25`}
    >
      <section
        ref={dialogRef}
        className={`w-full sm:max-w-[40%] max-w-[80%] bg-white rounded-lg shadow-xl transform transition-transform cursor-auto ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="px-6 py-4 bg-gray-100 border-b border-gray-200 rounded-t-lg">
          <h2 className="text-lg font-semibold">Confirm Delete</h2>
        </div>
        <div className="p-6">
          <p className="text-sm">Are you sure you want to delete this Group?</p>
        </div>
        <div className="flex flex-row-reverse p-6 bg-gray-100 border-t border-gray-200 rounded-b-lg">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm ml-2"
            onClick={closeHandler}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm"
            onClick={closeHandler}
          >
            Confirm
          </button>
        </div>
      </section>
    </main>
  );
}
