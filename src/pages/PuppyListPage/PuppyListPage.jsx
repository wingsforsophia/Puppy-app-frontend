import React from 'react'
import './PuppyListPage.css'

const PuppyListPage = (props) => {
    return ( 
        <>
            <h1>Puppy List</h1>
            <div className='PuppyListPage-grid'>
            {props.puppies.map(puppy =>
            <div>
                <li>Puppy Name: {puppy.name}</li>
                <li>Breed: {puppy.breed}</li>
                <li>Age: {puppy.age}</li>
            </div>
        )}
      </div>
        </>
     );
}
 
export default PuppyListPage;