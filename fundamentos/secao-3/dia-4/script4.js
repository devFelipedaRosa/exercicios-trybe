const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

//   const obtainkeyValue = (object, index) => Object.values(object)[index];
  

//   console.log(obtainkeyValue(school, 0));

// const sumStudents = (object) => {
//     let count = 0
//     for (let index = 0; index < object.lessons.length; index+=1) {
//         count += object.lessons[index].students;
        
//     }
//     return count;
// }
// console.log(sumStudents(school));

// const verifyKey = (object, key) => {

//     for (let index = 0; index < object.lessons.length; index += 1) {
  
//       if (object.lessons[index][key] === undefined) {
  
//         return false;
  
//       }
  
//     }
  
//     return true;
  
//   }
  
  
//   console.log(verifyKey(school, 'professor')); 

const changeKey = (obj, course, value) => {
    let findCourse;
    for (let index = 0; index < obj.lessons.length; index += 1) {
      let element = obj.lessons[index];
      if (element.course === course) {
        findCourse = element;
        break;
      }
    }
  
    if (findCourse !== undefined) {
      findCourse.shift = value;
      return findCourse;
    } else {
      return 'Curso não encontrado.';
    }
  };
  
  console.log(changeKey(school, 'Python', 'Noite'));