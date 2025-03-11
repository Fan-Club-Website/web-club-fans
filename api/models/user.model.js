const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const DNI_PATTERN = /^[0-9]{8}[A-Za-z]$/;
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '')
.split(',')
.map(email => email.trim().toLowerCase());


const userSchema = new Schema({
    fullname: {
        type: String,
        trim: true,
        required: true,
        minLenght: [15, 'The full name must be at least 15 characters long'],
        maxLenght: [50, 'The full name must be at most 50 characters long']
    },
    phone: {
        type: Number,
        required: [true, 'The phone number is required'],
        unique: true,
        //TODO implement validation
    },
    dni: {
        type: String,
        trim: true,
        required: [true, 'The dni is required'],
        validate: {
            validator: function (dni) {
                if (DNI_PATTERN.test(dni)) {
                    const dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";
                    const dniNumbers = parseInt(dni.slice(0, dni.length - 1));
                    const dniLetter = dni.slice(dni.length - 1).toUpperCase();
                    return dniLetter === dniLetters[dniNumbers % dniLetters.length];
                } else {
                    return false;
                }
            },
            message: 'The dni is invalid'
        },
        unique: true,
    },
    nickname: {
        type: String,
        trim: true,
        required: [true, 'The nickname is required'],
        unique: true,
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'The email is required'],
        unique: true,
        match: [EMAIL_PATTERN, 'Please fill a valid email address']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'The password is required'],
        match: [PASSWORD_PATTERN, 'The password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character']
    },
    avatar: {
        type: String,
        trim: true,
        //TODO implement the type of the input
    },
    birthday: {
        type: Date,
        required: [true, 'The Birthday is required'],
        validate: {
            validator: function (birthday) {
                const now = new Date();
                if (now >= birthday) {
                    return now.getFullYear() - 120 < birthday.getFullYear();
                }
                else {
                    return false;
                }
            },
            message: 'The birthday range is incorrect'
        }
    },
    role: {
        type: String,
        enum: ['admin', 'member'],
        default: 'member',
    },
    active:{
        type: Boolean,
        default: false,
        //TODO: implement an activation by email.
    },
    adress: {
        country: {
            type: String,
            trim: true,
            required: [true, 'The country is required'],
            minLenght: [3, 'The country is saved as Alpha-3 code'],
            maxLenght: [3, 'The country is saved as Alpha-3 code'],
        },
        province: {
            type: String,
            trim: true,
            required: [true, 'The province is required'],
        },
        city: {
            type: String,
            trim: true,
            required: [true, 'The city is required'],
        },
        postcode: {
            type: Number,
            required: [true, 'The postcode is required'],
        },
        street: {
            type: String,
            trim: true,
            required: [true, 'The street is required'],
        },
        streetnumber: {
            type: Number,
            trim: true,
            required: [true, 'The street number is required'],
        },
        floor: {
            type: String,
            trim: true,
            required: [true, 'The street floor is required'],
        },
        door: {
            type: String,
            trim: true,
            required: [true, 'The door is required'],
        },
    }
},
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                delete ret.__v;
                delete ret._id;
                delete ret.password;
                ret.id = doc.id;
                return ret;
            },
        },
    });

userSchema.pre('save', function (next) {

    if (ADMIN_EMAILS.includes(this.email)) {
        this.role = 'admin';
    }

    if (this.isModified('password')) {
        bcrypt.hash(this.password, SALT_WORK_FACTOR)
            .then(hash => {
                this.password = hash;
                next();
            })
            .catch(next);
    } else {
        next();
    }
});

userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password);
};

module.exports = model('User', userSchema);
