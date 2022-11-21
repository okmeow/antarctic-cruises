const isHighResolutionScreen = () => (window.devicePixelRatio >= 2);

const isTabKey = (evt) => evt.key === 'Tab';

export {isHighResolutionScreen, isTabKey};
