const db = require('../util/database');


module.export = class User {
    constructor(name,email,password){   
        this.name = name;
        this.email = email;
        this.password = password;  
 }

//find a user based on an email
static find(email){

    return db.execute(
        'SELECT * FROM users where email=?', 
        [email]
    );
}


 //create a user
 static save(user){
     return db.execute(
         'INSERT INTO users (name,email,password) VALUES (?,?,?)', 
         [user.name,user.email,user.password]
     );
 }
};

