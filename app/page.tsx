"use client";
import React from "react";
import { lazy } from 'react';
import {BrowserRouter , Routes, Route ,useNavigate} from 'react-router-dom'
const Landing = lazy(()=>import('@/components/landing'))
const Login = lazy(()=>import('@/components/login'))

export default function Home() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter></>
  );
}



