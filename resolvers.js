const user = {
    _id:"1",
    name:'ellen',
    email:"ellen@gmail.com",
    picture:"https://picture.com"
}

module.exports = {
    Query:{
        me: ()=> user

    }
   
}