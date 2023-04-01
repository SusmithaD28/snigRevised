const User = require('../model/user');

module.exports = async (req, res) => {
    let payload = req.body;
    let findUserWithSimilarEmail = await User.findOne({email: req.body.email})
    if(findUserWithSimilarEmail){
       return res.status(400).send({message: 'User with similar email already exists'})
    }

    const userEntry = {
        id: payload._id,
        'name': payload.name,
        'email': payload.email,
        'country': payload.country,
        'city': payload.city,
        'phNum': payload.phNum,
        'username': payload.username,
        'password': payload.password,
        'confirmPassword': payload.confirmPassword
      }

    let UserRegistry = new User(userEntry);

    UserRegistry.save().then(()=>{
        res.send({message: "user added"});
    }).catch((err)=>{
        console.log(err);
    })
    
    // UserRegistry.save(async (registerErr, result) => {
    //     if(registerErr) {
    //         return res.status(500).send({message: 'Some glitch in adding the user. Please try after sometime'});
    //     }else{
    //           return res.status(200).send({
    //               message: 'Student added successfully'
    //             });
    //     }
    // });
}