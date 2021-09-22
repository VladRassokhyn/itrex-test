import { useState } from 'react';
import { SortTypes } from '../../store/types';
import { useTypedSelector } from '../../store/useTypedSelector';
import { selectSortOptions } from '../../store/usersSelectors';

type Props = {
  onSort: (sortOption: SortTypes) => void;
};

export const TableHead = (props: Props) => {
  const { onSort } = props;
  const options = useTypedSelector(selectSortOptions);

  return (
    <div className={'table__head-wrapper'}>
      {options.map((option) => (
        <div
          key={option.name}
          onClick={() => onSort(option.name)}
          className={`table__cell table__cell-header ${
            option.name === SortTypes.BY_EMAIL && 'table__cell-email'
          }`}
        >
          {option.displayName}{' '}
          {option.sorted ? (option.reversed ? '↓' : '↑') : '⇾'}
        </div>
      ))}
    </div>
  );
};
