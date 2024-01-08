import React from "react"
import PathConstants from "./pathsConstants"
import Homepage from '../pages/Home'

const routes = [
    { path: '/', element: <Homepage /> },
    { path: PathConstants.HOME, element: <Homepage /> }
]

export default routes