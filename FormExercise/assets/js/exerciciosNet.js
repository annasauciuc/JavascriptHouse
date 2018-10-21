var tasks = [{
        'name': 'Write for Envato Tuts+',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on Duolingo',
        'duration': 240
    }
];
// var task_name = [];
// for (let i = 0; i < tasks.length; i++) {
//     task_name.push(tasks[i].name);

// }
//console.log('task_name :', task_name);


// var task_name = [];
// tasks.forEach(function(task) {
//     return task.names.push(task_name);
// })

// var task_names = tasks.map(function(task, index, array) {
//     return task.name;
// })

var task_names = tasks.map((task) => task.name);
console.log('task_names :', task_names);