const con = require('../config');

const deleteMessage = (req,res) =>{
    const id = req.body.id;

    const query = 'delete from massage where id = ?'

    con.getConnection((err, connection)=>{
        if (err) res.status(500).json({message:'Database connection err', err:err})

        con.query(query,[id],(err,result)=>{
            connection.release();
            if (err) res.status(400).json({messgae:'Query error',err:err});

            res.status(200).json('Notes deleted successfully!.')
        })    
    })

}


module.exports = deleteMessage;