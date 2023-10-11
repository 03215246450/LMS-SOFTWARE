import React from 'react';

interface Option {
  value: string;
  displayName: string;
}

interface SelectProps {
  options: Option[];
  label: string;
  getValue: (value: string) => void;
}

export default function Select(props: SelectProps) {
  const { options, label, getValue } = props;

  const selectChange = (val: string)=> {
    getValue(val);
  };

  return (
    <>
      <p className='m-2 fs-3 '>{label}</p>
      <select className='p-2 m-2 fs-4 text-dark border border-dark rounded shadow'
       onChange={(e) => selectChange(e.target.value)}>
        {options &&
          Array.isArray(options) &&
          options.map((x, i) => (
            <option key={i} value={x.value}>
              {x.displayName}
            </option>
          ))}
      </select>
    </>
  );
}
