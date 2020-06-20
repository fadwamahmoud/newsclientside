import React, { useState } from "react";
import classnames from "classnames";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
const PaginationComponent = ({ maxPage, activePage, handlePagination }) => {
  const [n, setN] = useState(1);
  // inc active page number when user clicks next arrow
  const handleIncN = () => {
    // m is the new value that will replace m
    let m = activePage + 1;

    // only incremet row of numbers if active page is less than max page number
    // only increment active button if smaller than max
    if (m <= maxPage) {
      // set state
      setN(m);
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
      <PaginationItem className={{ disabled: activePage === 1 }}>
        <PaginationLink onClick={handleDecN}>Previous</PaginationLink>
      </PaginationItem>
      <PaginationItem
        className={classnames(
          { active: activePage === n },
          { disabled: n > maxPage }
        )}
      >
        <PaginationLink onClick={() => handlePagination(n)}>{n}</PaginationLink>
      </PaginationItem>
      <PaginationItem
        className={classnames(
          { active: activePage === n + 1 },
          { disabled: n + 1 > maxPage }
        )}
      >
        <PaginationLink onClick={() => handlePagination(n + 1)}>
          {n + 1}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem
        className={classnames(
          { active: activePage === n + 2 },
          { disabled: n + 2 > maxPage }
        )}
        // classNames={activePage === n + 2 && "active" ,""}
      >
        <PaginationLink onClick={() => handlePagination(n + 2)}>
          {n + 2}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className={{ disabled: activePage === maxPage }}>
        <PaginationLink onClick={handleIncN}>Next</PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComponent;
