type PropsList = {
  handlePageChange: (page: number) => void;
  handleNextPage: () => void;
  currentPage: number;
  totalPages: number;
};

const ButtonsList = ({
  handlePageChange,
  currentPage,
  handleNextPage,
  totalPages,
}: PropsList) => {
  return (
    <div className="flex justify-center gap-2 md:gap-9 mt-[4.375rem]">
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-6 py-4 rounded-lg ${
            currentPage === page
              ? "bg-customGold text-white"
              : "bg-customBeige2"
          }`}
        >
          {page + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className={`px-6 py-4 rounded-lg bg-customBeige2 ${
          currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === totalPages - 1}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
};

export default ButtonsList;
