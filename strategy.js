let Element = {
  // из этих символов состоит строка glass
  EMPTY: ' ', // так выглядит свободное место в стакане
  BUSY: '*' // а тут уже занято
}

const DO_NOT_ROTATE = 0 // не вращать фигурку
const ROTATE_90_CLOCKWISE = 1 // повернуть по часовой стрелке один раз
const ROTATE_180_CLOCKWISE = 2 // повернуть по часовой стрелке два раза
const ROTATE_90_COUNTERCLOCKWISE = 3 // повернуть против часовой стрелки 1 раз (3 по часовой)

// метод, говорящий что делать той или иной фигурке figure с координарами x,y в стакане glass. next - очередь следущих фигурок
let answer = (figure, x, y, glass, next) => {
  // add "drop" to response when you need to drop a figure
  // for details please check http://codenjoy.com/portal/?p=170#commands
  return `left=${0}, right=${0}, rotate=${DO_NOT_ROTATE}, drop`
}

module.exports = answer
