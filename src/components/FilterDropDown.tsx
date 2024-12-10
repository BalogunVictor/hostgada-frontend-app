import React from 'react';
import { VscSettings } from 'react-icons/vsc';

function FilterDropDown() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-4 p-4 rounded-full bg-white shadow-lg max-w-fit">
        <p>Filter by</p>
        <VscSettings className="text-orange-500" />
      </div>
    </div>
  );
}

export default FilterDropDown;
