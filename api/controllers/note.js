const con = require('../config');

const createNote = (req, res) => {

    const message = req.body.message;

    const query = 'insert into massage (message) values (?)';

    con.getConnection((err, connection) => {
        if (err) res.status(500).json({message:'Database connection err', err:err})

        const value = [message]    

        connection.query(query, [value], (err, result) => {
            connection.release();
            if (err) res.status(400).json({message:'Query error', err:err})

            res.status(200).json({message:'Notes added successfully'})
        })
    })

}

module.exports = createNote;