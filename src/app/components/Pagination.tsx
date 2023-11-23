import { useContext } from "react";

import { ContextAPI } from "../context/ContextAPI";
import Button from "./Button";

export default function Pagination() {
  const { page, setPage } = useContext(ContextAPI);
  return (
    <div className="flex gap-5">
      <Button page={page} onClick={() => (page > 0 ? setPage(page - 1) : {})}>
        Prev
      </Button>
      <p>{page} / 42</p>
      <Button page={page} onClick={() => (page < 42 ? setPage(page + 1) : {})}>
        Next
      </Button>
    </div>
  );
}
