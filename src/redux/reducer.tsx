import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: '',
	email:'',
	password:'',
}

export default createSlice({
	name: 'PVL',
	initialState,
	reducers: {
		update: (state:any, action:any) => {
			for (const k in action.payload) {
				if (state[k] === undefined) new Error('# undefined key')
				state[k] = action.payload[k]
			}
		}
	}
})