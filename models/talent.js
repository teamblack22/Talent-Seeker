const mongoose = require("mongoose")

let TalentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    dob: {
        type: Date
    },
    email: {
        type: String
    },
    bio: {
        type: String
    },
    skills: [
        {
            skill: {
                type: String
            },
            level: {
                type: String
            }
        }
    ],
    experience: [
        {
            type: String
        }
    ],
    portfolio: [
        {
            project_name: {
                type: String
            },
            description: {
                type: String
            },
            links: [
                {
                    type: String
                }
            ]
        }
    ],
    education: [
        {
            type: String
        }
    ],
    availability: {
        available: {
            type: Boolean,
            default: true
        },
        availablity_date: {
            type: Date,
            default: null
        }
    },
    trainings: [
        {
            type: String
        }
    ],
    certficates: [
        {
            type: String
        }
    ],
    rating: [
        {
            rate: {
                type: Number
            },
            review: {
                type: String
            },
            critic: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'seeker'
            }
        }
    ],
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    phone_number: {
        type: String
    }
})

let TalentModel = mongoose.model("talent", TalentSchema);

module.exports = TalentModel;