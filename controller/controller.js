const knex = require('../Database/db');

//Get
get_data = (req,res)=>{
    knex.select("*").from('Meraki_courses').then((data)=>{
        console.log(data);
        res.send(data);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err);
    })
}


//Post
post_data = (req,res)=>{
    const userdata = {
        id : req.body.id,
        name : req.body.name,
        logo : req.body.logo,
        notes : req.body.notes,
        days_to_complete : req.body.days_to_complete,
        short_description : req.body.short_description,
        type : req.body.type,
        course_type : req.body.course_type,
        lang_available : req.body.lang_available
    }
    knex('Meraki_courses').insert(userdata).then(()=>{
        res.send({'success' : true,
            'status' : 200,
            'message' : 'Data inserted successfully'
        })
    }).catch((err)=>{
        console.log(err);
        res.send({message : 'Data Not Inserted'});
    });
}



//Put
put_data = (req,res)=>{
    const {id} = req.params;
    const changes = req.body;

    knex('Meraki_courses').update(changes).where({id}).then((count)=>{
        res.send({'success' : true,
            'status' : 200,
            'message' : 'Data successfully updated',
            'updated_data' : [count]
        })
    }).catch((err)=>{
        console.log(err);
        res.send('Data Not Updated');
    });
}




//Delete
delete_data = async (req,res)=>{
    const id = req.params.id;

    knex('Meraki_courses').where("id",id).del().then((count)=>{
        res.send({'success' : true,
        'status' : 200,
        'message' : 'Data successfully Deleted',
        'deleted_data' : [count]
        })
        .catch((err)=>{
            console.log(err);
            res.send({message : 'Data Is Not Deleted'})
        })
    })
}


module.exports = {get_data, post_data, put_data, delete_data};