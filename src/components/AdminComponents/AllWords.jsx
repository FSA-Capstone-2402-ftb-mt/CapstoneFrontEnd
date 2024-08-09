import React, { useEffect, useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function CalendarWithWords() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [monthWords, setMonthWords] = useState({});
    const [wordOfDay, setWordOfDay] = useState('');

    useEffect(() => {
        const fetchMonthWords = async (month) => {
            try {
                const response = await fetch(`http://localhost:3032/api/words/month/${month}`);
                const result = await response.json();

                // Transform the data structure if necessary
                const words = {};
                result.words.forEach(wordObj => {
                    const day = Object.keys(wordObj)[0];  // Get the key which is the day
                    words[day] = wordObj[day];  // Set the word in the object
                });

                setMonthWords(words);
            } catch (e) {
                console.error('Failed to fetch words of the month!', e);
            }
        };

        const currentMonth = selectedDate.format('MMMM');
        fetchMonthWords(currentMonth);
    }, [selectedDate]);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        const day = newDate.date().toString(); // Convert day to string to match the key in monthWords
        setWordOfDay(monthWords[day] || 'No word for this day');
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
                <h1>{selectedDate.format('MMMM')} Words</h1>
                <DateCalendar
                    views={['month', 'day']}
                    value={selectedDate}
                    onChange={handleDateChange}
                />
                <div>
                    <h2>Word of the Day</h2>
                    <p>{wordOfDay}</p>
                </div>
            </div>
        </LocalizationProvider>
    );
}