const click = () => console.log('click')
const bang = () => console.log('BANG!')
let action = click
if (Math.random() < 1/6) {
  action = bang
}
action()
