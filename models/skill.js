const skills = [
    {id: 132433, skill: "Javascript", learned: true},
    {id: 823712, skill: "CSS", learned: false},
    {id: 734823, skill: "HTML", learned: true}

];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}