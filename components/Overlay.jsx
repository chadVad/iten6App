import React from 'react';
import { Scroll } from "@react-three/drei";



export const Overlay = () => {
    return (
        <Scroll html>
            <h3 className="font-damion text-4xl">
                Testing Fonts no avail
            </h3>
            <p>
            </p>
            <p className="font-sono text-2xl">Testing CSS</p>
            <h3 className="font-cursive text-2xl">
                <a href="https://www.duckduckgo.com">Testing Fonts no avail</a>
            </h3>
            <a href = "https://www.duckduckgo.com">Testing Links</a>
        </Scroll>
    )
};