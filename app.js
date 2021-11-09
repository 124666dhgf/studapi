const mysql =require('mysql2')
const express = require('express');
var app=express();
const bodyparser= require ('body-parser');
app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'My21sql@#par',
    database: 'student',
    multipleStatements: true
    });
mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });
    app.listen(3000,()=> console.log("express server is running"));
app.get('/join1' , (req, res) => {
    mysqlConnection.query('select students.studid,students.studentname,courses.coursename,courses.fee from students join courses on(students.studid=courses.studid)', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } ); 
app.get('/join2' , (req, res) => {
    mysqlConnection.query('select students.studid,students.studentname,exam.examname from students join exam on(students.studid=exam.studid)', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );
app.get('/join3' , (req, res) => {
    mysqlConnection.query('select students.studid,students.studentname,courses.coursename,exam.examname from students inner join courses on students.studid=courses.studid inner join exam on students.studid=exam.studid', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );
app.get('/students' , (req, res) => {
    mysqlConnection.query('select * from students', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );
app.get('/students/:id' , (req, res) => {
    mysqlConnection.query('select * from students WHERE studid= ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

app.get('/courses' , (req, res) => {
    mysqlConnection.query('select * from courses', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );  
app.get('/exam' , (req, res) => {
    mysqlConnection.query('select * from exam', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );      
app.post('/students/add' , (req, res) => {
    mysqlConnection.query("insert into students(studentname,city)values('Manu','kochi');", (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );    
app.delete('/students/:id' , (req, res) => {
    mysqlConnection.query('delete from students WHERE studid= ?',[req.params.id],(err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );    