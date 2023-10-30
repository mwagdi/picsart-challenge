import { MouseEvent } from 'react';

interface PaginationProps {
  pages: number;
  onClick: (page: number) => (event: MouseEvent) => void;
}

export const Pagination = ({ pages, onClick }: PaginationProps) => (
  <ul>
    {[...Array(pages).keys()].map((page) => (
      <li key={`page_${page + 1}`}>
        <button onClick={onClick(page + 1)}>{page + 1}</button>
      </li>
    ))}
  </ul>
);
