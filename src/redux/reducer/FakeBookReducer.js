import { ADD_COMMENT } from "../typed/FakeBookType";

const stateDefault = {
	comments: [
		{
			name: "Yone",
			content: "Hi Heeloo",
			avatar: `https://i.pravatar.cc/150?u=Yone`,
		},
		{
			name: "Gareen",
			content: "Hi Heeloo",
			avatar: `https://i.pravatar.cc/150?u=Gareen`,
		},
		{
			name: "Kata",
			content: "Hi Heeloo",
			avatar: `https://i.pravatar.cc/150?u=Kata`,
		},
	],
};

export const FakeBookReducer = (state = stateDefault, action) =>
{
	switch (action.type)
	{
		case ADD_COMMENT: {
			console.log(action)
			state.comments = [...state.comments, action.useComment]
			return {...state}
		}
		default : return { ...state };
	}
	
};
