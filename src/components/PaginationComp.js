import React, { useMemo } from "react";
import { Pagination } from "react-bootstrap";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const PaginationComp = ({ total, page, setPage }) => {
  const totalCount = useMemo(
    () => Array.from({ length: Math.ceil(total / 5) }, (v, i) => i + 1),
    [total]
  );
  return (
    <PaginationWrapper>
      <p>
        Showing {page === Math.ceil(total / 5) ? total % 5 : 5} of {total}{" "}
        entries
      </p>
      <Pagination>
        <Pagination.First
          disabled={page <= 5}
          onClick={() => (page > 1 ? setPage(page - 5) : null)}
        />
        <Pagination.Prev
          disabled={page <= 1}
          onClick={() => (page > 1 ? setPage(page - 1) : null)}
        />
        {page < 6 ? (
          totalCount
            .filter((count, index) => index < 5)
            .map((count) => (
              <>
                <Pagination.Item
                  active={count === page}
                  key={count}
                  onClick={() => setPage(count)}
                >
                  {count}
                </Pagination.Item>
              </>
            ))
        ) : (
          <>
            <Pagination.Item>...</Pagination.Item>
            <Pagination.Item onClick={() => setPage(page - 2)}>
              {page - 2}
            </Pagination.Item>
            <Pagination.Item onClick={() => setPage(page - 1)}>
              {page - 1}
            </Pagination.Item>
            <Pagination.Item active>{page}</Pagination.Item>

            <Pagination.Item onClick={() => setPage(page + 1)}>
              {page + 1}
            </Pagination.Item>

            <Pagination.Item
              onClick={() =>
                page < totalCount.length ? setPage(page + 2) : null
              }
            >
              {page + 2}
            </Pagination.Item>

            <Pagination.Item>...</Pagination.Item>
          </>
        )}

        <Pagination.Next
          disabled={page >= totalCount.length}
          onClick={() => (page <= totalCount.length ? setPage(page + 1) : null)}
        />
        <Pagination.Last
          disabled={page >= totalCount.length - 9}
          onClick={() => (page < totalCount.length ? setPage(page + 5) : null)}
        />
      </Pagination>
    </PaginationWrapper>
  );
};

export default PaginationComp;

const PaginationWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: $light;
    font-size: 14px;
    font-weight: 300;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
