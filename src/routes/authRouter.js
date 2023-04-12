const express= require("express");
const passport= require('passport')
const jwt= require('jsonwebtoken');

const router= express.Router();

router.post('/signup', passport.authenticate('signup', {session: false}), async(req, res) => {
    console.log("Hi I'm from authRoutes.js - SignUp")
    res.status(200).json({
        success: true,
        message: 'Signup successfull',
        data: {
            user: req.user
        }
    })
});

router.post(
    '/login', 
    async (req, res, next)=> {
        console.log("Hi I'm from authRoutes.js - login")
        passport.authenticate(
            'login',
            async (err, user, info) => {
                console.log("Hi I'm from auth.js - SignUp local Strategy Under Authenticate")
                try{
                    if(err || !user){
                        const error = new Error('Something went wrong');
                        return next(error)
                    }
                    req.logIn(user,
                        {session: false}, 
                        async (err) => {
                            if(err) return next(err);
                            const body= {_id: user._id, email: user.email};
                            const token= jwt.sign({user:body}, 'TOP_SECRET');
                            console.log(token)
                            return res.status(200).json(
                            {
                                token,
                                success: true,
                                message: 'Successfully signed in.'
                            })
                        
                        }
                    )
                } catch (err) {
                    console.log(err);
                    return next(err)
                }
            }
        )(req,res,next);
    }
);

module.exports= router;