const { Router } = require('express');
const typesRouter= require('../routes/typesRouter')
const pokemonRouter = require('../routes/pokemonRouter')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router()

router.use('/pokemon', pokemonRouter)
router.use('/type', typesRouter)

module.exports = router;








