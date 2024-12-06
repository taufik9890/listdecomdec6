const todoUserModel = require('../model/todoUserModel');

let registrationController = async (req, res) => {
    // res.send('hoise')
    const {
        name,
        email,
        password
    } = req.body
    console.log(name, email, password);


    if (!name || !email || !password) {
        return res.send({
            error: 'Please fill up all the fields'
        })

    }
    if (password && password.length < 8) {
        return res.send({
            error: 'Password is too small'
        })
    }


    let existingTodoUser = await todoUserModel.find({
        email: email
    })

    console.log(existingTodoUser);


    if (existingTodoUser.length > 0) {
        return res.send({
            error: `${email} already in use`
        })
    } else {


      let todoUser = new todoUserModel({
        name: name,
        email: email,
        password: password
      }
      )
      todoUser.save()
      res.send(todoUser)



    }



    //   let todoUser = new todoUserModel({
    //     name: name,
    //     email: email,
    //     password: password
    //   }
    //   )




    //   todoUser.save()
    //   res.send(todoUser)


}
module.exports = registrationController