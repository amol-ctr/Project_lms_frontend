import React, { useState } from 'react'
import { physicsQuestions } from './data/physics_pyq'

function Physics_interface() {

    return (

        <div>
            <h1 className=' text-center mt-4 font-bold text-2xl'>Physics Previous Year Questions</h1>

            <ul className='text-2xl mt-12 ml-96'>
                {physicsQuestions.map((question) => (
                    <li className=' mt-4 font-semibold' key={question.id}>
                        <div>
                            <div className=''>Q{question.id}. {question.question}</div>
                            <div className=' ml-8'>
                                <ul style={{listStyleType: "circle"}}>
                                    <li>{question.options[0]}</li>
                                    <li>{question.options[1]}</li>
                                    <li>{question.options[2]}</li>
                                    <li>{question.options[3]}</li>
                                </ul>
                            </div>
                            <div className=' font-bold'>Correct Answer: {question.options[question.correctAnswer]}</div>
                        </div>
                    </li>))
                }
            </ul>
        </div>
    )
}

export default Physics_interface