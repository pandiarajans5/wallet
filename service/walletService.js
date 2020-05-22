const wallet = require('../model/wallet');
module.exports = {
  async addWallet(req, res) {
    try{
      const wData = await wallet.findOne({sno:req.body.sno});
      if(wData == null){
        const data = await wallet.insertMany(req.body);
        return data;
      } else {
        return {status:false, message:"sno alreay exists"}
      }
      
    } catch(e){
      return {status:false, message:e.message};
    }
    
  },
  async getWallet(req,res){
    try{
      const data = await wallet.find({});
      return data;
    } catch(e){
      return {status:false, message:e.message};
    }
  },
  async deleteWallet(req,res){
    try{
      if(req.body.sno){
        const data = await wallet.find({sno:req.body.sno})
        if(data.length > 0){
          await wallet.deleteOne({sno:req.body.sno});
          return {status: true, message: "Deleted successfully"};
        } else {
          return {status: false, message:"Enter valid sno"}
        }
      } else {
        return {status: false, message:"please enter sno"}
      } 
    } catch(e){
      return {status:false, message:e.message};
    }
  },
  async updateWallet(req,res){
    try{
      const filter = {sno: req.body.sno};
      const data = await wallet.findOneAndUpdate(filter, req.body, {new: true})
      if(data === null)
        return {status:false, message:'Please check your request'};
      else  
        return data;
    } catch (e){
      return {status:false, message:e.message};
    }
  }
}