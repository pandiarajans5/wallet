var walletService = require('../service/walletService');

module.exports = {
    async addWallet(req,res){
        const data = await walletService.addWallet(req,res);
        if(data.status === false){
            res.status(400).send(data);
        } else {
            res.send(data);
        }
    },
    async getWallet(req,res){
        const walletData = await walletService.getWallet(req,res);
        res.send(walletData);
    },
    async deleteWallet(req,res){
        const data = await walletService.deleteWallet(req,res);
        if(data.status === false){
            res.status(400).send(data);
        } else {
            res.send(data);
        }
    },
    async updateWallet(req,res){
        const data = await walletService.updateWallet(req,res);
        res.send(data);
    }
}