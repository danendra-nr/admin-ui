import React from 'react'

function LabeledInput(props) {
    const { label, id, ...rest } = props;

    return (
        <>
            <label htmlFor={id} className="block text-sm">
                {label}
            </label>
            <input
                className="py-3 pl-4 mt-1 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
                id={id}
                {...rest}
            />
        </>
    )
}

export default LabeledInput
