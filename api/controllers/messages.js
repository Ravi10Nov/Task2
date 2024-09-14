const con = require('../config');

const messages = (req,res)=>{
    const query = 'select * from massage ORDER BY id desc';

    con.getConnection((err,connection)=>{
        if (err) res.status(500).json({message:'Database connection err', err:err})

        connection.query(query,(err,result)=>{
            connection.release();
            if (err) res.status(400).json({message:'Query error', err:err});

            res.status(200).json(result)
        })    
    })
}

module.exports = messages;