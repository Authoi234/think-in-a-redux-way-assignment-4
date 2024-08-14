import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChanged } from './../../redux/Filters/actions';

const FilterButtons = () => {
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const handleStatus = (status) => {
        dispatch(statusChanged(status));
    }

    return (
        <div class="flex items-center space-x-4">
            <button class={`filter-btn ${filters.status === 'All' && "active-filter"}`} onClick={() => handleStatus("All")} id="lws-filterAll">All</button>
            <button class={`filter-btn ${filters.status === 'featured' && "active-filter"}`} onClick={() => handleStatus("featured")} id="lws-filterFeatured">Featured</button>
        </div>
    );
};

export default FilterButtons;