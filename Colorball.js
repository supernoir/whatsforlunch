'use strict';


let RandomizeHex = () => {
	let color = '#'+Math.floor(Math.random()*16777215).toString(16);
	return color;
};

let Colorball = () => {
	return (
        <div id="colorball">
            <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="1" r="3" id="ball" npfill={RandomizeHex()} stroke="rgba(0,0,0,.2)" />
            </svg>
        </div>
    );
};



console.log('Baaaallls');

export default Colorball;