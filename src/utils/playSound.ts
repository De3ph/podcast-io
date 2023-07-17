const playSound = () => {
	const initSound = () => {
		const goggins = new Audio('/goggins.mp3');
		return goggins;
	};

	const sound = initSound();
	const start = () => {
		sound.play();
	};

	start();
};

export default playSound;
