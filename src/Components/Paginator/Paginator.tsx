import './paginator.css';

type Props = {
  page: number;
  perPage: number;
  totalItems: number;
  onChange: (page: number) => void;
};

export const Paginator = (props: Props) => {
  const { page, perPage, totalItems, onChange } = props;
  const pagesCount = totalItems / perPage;
  const buttons = [];
  for (let i = 1; i <= pagesCount; i++) {
    buttons.push(
      <div
        key={i}
        onClick={() => onChange(i)}
        className={`paginator__page-btn ${i === page && 'paginator__active'}`}
      >
        {i}
      </div>,
    );
  }
  if (page > 1) {
    buttons.unshift(
      <div
        key={0}
        onClick={() => onChange(page - 1)}
        className={`paginator__page-btn paginator__active paginator__next`}
      >
        Previos
      </div>,
    );
  }
  if (page < pagesCount) {
    buttons.push(
      <div
        key={pagesCount + 1}
        onClick={() => onChange(page + 1)}
        className={`paginator__page-btn paginator__active paginator__next`}
      >
        Next
      </div>,
    );
  }
  return (
    <div className={'paginator__wrapper'}>
      <div className={'paginator__container'}>{buttons}</div>
    </div>
  );
};
