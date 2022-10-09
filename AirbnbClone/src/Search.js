import React, {useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { DefinedRange } from 'react-date-range';
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

// DATE PICKER COMPONENT
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <div className='Dates'>
            <DateRange ranges={[selectionRange]} onChange={handleSelect} className = 'Calendar' />
            <DefinedRange ranges={[selectionRange]} onChange={handleSelect} className = 'Range'/>
            </div>

            <div className='people-count'>
                <div className='number'>
                    <span>Number of guests</span>
                    <PeopleIcon className='peopleIcon'/>
                </div>

                <div className='submit'>
                    <input min={0} defaultValue={2} type="number" />
                    <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
                </div>
            </div>

        </div>
    )
}

export default Search;