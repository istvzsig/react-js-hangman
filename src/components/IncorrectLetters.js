import React from 'react';

function IncorrectLetters({ incorrectLetters }) {
  return (

    <div className="incorrect-letters-box">

      <div id="incorrect-letters">

        {incorrectLetters.length > 0 && <p>Incorrect</p>}
        
        {
          incorrectLetters
          .map( (letter, index) => <span key={ index }>{ letter }</span>)
          .reduce( (acc, curr) => acc === null
            ? [curr] : [acc, ', ', curr], null)
        }

      </div>

    </div>
  )
}


export default IncorrectLetters;