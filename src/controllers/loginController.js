const db = require('../config/db')
const jwt = require('jsonwebtoken')


const login = async (req,res) => {
    try {
        const item = req.body

        // Protection for sql injection
        if(typeof(item.username) == String && typeof(item.password) == String)
        {
            const checkQuery = `select * from users where username = '${item.username}' && password ='${item.password}'`
            db.query(checkQuery, (error, result) => {
                if(result[0])
                {
                    const token = createToken(result[0].id)
                    res.cookie('token', token, { maxAge: 3600000, httpOnly: true }) 
                    res.redirect('/books')
                }
                else
                {
                    res.redirect('/')
                }
            })
        }
        else {
            res.redirect('/')
        }
        
    } catch (error) {
        console.log("Failed")
    }
}

const register = async ( req,res) => {
    try {

        const item = req.body
        // Same username
        const checkQuery = `select * from users where username = '${item.username}'`
        db.query(checkQuery, (error, result) => {
            if(result[0])
            {
                res.redirect('/')
            }
            else
            {
                const insertUserQuery = `INSERT INTO users(fullName ,username, password) values('${item.fullName}','${item.username}', '${item.password}')`;
                db.query(insertUserQuery)              
                res.redirect('/')
            }
        })    
        
        
    } catch (error) {
        console.log("Error message : " + error)
    }
}


const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}

module.exports = {
    login,
    register
}