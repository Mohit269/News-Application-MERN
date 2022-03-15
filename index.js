//import 'dotenv/config';
import mongoose from "mongoose";
import fetch from "node-fetch";
import express from "express";
import cors from "cors";
import {model} from "./models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
const jwt =jsonwebtoken;
const app=express();
let category="general";
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://mohit-sharma:mohit26900@cluster0.zwofr.mongodb.net/newsDB?retryWrites=true&w=majority",{useNewUrlParser:true});

const apiCall=async(category)=>{
    const apiKey = /*"7a140c7434f14fe199066f651b662cf8";*/
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=1&pageSize=20`)
    const data = await response.json();
    return data;
}
app.post(`/general`,async(req,res)=>{
    category="general";
    const data=await apiCall(category);
    res.send(data.articles);
    console.log(category);
})
app.post("/business",async(req,res)=>{
    category="business";
    const data=await apiCall(category);
    res.send(data.articles);
    console.log(category);
})
app.post("/entertainment",async(req,res)=>{
    category="entertainment";
    const data=await apiCall(category);
    res.send(data.articles);
    console.log(category);
})
app.post("/health",async(req,res)=>{
    category="health";
    const data=await apiCall(category);
    res.send(data.articles);
    console.log(category);
})
app.post("/technology",async(req,res)=>{
    category="technology";
    const data=await apiCall(category);
    res.send(data.articles);
    console.log(category);
})
app.post("/science",async(req,res)=>{
    category="science";
    const data=await apiCall(category);
    res.send(data.articles);
    console.log(category);
})
app.post("/sports",async(req,res)=>{
    category="sports";
    const data=await apiCall(category);
    res.send(data.articles);
    console.log(category);
})

app.post('/register',async(req,res)=>{
    
    try {
        await model.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        
        res.json({status:'OK'})
    } catch (error) {
        res.json({status:'error',error:'duplicate email'})
    }


})
app.post('/login',async(req,res)=>{

       const User =  await model.findOne({
            email:req.body.email,
            password:req.body.password
        })
        if(User){
            const token = jwt.sign({
                email:User.email
            },"secret123")
            console.log(token);
        res.json({status:'OK'})
        }
    else{
        res.json({status:'error',error:'duplicate email'})
    }
    console.log(req.body);
})
app.listen(5000,()=>{
    console.log("My app is working");
})