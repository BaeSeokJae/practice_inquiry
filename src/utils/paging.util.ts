export const Paging = (page: any, totalPost: number, per_page: number) => {
  const maxPage = 10;
  let currentPage = page ? parseInt(page) : 1;
  const offset = page === 1 ? 0 : per_page * (page - 1);
  const totalPage = Math.ceil(totalPost / per_page);

  if (currentPage > totalPage) {
    currentPage = totalPage;
  }

  const startPage = Math.floor((currentPage - 1) / maxPage) * maxPage + 1;
  let endPage = startPage + maxPage - 1;

  if (endPage > totalPage) {
    endPage = totalPage;
  }

  return { startPage, endPage, offset, totalPage, currentPage };
};
