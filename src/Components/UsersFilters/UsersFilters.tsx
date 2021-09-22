import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usersFiltered } from '../../store/usersSlice';
import Select from 'react-select';
import './filters.css';
import { useTypedSelector } from '../../store/useTypedSelector';
import { selectStates } from '../../store/usersSelectors';

export const UsersFilters = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const states = useTypedSelector(selectStates);
  const [selected, setSelected] = useState(states);
  const options = states.map((state) => ({ value: state, label: state }));

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleChangeStates = (e: any) => {
    console.log(e.length);
    if (e.length === 0) {
      setSelected(states);
    } else {
      const newSelect = e.map((state: any) => state.value);
      setSelected(newSelect);
    }
  };
  console.log(states);
  useEffect(() => {
    dispatch(usersFiltered({ name: inputValue, states: selected }));
  }, [inputValue, selected]);

  return (
    <div className={'filters__wrapper'}>
      <input
        value={inputValue}
        onChange={handleChangeName}
        placeholder={'Find by name'}
      />
      <Select
        placeholder={'Filter by state'}
        className={'filters__selector'}
        options={options}
        isMulti
        onChange={handleChangeStates}
      />
    </div>
  );
};
