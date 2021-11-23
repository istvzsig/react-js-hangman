export async function loadWords() {
  const allWords = [];

  let words = await fetch('hangman_words.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
    )
  return await words.json()
    .then(data => {
      return data
    })
}


export function showNotification( setter ) {
  setter(true);
  setTimeout( () => setter(false) , 2000)
}

export function checkWin(correct, incorrect, word) {
  let status = 'win';

  // check if win
  word.split('').forEach(letter => {
    if(!correct.includes(letter)) {
      status = '';
    }
  });

  // check if loss
  if(incorrect.length === 6) {
    status = 'lose';
  }

  return status;
}