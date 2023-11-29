import { useContext } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ContextAPI } from "../context/ContextAPI";
import Button from "./Button";

export default function Pagination() {
  const { page, setPage } = useContext(ContextAPI);
  return (
    <div className="flex bg-[var(--dark-gray)] rounded-2xl text-[var(--black)] pl-3 gap-5 items-center relative h-10">
      <Button onClick={() => (page > 1 ? setPage(page - 1) : {})}>
        <FaArrowLeft />
      </Button>
      {page <= 3 ? (
        <div className="flex gap-2 items-center">
          <Button page={page} onClick={() => setPage(1)}>
            1
          </Button>
          <Button page={page} onClick={() => setPage(2)}>
            2
          </Button>
          <Button page={page} onClick={() => setPage(3)}>
            3
          </Button>
          <Button page={page} onClick={() => setPage(4)}>
            4
          </Button>
          <p className="align-text-bottom">. . .</p>
          <Button page={page} onClick={() => setPage(39)}>
            39
          </Button>
          <Button page={page} onClick={() => setPage(40)}>
            40
          </Button>
          <Button page={page} onClick={() => setPage(41)}>
            41
          </Button>
          <Button page={page} onClick={() => setPage(42)}>
            42
          </Button>
        </div>
      ) : page >= 40 ? (
        <div className="flex gap-2 items-center">
          <Button page={page} onClick={() => setPage(1)}>
            1
          </Button>
          <Button page={page} onClick={() => setPage(2)}>
            2
          </Button>
          <Button page={page} onClick={() => setPage(3)}>
            3
          </Button>
          <Button page={page} onClick={() => setPage(4)}>
            4
          </Button>
          <p className="align-text-bottom">. . .</p>
          <Button page={page} onClick={() => setPage(39)}>
            39
          </Button>
          <Button page={page} onClick={() => setPage(40)}>
            40
          </Button>
          <Button page={page} onClick={() => setPage(41)}>
            41
          </Button>
          <Button page={page} onClick={() => setPage(42)}>
            42
          </Button>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <Button page={page} onClick={() => setPage(1)}>
            1
          </Button>
          <p className="align-text-bottom">. . .</p>

          <Button page={page} onClick={() => setPage(page - 2)}>
            {page - 2}
          </Button>
          <Button page={page} onClick={() => setPage(page - 1)}>
            {page - 1}
          </Button>
          <Button page={page} onClick={() => setPage(page)}>
            {page}
          </Button>
          <Button page={page} onClick={() => setPage(page + 1)}>
            {page + 1}
          </Button>
          <Button page={page} onClick={() => setPage(page + 2)}>
            {page + 2}
          </Button>
          <p className="align-text-bottom">. . .</p>
          <Button page={page} onClick={() => setPage(42)}>
            42
          </Button>
        </div>
      )}
      <Button onClick={() => (page < 42 ? setPage(page + 1) : {})}>
        <FaArrowRight />
      </Button>
    </div>
  );
}
