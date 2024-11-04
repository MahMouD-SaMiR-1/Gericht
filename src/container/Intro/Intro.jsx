import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import React from "react";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
	const [palyVideo, setPalyVideo] = React.useState(false);
	const vidRef = React.useRef();

	const handleVideo = () => {
		setPalyVideo((prevPlayVideo) => !prevPlayVideo);

		if (palyVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
	};
	return (
		<div className="app__video">
			<video
				src={meal}
				type="video/mp4"
				ref={vidRef}
				controls={false}
				muted
				loop
			></video>
			<div className="app__video-overlay flex__center">
				<div
					className="app__video-overlay_circle flex__center"
					onClick={handleVideo}
				>
					{palyVideo ? (
						<BsPauseFill color="#fff" fontSize={30} />
					) : (
						<BsFillPlayFill color="#fff" fontSize={30} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Intro;
