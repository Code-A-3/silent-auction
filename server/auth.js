function authUser(req, res, next){
    if (req.user == null) {
        // res.status(403);
        return res.json({message: 'Need to sign in!'});
    };
    next();
};

export default authUser;

