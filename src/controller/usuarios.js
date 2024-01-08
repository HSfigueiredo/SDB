const cadastrar = async (req, res) => {
    const { nome, email, senha } = req.body

    return res.status(200).json('Hello word')
}

module.exports = {
    cadastrar
}