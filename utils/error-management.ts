const unreachable = (x: never): never => {
    throw new Error(`Can't reach ${x}`)
}

export default unreachable
