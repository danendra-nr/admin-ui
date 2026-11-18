import React, { useState } from 'react';

function PostCard(props) {
    const { title, body } = props;
    const [clicked, setClicked] = useState(false);

    return (
        <div
            onClick={() => setClicked(!clicked)}
            className={`${
                clicked ? "bg-blue-100" : "bg-white"
            } p-6 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer`}
        >
            <h2 className="text-xl font-bold text-gray-800 mb-3 capitalize leading-snug">
                {title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
                {body}
            </p>
        </div>
    );
}

export default PostCard;

