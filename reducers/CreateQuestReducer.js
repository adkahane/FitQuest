const INITIAL_STATE = {
	polylines: [], 
	speed: [], 
	timestamp: [], 
	latitude: 37.871732795815525,
	longitude: -122.27066792384305, 
	started: false, 
	stopped: false, 
	modalVisible: false
};

export default(state = INITIAL_STATE, action) =>{
	switch(action.type){
		default: 
			return state; 
	}
}