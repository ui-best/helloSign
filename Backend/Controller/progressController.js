const { progressModel } = require("../Model/progressModel");

async function getProgress(req, res) {
    try {
        let progress = await progressModel.find({ email: req.email });
        res.status(200).json({
            message: "Progress",
            data: progress[0].progress
        })
    } catch (err) {
        res.status(501).json({
            message: "failed to get progress",
            error: err
        })
    }
}

async function addProgress(req, res) {
    try {
        let user = await progressModel.find({email:req.email});
        let progress = await progressModel.findById(user[0]._id);
        progress.progress.push(req.body.progress)
        await progress.save();
        res.json({
            message: "progress added!"
        })
    }
    catch (error) {
        console.log(error)
        res.status(200).json({
            message: "failed to add progess !!",
            error
        })
    }
}


module.exports.addProgress = addProgress;
module.exports.getProgress = getProgress;



