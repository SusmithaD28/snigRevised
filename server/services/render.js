exports.homeRoutes= (req, res)=>{
    axios.get("")
     .then(function(response){
        res.render('index', {users: response.data});
     })
     .catch(err => {
        res.send(err);
     })
}

exports.add_user=(req, res)=>{
    res.render('add_user');
} 


exports.update_user=(req, res)=>{
    axios.get("")
    res.render('update_user');
}
