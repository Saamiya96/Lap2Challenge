// const { resolve } = require('path')
const { init } = require('../dbConfig')
const { ObjectId } = require('mongodb')


class Post {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.story = data.story
        this.date = data.date
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init()
                const postData = await db.collection('post').find().toArray()
                const posts = postData.map(p => new Post({ ...p, id: p._id }))
                console.log(posts)
                resolve(posts)
            } catch (err) {
                reject(`Error retrieving posts`)
            }
        })
    };

    static findById(id) {
        console.log("*******************", id)
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                console.log(" fhwjkfhkjfhdjkfh ********************************")
                let postData = await db.collection('post').find({ _id: ObjectId(id) }).toArray()
                console.log("*******************")
                console.log(postData)
                console.log("*******************")
                let post = new Post({ ...postData[0], id: postData[0]._id });
                resolve(post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }


    static create(title, name, story, date) {
        if (!name)  name = "Anonymous"
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init()
                let postData = await db.collection('post').insertOne({ title, name, story, date })
                resolve(postData);
            } catch (err) {
                reject(`Error creating posts`)
            }
        })
    }
}

module.exports = Post

