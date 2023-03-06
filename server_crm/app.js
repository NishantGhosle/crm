let express= require('express');
let app = express()
let port = 3030
let parser = require('body-parser');
let cors = require('cors');
const { response } = require('express');
let mongoose = require("mongoose");
let multer = require('multer');

require('./LeadSch');
require("./AdminSch.js");
require("./UserSch.js");

app.use(parser.json());
app.use(cors());
app.use(express.static('public'));

const Lead = mongoose.model("Lead");
const Admin = mongoose.model("Admin");
const User = mongoose.model("User");


mongoose.connect("mongodb+srv://admin-rishabh:welcome12@cluster0.yjc3mau.mongodb.net/crmDataBase?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connection sucessfull with database")).catch((err) => console.log(err));
// mongodb+srv://admin-rishabh:<password>@cluster0.yjc3mau.mongodb.net/?retryWrites=true&w=majority



app.get('/getlead',(req,res) => {
    Lead.find().then(response => {
        console.log(response);
        res.send(response);
    }).catch(err => {
        console.log(err);
    })
});



app.get('/getbyid/:id',(req,res) => {
    Lead.findById(req.params.id).then(response => {
        console.log(response);
        res.send(response);
    }).catch(err => {
        console.log(err);
    })
})

app.get("/getlead/byemail/:email", (request, response) => {
  let email_Id = request.params.email;
 
  Lead.find({ leadmakeremail: email_Id,leadtype: 'normal'}, (error, data) => {
    if (error) {
      console.log(error);
      response.send(error);
    } else {
     
        response.send(data);
     
    }
  });
});

app.get("/getlead/byemail/allocated/:email", (request, response) => {
  let email_Id = request.params.email;
 
  Lead.find({ leadmakeremail: email_Id,leadtype: 'allocated'}, (error, data) => {
    if (error) {
      console.log(error);
      response.send(error);
    } else {
     
        response.send(data);
     
    }
  });
});


app.get("/getlead/byid/:email", (request, response) => {
  let email_Id = request.params.email;
 
  Lead.find({ allocatedto: email_Id}, (error, data) => {
    if (error) {
      console.log(error);
      response.send(error);
    } else {
     
        response.send(data);
     
    }
  });
});






app.post('/addlead',(req,res) => {
    console.log(req.body.firstname)
    console.log(req.body.lastname)
    console.log(req.body.email)
    console.log(req.body.description)
    console.log(req.body.leadmakeremail)
    const lead = new Lead({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        description: req.body.description,
        status: req.body.status,
        leadmakeremail:req.body.leadmakeremail,
    })
    lead.save()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
   

    res.json("posted");
});




app.post('/importedleads',(req,res) => {
    console.log(req.body);
    Lead.insertMany(req.body).then((response) => {
        res.send(response);
    }).catch((error) => {
        res.send(error)
    })
})

app.delete('/:id', async(req,res) => {
    const id = req.params.id
    try {
        const result = await Lead.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
})


app.patch('/:id', async(req, res)=>{
    try{
        const id = req.params.id;
        const updates = req.body;

        const result = await Lead.findByIdAndUpdate(id,updates);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
})




// file updates using multer

let storage = multer.diskStorage({
    destination:'./public/images', //directory (folder) setting
    filename:(req, file, cb)=>{
        cb(null, Date.now()+file.originalname) // file name setting
    }
})

let upload = multer({
    storage: storage,
    fileFilter:(req, file, cb)=>{
     if(
         file.mimetype == 'image/jpeg' ||
         file.mimetype == 'image/jpg' ||
         file.mimetype == 'image/png' ||
         file.mimetype == 'image/gif' ||
         file.mimetype == 'application/pdf'
        
 
     ){
         cb(null, true)
     }
     else{
         cb(null, false);
         cb(new Error('Only jpeg,  jpg , png, pdf and gif Image allow'))
     }
    }
 })

app.patch('/pan/:id',upload.single('panfile'), async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(id)
        const updates = req.file.filename;
        const user = {
            panfile:req.file.filename
        }
       

        const result = await Lead.findByIdAndUpdate(id,user);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
})

app.patch('/aadhar/:id',upload.single('aadhaarfile'), async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(id)
        const updates = req.file.filename;
        const user = {
            aadhaarfile:req.file.filename
        }
        

        const result = await Lead.findByIdAndUpdate(id,user);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
})

app.patch('/itr/:id',upload.single('itrfile'), async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(id)
        const updates = req.file.filename;
        const user = {
            itrfile:req.file.filename
        }
        console.log(updates)

        const result = await Lead.findByIdAndUpdate(id,user);
        res.send('upadted');
    } catch (error) {
        console.log(error.message);
    }
})

app.patch('/residentialproof/:id',upload.single('residentialproof'), async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(id)
        const updates = req.file.filename;
        const user = {
            residentialproof:req.file.filename
        }
        console.log(updates)

        const result = await Lead.findByIdAndUpdate(id,user);
        res.send('upadted');
    } catch (error) {
        console.log(error.message);
    }
})

app.patch('/bankstatement/:id',upload.single('bankstatement'), async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(id)
        const updates = req.file.filename;
        const user = {
            bankstatement:req.file.filename
        }
        console.log(updates)

        const result = await Lead.findByIdAndUpdate(id,user);
        res.send('upadted');
    } catch (error) {
        console.log(error.message);
    }
})


// Functions for Admin 

function adminIDfunc() {
    let id = new Date().getTime().toString();
    console.log(id);
    return id;
  }


  app.post("/addAdmin", (req, res) => {
    console.log(adminIDfunc());
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.description);
    console.log(req.body.password);
    const admin = new Admin({
      admin_id: adminIDfunc(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    admin
      .save()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  
    res.json("posted");
  });
  
  app.get("/admin/login/:email/:password", (request, response) => {
    let email_Id = request.params.email;
    let password = request.params.password;
    Admin.find({ email: email_Id, password: password }, (error, data) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
        if (data.length === 1) {
          response.send(data);
        } else {
          response.send("invalid user");
        }
      }
    });
  });


  app.get("/admin/by/:email", (request, response) => {
    let email_Id = request.params.email;
    
    Admin.find({ email: email_Id }, (error, data) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
        response.send(data);
      }
    });
  });
  

  app.get("/admin", (request, response) => {
    Admin.find({}, (error, data) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
       
          response.send(data);
       
      }
    });
  });



  

// Funtions for Users

app.post("/addUser", (req, res) => {
 
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.phone);
    console.log(req.body.adminemail)
    const user = new User({
      
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone:req.body.phone,
      adminemail:req.body.adminemail,
  
    });
    user
      .save()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  
    res.json("posted");
  });
  
  
  app.get("/users/:email", (request, response) => {
    let email_Id = request.params.email;
    
    User.find({ adminemail: email_Id }, (error, data) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
        response.send(data);
      }
    });
  });

  app.get("/users/by/:email", (request, response) => {
    let email_Id = request.params.email;
    
    User.find({ email: email_Id }, (error, data) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
        response.send(data);
      }
    });
  });

  app.get("/users", (request, response) => {
   
    
    User.find({}, (error, data) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
        response.send(data);
      }
    });
  });
  
  
  
  
  app.get("/user/login/:email/:password", (request, response) => {
    let email_Id = request.params.email;
    let password = request.params.password;
    User.find({ email: email_Id, password: password }, (error, data) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
        if (data.length === 1) {
          response.send(data);
        } else {
          response.send("invalid user");
        }
      }
    });
  });
  

app.listen(port,() => console.log(`server is running on ${port}`));