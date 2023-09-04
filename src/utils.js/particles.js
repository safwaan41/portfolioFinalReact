/* eslint-disable import/no-anonymous-default-export */
export default {
    background: {
        color: {
            value: "#1d1d1d",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 5,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 77,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "polygon",
        },
        size: {
            value: { min: 1, max: 7 },
        },
    },
    detectRetina: true,
};