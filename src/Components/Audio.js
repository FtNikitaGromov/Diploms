import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Naru from '../Components/audio/naruto.mp3' ;

const useAudio = url => {
    const [audio] = useState(new Audio(Naru));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return [playing, toggle];
};

const Player = ({ Naru }) => {
    const [playing, toggle] = useAudio(Naru);

    return (
        <div className='text-center mt-2'>
            <Button className='btn' variant="outline-dark" size="lg" onClick={toggle}>{playing ? "Pause" : "Play"} </Button>
        </div>
    );
};

export default Player;