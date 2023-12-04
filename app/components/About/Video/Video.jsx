"use client";

//hooks and library
import { useRef, useEffect } from "react";

//styles
import s from "./Video.module.scss";

export const Video = () => {
    const videoRef = useRef(null);

    const entriesInViewport = (entries) => {
        const [entry] = entries;
        entry.isIntersecting ? videoRef.current.play() : videoRef.current.pause();
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    useEffect(() => {
        const observer = new IntersectionObserver(entriesInViewport, options);

        if (videoRef.current) observer.observe(videoRef.current);

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        }
    }, [])

    return (
        <div className={s.wrapper}>
            <video
                className={s.video}
                src='/IMG_2801.MOV'
                controls={false}
                ref={videoRef}
                muted={true}
                loop={true}
            ></video>
        </div>
    );
};
