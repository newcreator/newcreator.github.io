(function() {
	var widthWindow = 	window.innerWidth 
						|| document.documentElement.clientWidth
						|| document.body.clientWidth,
		heightWindow = window.innerHeight 
						|| document.documentElement.clientHeight
						|| document.body.clientHeight,

		fixedSS = false,
		offsetY,
		startSlider = document.getElementById('ss'),
		heightSS = startSlider.clientHeight,
		section = document.getElementById('pin'),
        down;

	if(heightWindow >= heightSS){
		startSlider.style.position = 'fixed';
		startSlider.style.top = 0 + "px";
		startSlider.style.height = 85 + 'vh';
		heightSS = startSlider.clientHeight;

		fixedSS = true;

		section.style.position = 'absolute';
		section.style.top = heightSS + 'px';
	}

	function parallax() {
		offsetY = window.pageYOffset;
        section.style.marginTop = "0px";
		if(heightWindow >= heightSS){
			startSlider.style.height = '85vh';
			if(!fixedSS){
				startSlider.style.position = 'fixed';
				startSlider.style.top = 0 + "px";
				fixedSS = true;
				section.style.position = 'absolute';
				section.style.top = heightSS + 'px';
			}
		} else {
			if(!fixedSS){
				if(heightWindow + offsetY > heightSS){
					startSlider.style.position = 'fixed';
					startSlider.style.bottom = 0 + "px";
					fixedSS = true;
					section.style.position = 'absolute';
					section.style.top = heightSS + 'px';
				}
			} else {
				if(heightWindow + offsetY < heightSS){
					startSlider.style.position = 'relative';
					//startSlider.style.bottom = 0 + "px";
					fixedSS = false;
					section.style.position = 'relative';
					//section.style.top = height + 'px';
				}
			}
		}
        if(offsetY >= section.offsetTop){
            down = offsetY - section.offsetTop;
            section.style.backgroundPositionY = down + 'px';
        } else {
            section.style.backgroundPositionY = '0px';
        }
        
	}

	function onresize() {
		// Reset all values
        section.style.marginTop = "-48px";
		widthWindow = 	window.innerWidth 
						|| document.documentElement.clientWidth
						|| document.body.clientWidth;
		heightWindow = window.innerHeight 
						|| document.documentElement.clientHeight
						|| document.body.clientHeight;
		fixedSS = false;
		startSlider.style.height = 'auto';
		heightSS = startSlider.clientHeight;
		if(heightWindow >= heightSS){
			startSlider.style.height = '85vh';
			heightSS = startSlider.clientHeight;
		}
		offsetY = window.pageYOffset;

		// Reset slider's properties
		startSlider.style.position = 'relative';
		startSlider.style.top = 'auto';
		startSlider.style.bottom = 'auto';

		// Reset section's properties
		section.style.position = 'relative';
		section.style.top = 'auto';
	}

	window.addEventListener('scroll', parallax);
	//window.addEventListener('resize', function(event){onresize()});
    window.addEventListener('resize', onresize);

})();