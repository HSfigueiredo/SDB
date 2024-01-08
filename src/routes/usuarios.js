const { Router } = require('express')
const { cadastrar } = require('../controller/usuarios')

const router = Router()

router.post('/', cadastrar)