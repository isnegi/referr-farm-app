import React from "react";

interface VideoIFrameProps {
    videoId: string;
    aspectRatio?: string; // Example: "16:9", "4:3"
    autoplay?: boolean;
    customStyles?: React.CSSProperties; // For additional styling
}

const VideoIFrame: React.FC<VideoIFrameProps> = ({
    videoId,
    aspectRatio = "16:9",
    autoplay = false,
    customStyles = {},
}) => {
    const [width, height] = aspectRatio.split(":").map(Number);
    const paddingBottom = (height / width) * 100; // Calculate padding for aspect ratio

    return (
        <div
        className="rounded-lg"
            style={{
                position: "relative",
                paddingBottom: `${paddingBottom}%`,
                height: 0,
                overflow: "hidden",
                ...customStyles,
            }}
        >
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0`}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="ReferrFarm - How it works?"
            ></iframe>
        </div>
    );
};

export default VideoIFrame;
