import React from 'react';

const UserInput = (props) => {
	const style = {
		border: '1px solid red'
	}

	return (
		<div style={style}>
			<input type="text" value={props.nameValue} onChange={props.changeHandler} />
		</div>
	)
}

export default UserInput;