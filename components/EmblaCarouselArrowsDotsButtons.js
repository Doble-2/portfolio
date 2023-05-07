import React from 'react'

export const DotButton = (props) => {
  const { selected, onClick } = props

  return (
    <button
   
      className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
      type="button"
      onClick={onClick}
    />
  )
}

export const PrevButton = (props) => {
  const { enabled, onClick } = props

  var opacity = 1;
  if ( !enabled){
    opacity = .5;
  }

  return (
    <button
   
      className="embla__button embla__button--prev embla-arrow"
      onClick={onClick}
      disabled={!enabled}
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{opacity:opacity}}><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
    </button>
  )
}

export const NextButton = (props) => {
  const { enabled, onClick } = props
  var opacity = '1';
  if ( !enabled){
    opacity = '.5';
  }
  return (
    <button 
   
      className="embla__button embla__button--next embla-arrow"
      onClick={onClick}
      disabled={!enabled}
    >
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{opacity:opacity}}><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </button>
  )
}
