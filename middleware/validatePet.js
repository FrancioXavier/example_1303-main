module.exports =  (req, res, next) => {
    const body = req.body;
    if(!body.name) return res.status(401).json({errors: 'errado'});
    if(!body.species) return res.status(401).json({errors: 'errado'});
    if(!body.age) return res.status(401).json({errors: 'errado'});
    if(!body.breed) return res.status(401).json({errors: 'errado'});
    if(!body.color) return res.status(401).json({errors: 'errado'});
    if(!body.ownerName) return res.status(401).json({errors: 'errado'});
    if(!body.contact) return res.status(401).json({errors: 'errado'});
    next()
}