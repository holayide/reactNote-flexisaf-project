import PropTypes from "prop-types";
import { IoSearch } from "react-icons/io5";

function Search({ handleSearch }) {
  return (
    <div className="max-w-[560px] mx-auto px-5 my-11">
      <div className="relative">
        <IoSearch className="absolute top-[50%] left-3 -translate-y-1/2" />
        <input
          type="search"
          name="Search"
          id="search"
          onChange={(e) => handleSearch(e.target.value.toLowerCase())}
          placeholder="type to search..."
          className="w-full h-full py-2 px-10 bg-primary rounded-lg"
        />
      </div>
    </div>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func,
};

export default Search;
