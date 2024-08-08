import React from "react";
import { useState, useEffect } from "react";

export default function fetchWordOfTheDay() {
    const [words, setWords] = useState('');


    useEffect(() => {
        const wordOfTheDay = async () => {
            try {
                const response = await fetch('http://localhost:3032/api/words/wordOf/todaysWord')

                const result = response.json();
                console.log(result);
                setWords(result.words);


            } catch (e) {
                console.error('Failed to get word of the day!');
                console.error(e);
            }
        };
        wordOfTheDay();
    }, []);

    return (
        <>
        <h1>Word of the day</h1>
        <p>{words.map(word =>(
            <p key={word.id}>
                {word.day}
            </p>
        ))}</p>
        </>
    )
};