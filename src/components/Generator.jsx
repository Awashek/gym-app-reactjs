import React,{useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'

function Header(props) {
  const {index, title, description} = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-4'>
          <p className='text-3xl sm:text-4xl md:text-5xl
          font-semibold text-slate-400'>{index}</p>
          <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'> {description}</p>
    </div>
  )
}

export default function Generator() {
  const [showModel, setshowModel] = useState(false)
  const [poison, setPoisen] = useState('individul')
  const [muscle, setMuscle] = useState([])
  const [goal, setGoal] = useState('strength_power')
 

  function toggelModal() {
    setshowModel(!showModel)
  } 

  function updateMuscles(muscleGroup) {
    
  }

  return (
    <SectionWrapper header={"generate your workout"} title=
      {['It\'s', 'Huge','o\'clock']}>
        <Header index={'01'} title={'Pick your poison'} 
        description={'Select the workout you wish to enroll'}/>

        <div className='grid grid-cols-2 sm:grid-cols-4
        gap-4'>
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setPoisen(type)
            }} className={`bg-slate-950 border
             py-3 rounded-lg
            duration-200 hover:border-blue-600 
            ${type === poison ? 'border-blue-600' : 'border-blue-400'}`} 
            key={typeIndex}>
              <p className='capatalize'>{type.replaceAll('_',' ')}</p>
            </button>
          )
        })}
        </div>

        <Header index={'02'} title={'Lock on targets'} 
        description={'Select the muscles judge for annihilation'}/>
        <div className='bg-slate-950 border border-solid
        border-blue-400 rounded-lg flex flex-col'>
          <button onClick={toggelModal} className='relative p-3 flex items-center
          justify-center'> 
            <p>Select muscle groups</p>
            <i className="fa-solid absolute right-3
            top-1/2 -translate-y-1/2 fa-caret-down "></i>
          </button>
          {showModel && (
            <div className='flex flex-col px-3 pb-3'>
              {(poison === 'individual' ? WORKOUTS
              [poison] : Object.keys(WORKOUTS
                [poison])).map((muscleGroup, muscleGroupIndex) => {
                    return (
                      <button onClick={() => {
                        updateMuscles
                      }} key={muscleGroupIndex}
                      className='hover:text-blue-400 duration-200'>
                        <p className='uppercase'>{muscleGroup.replaceAll('_',' ')}</p>
                      </button>
                    )
                 })}
            </div>
          )}
        </div>

        <Header index={'03'} title={'Become Juggernaut'} 
        description={'Select your ultimate objective.'}/>
        <div className='grid grid-cols-3 gap-4'>
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {
              setGoals(scheme)
            }} className={`bg-slate-950 border
             py-3 rounded-lg
            duration-200 hover:border-blue-600 
            ${scheme === goal ? 'border-blue-600' : 'border-blue-400'}`} 
            key={schemeIndex}>
              <p className='capatalize'>{scheme.replaceAll('_',' ')}</p>
            </button>
          )
        })}
        </div>
    </SectionWrapper>
  )
}