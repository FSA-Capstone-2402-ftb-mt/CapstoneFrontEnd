import React, { useEffect, useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function CalendarWithWords() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [monthWords, setMonthWords] = useState([]);
    const [wordOfDay, setWordOfDay] = useState('');

    useEffect(() => {
        const fetchMonthWords = async (month) => {
            try {
                const response = await fetch(`http://localhost:3032/api/words/month/${month}`);
                const result = await response.json();
                const words = {};
                result.words.forEach(word => {
                    words[word.day] = word.word;
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
        const day = newDate.date();
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



