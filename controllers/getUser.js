const user = require('../models/users')
const skill = require('../models/skills')
const experience = require('../models/experiences')
const project = require('../models/projects')

module.exports = async (req, res) => {
    const bioData = await user.findById(req.params.id);
    const skillData = await skill.find({user_id : req.params.id})
    const experienceData = await experience.find({user_id : req.params.id})
    const projectData = await project.find({user_id : req.params.id})
    //console.log(skillData)
    res.send(bioData + skillData + experienceData + projectData) ;
}
