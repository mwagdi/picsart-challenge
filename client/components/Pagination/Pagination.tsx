import { MouseEvent } from 'react';

import { PaginationButton, PaginationList } from './Pagination.style';

interface PaginationProps {
  pages: number;
  currentPage: number;
  onClick: (page: number) => (event: MouseEvent) => void;
}

export const Pagination = ({ pages, currentPage, onClick }: PaginationProps) => (
  <PaginationList>
    {[...Array(pages).keys()].map((page) => (
      <li key={`page_${page + 1}`}>
        <PaginationButton disabled={page + 1 === currentPage} onClick={onClick(page + 1)}>
          {page + 1}
        </PaginationButton>
      </li>
    ))}
  </PaginationList>
);
