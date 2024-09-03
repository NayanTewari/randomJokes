import React, { useState, useCallback } from 'react';
import { Button, Select, Container } from '../Components/index';

function Home() {
    const options = ["general", "knock-knock", "programming", "dad"];
    const [jokes, setJokes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [type, setType] = useState('');

    const fetchJokes = async (type) => {
        setLoading(true);
        try {
            const res = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/random`);
            const data = await res.json();
            setJokes(data);
        } catch (error) {
            setError('Failed to fetch new joke');
        }
        setLoading(false);
    };

    const handleType = useCallback((e) => {
        setType(e.target.value);
    }, []);

    const handleSubmit = useCallback(() => {
        setError(null);
        fetchJokes(type);
    }, [type]);

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center py-10">
            <Container className="w-full max-w-xl bg-gray-800 bg-opacity-90 rounded-lg p-8 shadow-lg">
                <h1 className="text-4xl font-extrabold text-white text-center mb-8">
                    Random Jokes <span className="text-blue-400">| Have Fun</span>
                </h1>
                <p className="text-center text-gray-400 mb-4">Select a joke type below:</p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
                    <Select
                        className="h-fit bg-gray-700 text-white text-lg p-3 rounded-lg shadow focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 w-full md:w-auto"
                        onChange={handleType}
                        options={options}
                        placeholder="Select Joke Type"
                    />
                    <Button
                        onClick={handleSubmit}
                        name="Get Joke"
                        className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg px-6 py-3 shadow hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300 w-full md:w-auto"
                    />
                </div>

                <div className="mt-8">
                    {loading ? (
                        <div className="flex justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-white"></div>
                        </div>
                    ) : jokes.length > 0 ? (
                        jokes.map((joke, index) => (
                            <div
                                key={index}
                                className="bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 mb-4"
                            >
                                <p className="text-gray-400 text-lg font-semibold">Setup:</p>
                                <p className="text-white text-xl mb-4">{joke.setup}</p>
                                <p className="text-gray-400 text-lg font-semibold">Punchline:</p>
                                <p className="text-white text-xl">{joke.punchline}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center text-xl">No Jokes Found</p>
                    )}
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                </div>
            </Container>
        </div>
    );
}

export default Home;
