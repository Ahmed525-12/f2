
export const userPage = (req, res, next) => {
    res.json({ message: "User Module" })
}


export const aboutUser = (req, res, next) => {
    res.json({ message: "user about page" })
}


export const userPost =  (req, res, next) => {
    res.json({ message: "Done", data: req.body })
}

// module.exports = {
//     userPage,
//     aboutUser,
//     userPost
// }