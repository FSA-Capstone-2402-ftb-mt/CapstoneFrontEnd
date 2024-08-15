import React from "react";
import { useState, useEffect } from "react";


//function to fetch the word of the day
export default function FetchWordOfTheDay() {
    const [words, setWords] = useState('');


    useEffect(() => {
        const wordOfTheDay = async () => {
            try {
                const response = await fetch('http://localhost:3032/api/words/wordOf/todaysWord', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                const result = await response.json();
                console.log(result);
                setWords(words);


            } catch (e) {
                console.error('Failed to get word of the day!');
                console.error(e);
            }
        };
        wordOfTheDay();
    }, [words]);

    return (
        <>
            <div>
                <h1>Word of the Day!</h1>
                <p>{words}</p>
            </div>
        </>
    )
};