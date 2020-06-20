import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
const PaginationComponent = ({ maxPage, activePage, handlePagination }) => {
  const [n, setN] = useState(1);
  // inc active page number when user clicks next arrow
  const handleIncN = () => {
    // m is the new value that will replace m
    let m = activePage + 1;
    // only incremet row of numbers if active page is more than 2 numbers less than max page number
    if (activePage < maxPage - 2) {
      // set state
      setN(m);
    }
    // only increment active button if smaller than max
    if (m <= maxPage) {
      // set active button
      handlePagination(m);
    }
  };
  // dec active page number when user clicks next arrow
  const handleDecN = () => {
    // m is the new value that will replace m

    let m = activePage;

    // only dec row of numbers and dec active button if active page is > 1
    if (activePage > 1) {
      m--;
      // set state
      setN(m);
      // set active button
      handlePagination(m);
    }
  };
  return (
    <Pagination listClassName="justify-content-center">
      <PaginationItem>
        <PaginationLink onClick={handleDecN}>Previous</PaginationLink>
      </PaginationItem>
      <PaginationItem className={activePage === n && "active"}>
        <PaginationLink onClick={() => handlePagination(n)}>{n}</PaginationLink>
      </PaginationItem>
      <PaginationItem className={activePage === n + 1 && "active"}>
        <PaginationLink onClick={() => handlePagination(n + 1)}>
          {n + 1}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className={activePage === n + 2 && "active"}>
        <PaginationLink onClick={() => handlePagination(n + 2)}>
          {n + 2}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={handleIncN}>Next</PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComponent;
