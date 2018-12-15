//default parameters
export default function(state="", action) {
	switch(action.type){
		case "ACTION_EXAMPLE":
			return action.payload;
	}
	return state;
}