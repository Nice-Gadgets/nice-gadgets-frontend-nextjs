import { Button } from '@/shared/ui/button';

import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="control"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 transition-colors mr-2"
      >
        <ChevronLeftIcon />
      </Button>

      {pages.map((page) => {
        const isCurrent = currentPage === page;
        return (
          <Button
            variant="pagination"
            aria-current={isCurrent ? 'page' : undefined}
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 transition-colors`}
          >
            {page}
          </Button>
        );
      })}

      <Button
        variant="control"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pages.length}
        className="w-10 h-10 transition-colors ml-2"
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
