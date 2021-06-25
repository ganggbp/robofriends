import React from 'react';

const Card = ({name, email, id}) => {    /*เป็นการ Destruc สามารถดูได้จาก ES6*/
	return (
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '> {/*techyons css class*/}
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2> {/* ที่ต้อง {} เพราะเป็น JS expression*/}
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;