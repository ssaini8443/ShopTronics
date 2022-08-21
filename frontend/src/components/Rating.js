import React from 'react'

const Rating = ({value,text,color}) => {
  return (
    <div className='raitng'>
        <span>
            <i style={{color:color}} className={value >= 1 ? 'fa-solid fa-star': value>=0.5 ? 'fa-solid fa-star-half' :  'fa-regular fa-star'}></i>
        </span>
        <span>
            <i style={{color:color}} className={value >= 2 ? 'fa-solid fa-star': value>=1.5 ? 'fa-solid fa-star-half' :  'fa-regular fa-star'}></i>
        </span>
        <span>
            <i style={{color:color}} className={value >= 3 ? 'fa-solid fa-star': value>=2.5 ? 'fa-solid fa-star-half' :  'fa-regular fa-star'}></i>
        </span>
        <span>
            <i style={{color:color}} className={value >= 4 ? 'fa-solid fa-star': value>=3.5 ? 'fa-solid fa-star-half' :  'fa-regular fa-star'}></i>
        </span>
        <span>
            <i style={{color:color}} className={value >=5 ? 'fa-solid fa-star': value>=4.5 ? 'fa-solid fa-star-half' :  'fa-regular fa-star'}></i>
        </span>
        
        <span className='p-2 h6'>{text}</span>
    </div>
  )
}


Rating.defaultProps = {
    color:'#ffc107'
}

export default Rating