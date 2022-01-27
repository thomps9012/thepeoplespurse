"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const educators = [
    {
        _id: new mongodb_1.ObjectId('6196aa0893ea3a5f2d1b0134'),
        educator: true,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [],
        classes: [
            {}
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: true,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [],
        classes: [
            {}
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: true,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [],
        classes: [
            {}
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: true,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [],
        classes: [
            {}
        ],
    }
];
const learners = [
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
    {
        _id: new mongodb_1.ObjectId(''),
        educator: false,
        first_name: "the best",
        last_name: "test",
        username: "test",
        email: "test@test.com",
        password: "$2b$10$xikpJp22UmDouSEmPypznOexaJzzvdU6jG4z0GUIvo7tzfxlM5EbG",
        actions: [
            {},
            {}
        ],
        classes: [
            new mongodb_1.ObjectId('')
        ],
    },
];
const userInput = [
    {
        "first_name": null,
        "last_name": null,
        "email": null,
        "username": null,
        "password": null
    }
];
const educatorInput = [
    {
        "first_name": null,
        "last_name": null,
        "email": null,
        "username": null,
        "password": null
    }
];
