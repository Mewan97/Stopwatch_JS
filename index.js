
function Stopwatch(){
	// Constructor
	let startTime, endTime, running, duration = 0;
	
	this.start = function(){
		if(running)
			throw new Error("Already Started !!!");
		
		running = true;	
		startTime = new Date();
	}

	this.stop = function(){
		if(!running)
			throw new Error("Stopwatch is not running !!!");

		running = false;
		endTime = new Date();
		duration = (endTime.getTime() - startTime.getTime())/1000;	
	}

	this.reset = function(){
		startTime = endTime = running = null;
		duration = 0;
	}

	Object.defineProperty(this, "duration", {
		get : function(){
			return duration;
		}
	})

}