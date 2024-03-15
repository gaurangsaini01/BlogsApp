import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div className="py-4 sticky bottom-0 bg-white flex gap-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] w-full sm:justify-evenly px-10 items-center">
      <div className="flex gap-2">
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
      </div>

      <div>
        <p className="font-semibold">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
