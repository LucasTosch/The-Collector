import * as express from 'express';
import User from '../models/User';
// import asyncHandler from '../middlewares/async'

export const getUsers = async (req:express.Request, res:express.Response, next:express.NextFunction) => {

    try {
        const users = await User.find(req.query)
        res.status(200).json({
            success: true,
            msg: "Show all users",
            count: users.length,
            data: users
        })

    } catch (err) {
        console.log(err)
    }

}

export const createUser = async (req:express.Request, res:express.Response, next:express.NextFunction) => {

    try {
        console.log(req)
        const user = await User.create(req.body)
        res.status(201).json({
            success: true,
            msg: "Created a new user",
            data: user
        })

    } catch (err) {
        console.log(err)
    }
}

export const getUser = async (req:express.Request, res:express.Response, next:express.NextFunction) => {

    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: `Show user with id ${req.params.id}`,
            data: user
        })

    } catch (err) {
        console.log(err)
    }

}

export const updateUser = async (req:express.Request, res:express.Response, next:express.NextFunction) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators:true })
        res.status(200).json({
            success: true,
            msg: `User with id ${req.params.id} updated`,
            data: user
        })

    } catch (err) {
        console.log(err)
    }

}

export const deleteUser = async (req:express.Request, res:express.Response, next:express.NextFunction) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            msg: `User with id ${req.params.id} deleted`,
            data: user
        })

    } catch (err) {
        console.log(err)
    }

}


