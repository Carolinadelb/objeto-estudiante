
const michelle = {
    name: 'Michelle',
    points: 2000,
    isActive: true,
    courses: ['Intro JS', 'JS avanzado', 'JS master']
  };
  
  const alexandra = {
    name: 'Alexandra',
    points: 4100,
    isActive: true,
    courses: ['Intro JS', 'Intro UX', 'UX master']
  };
  
  const andrea = {
    name: 'Andrea',
    points: 800,
    isActive: false,
    courses: ['Intro JS', 'JS avanzado']
  };
  
  const students = [michelle, alexandra, andrea];

  for (var i = 0; i < students.length; i++){
      //VER NOMBRE DE ESTUDIANTES ACTIVAS EN CONSOLA
    if (students[i].isActive)  {
        console.log(students[i].name);
    }
    
  }

  var total = 0;

  for (var i = 0; i <students.length; i++){
    total+= students[i].points;  
    //VER TOTAL DE TODOS LOS PUNTOS DE LAS ESTUDIANTES:
    console.log(total);
    /* SOLO PARA VER LOS PUNTOS COMO 2000, 4100, 800
    console.log(students[i].points); */
  }
//nombre de estudiantes que han llevado curso

for (var i = 0; i<students.length; i++){
    //hacemos otro for para iterar en cursos:
    var studentCourses = students[i].courses;
    //sale todos los cursos de las estudiantes
    for (var j = 0; j < studentCourses.length; j++){
        // para que solo sea 'js avanzado':
        if (studentCourses[j] === 'JS avanzado'){
            console.log(students[i].name);
        }
    }
}
