import React from "react"

export const Incrementar = React.memo(({incrementar}) => {
    return (
        <button className="btn btn-light" onClick={() => incrementar(10)}>+1</button>
    )
})

Incrementar.displayName = "Incrementar";