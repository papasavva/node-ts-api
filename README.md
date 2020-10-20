# node-ts-api

The purpose of this project is to learn the basics of typescript and apply this knowledge to node.js and express.

Due to that, currently other concepts like database and architecture are not important and therefore not implemented.

## Get started
```js
npm install
tsc -w
npm run dev
```

## Routes
- POST http://localhost:3000/todos/
- GET http://localhost:3000/todos/
- PATCH http://localhost:3000/todos/:id
- DELETE http://localhost:3000/todos/:id

### Post
Include the JSON in body request
```json
{
    "text" : "Add eslint support!"
}
```

### Get
Example response
```json
{
    "message": "List of todos",
    "data": [
        {
            "id": "0.6990519671278974",
            "text": "Add eslint support!"
        }
    ]
}
```

### Update
Example response
```json
{
    "message": "Todo is updated",
    "data": {
        "id": "0.6990519671278974",
        "text": "Add prettier support."
    }
}
```

### Delete
Example response
```json
{
    "message": "Todo is deleted",
    "data": {
        "id": "0.6990519671278974",
        "text": "Add prettier support."
    }
}
```