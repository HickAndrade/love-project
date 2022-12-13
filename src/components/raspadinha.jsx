import React from "react";
import "../assets/inviteCard.scss";
import { ScratchCard, SCRATCH_TYPE } from "scratchcard-js";
import { useEffect } from "react";

const Raspadinha = ({ prizes }) => {

    useEffect(() => {
        const testing = () => {

            
            prizes.map((prize) => {
                const resp = prize.split(' ')[2];

                let a = new ScratchCard(`#${resp}`, {
                    scratchType: SCRATCH_TYPE.SPRAY,
                    containerWidth: 69,
                    containerHeight: 61,
                    imageForwardSrc: "https://source.unsplash.com/cPZ21gvclO8/300x300",
                    clearZoneRadius: 80,
                    nPoints: 30,
                    pointSize: 4,
                });

                a.init();

            })

        };

        window.onload = () => testing();
    }, []);

    return (
        <>
            {prizes.map((prize) => (
                <div id={prize.split(' ')[2]}>
                    <span className="raspadinha" prize={`${prize.split(' ')[0]} ${prize.split(' ')[1]}`} />
                </div>
            ))}
        </>
    )
}

export default Raspadinha;