function delay(cb, waitTime) {
  let start = Date.now()
  let now = Date.now() 
  let delta = now - start

  while (delta < waitTime) {
    now = Date.now() 
    delta = now - start
  }

  cb()
}

console.log('setting timer for 5000 milliseconds')
console.log('waiting...')
delay(() => {
  console.log('ding!')
}, 5000)
