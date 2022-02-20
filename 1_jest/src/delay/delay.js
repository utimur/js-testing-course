const delay = (callback, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback())
        }, ms)
    })
}

module.exports = delay;
