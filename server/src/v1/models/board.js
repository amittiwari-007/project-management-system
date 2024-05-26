const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { schemaOptions } = require('./modelOptions')

const boardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  icon: {
    type: String,
    default: '📃'
  },
  title: {
    type: String,
    default: 'Untitled'
  },
  description: {
    type: String,
    default: `Add description here
    🌕 You can add multiline description
    🌕 Let's start...`
  },
  position: {
    type: Number
  },
  teams: [{
    username: String,
    role: {
      type: String,
      enum: ['Project Manager', 'Admin', 'User', 'Task Manager'],
      default: 'User'
    }
  }],
  deadline: {
    type: Date,
    default: () => new Date('2024-06-17')
  },
  favourite: {
    type: Boolean,
    default: false
  },
  favouritePosition: {
    type: Number,
    default: 0
  }
}, schemaOptions)

module.exports = mongoose.model('Board', boardSchema)