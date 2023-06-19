import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Gul from '../Components/audio/gul.mp3' ;

const useAudio = url => {
    const [audio] = useState(new Audio(Gul));
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

const Player = ({ Gul}) => {
    const [playing, toggle] = useAudio(Gul);

    return (
        <div className="   float-end">
            <Button className='btn ' variant="outline-dark" size="lg" onClick={toggle}>{playing ? "Pause" : "Play"} </Button>
        </div>
    );
};


export default Player;