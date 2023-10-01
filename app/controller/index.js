function getSepatu(req, res, next){
    res.json({
        message:"ini get list product"
    })
}

function addSepatu(req, res, next){
    res.json({
        message:"ini Add product"
    })
}

module.exports={
    getSepatu,
    addSepatu
}