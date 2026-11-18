import React from 'react'

function CheckBox(props) {
    const { label, id, ...rest } = props;

    return (
        <>
            <input
                className="text-sm accent-primary"
                id={id}
                {...rest}
            />
            <label htmlFor="status" className="ml-2 text-sm text-gray-01">
                {label}
            </label>
        </>
    )
}

export default CheckBox
