const projects = require('../Model/projectModel')


exports.addProjects = async (req, res) => {

    const { title, languages, github, website, overview } = req.body
    const userId = req.userId
    const projectimg = req.file.filename

    try {
        const existingProject = await projects.findOne({ github })

        if (existingProject) {
            res.status(406).json("project already exist!")
        }
        else {
            const newProject = new projects({ title, languages, github, website, overview, projectimg, userId })
            await newProject.save()
            res.status(200).json("Project added successfully!")
        }
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
    


}

"30th line"