const totalTime = 5640;   // 94hr

const sectionProgress = [
  '00:36',  // intro
  '00:18',  // config environment
  '02:18',  // starting with development
  '06:16',  // js: fundamentals
  '01:27',  // js: controls structures
  '03:02',  // js: functions
  '03:04',  // js: object
  '02:08',  // js: array + list
  '03:40',  // node
  '03:08',  // esnext
  '02:54',  // web concepts
  '04:44',  // html
  '07:13',  // css
  '03:30',  // integration
  '01:51',  // ajax
  '02:35',  // gulp
  '01:02',  // webpack
  '03:16',  // jquery
  '02:24',  // bootstrap
  '01:08',  // gallery project
  '01:28',  // react
  '01:13',  // calculator project
  '01:48',  // crud project
  '05:10',  // registration project: nextjs + firebase
  '01:17',  // vue fundamentals
  '00:38',  // simple vue projects
  '00:49',  // vue calculator project
  '01:04',  // vue montyHall
];

function getTime() {
  let hours = 0;
  let minutes = 0;

  for (let lessonTime of sectionProgress) {
    const timeSplitted = lessonTime.split(':');
    hours += parseInt(timeSplitted[0]);
    minutes += parseInt(timeSplitted[1]);
  }

  const minutesForHours = minutes / 60;
  const completedHours = Math.floor(minutesForHours);
  hours += completedHours;
  minutes = Math.round((minutesForHours - completedHours) * 60);

  return { hours, minutes };
}


function proportion() {
  const currentProgress = getTime();
  const minutesProgress = (currentProgress.hours * 60) + currentProgress.minutes;

  const data = ((100 * minutesProgress) / totalTime).toFixed(2).replace('.', ',');
  return data;
}

const actualTime = getTime();
const percentage = proportion();

const elapsedTime = `Já foi percorrido ${actualTime.hours} horas e ${actualTime.minutes} minutos do curso`;
console.log(`${elapsedTime}, o que representa ${percentage}% do total de 94 horas.`);
