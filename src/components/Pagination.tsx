import { useContext } from "react";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { ContextAPI } from "../context/ContextAPI";
import Button from "./Button";
import SearchInput from "./SearchInput";

export default function Pagination() {
  const { page, setPage } = useContext(ContextAPI);
  return (
    <div className="flex gap-5 items-center relative ml-16">
      <Button page={page} onClick={() => (page > 1 ? setPage(page - 1) : {})}>
        <MdArrowBackIos /> Prev
      </Button>
      <p className="text-lg">{page} / 42</p>
      <Button page={page} onClick={() => (page < 42 ? setPage(page + 1) : {})}>
        Next <MdArrowForwardIos />
      </Button>
      <SearchInput />
    </div>
  );
}
