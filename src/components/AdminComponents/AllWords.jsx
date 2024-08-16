import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

export default function BasicDateCalendar() {
    const [selectedDate, setSelectedDate] = React.useState(null);

    // function to display the words of the month
    const wordsOfTheMonth = {
        '2024-07-30': 'Event A: Meeting at 10 AM',
        '2024-08-01': 'Event B: Conference at 2 PM',
    };

    // Format date to string for lookup
    const formatDateForLookup = (date) => date.format('YYYY-MM-DD');

    // Handle date change
    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
    };

    // Get information based on selected date
    const information = selectedDate ? dateInfo[formatDateForLookup(selectedDate)] : 'Select a date to see information';

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ display: 'flex' }}>
                <DateCalendar
                    onChange={handleDateChange}
                />
                <div style={{ marginLeft: '20px', padding: '10px', border: '1px solid #ccc' }}>
                    <h3>Word Tab</h3>
                    <p>{information}</p>
                    <input type="text" placeholder="Change Word"></input><br></br>
                    <button>Change Word</button><br></br>
                    <button>Delete Word</button>

                </div>
            </div>
        </LocalizationProvider>
    );
}

