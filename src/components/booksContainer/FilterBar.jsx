import React from 'react';

const FilterBar = () => {
    return (
        <div class="flex items-center justify-between mb-12">
        <h4 class="mt-2 text-xl font-bold">Book List</h4>

        <div class="flex items-center space-x-4">
          <button class="lws-filter-btn active-filter">All</button>
          <button class="lws-filter-btn">Featured</button>
        </div>
      </div>
    );
};

export default FilterBar;