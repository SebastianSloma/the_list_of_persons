import React from 'react';
import './App.css';

const App = () => <PersonList />;

const PersonList = () => {

  const people =[
    {
      img:21,
      name:'Johan',
      job: 'Frontend developer'
    },
    {
      img:24,
      name:'Johnatan',
      job: 'Backend developer'
    },
    {
      img:42,
      name:'Johannaten',
      job: 'DevOps'
    }
  ]

  return (
    <section>

      <Person />
      <Person />
      <Person />
    </section>
  );
};

const Person = () => {
  const url = "https://randomuser.me/api/portraits/thumb/men/75.jpg"

  return (
<div className='person'>
  <img src={url} alt=""/>
  <div>
    <h4>name</h4>
    <h4>job</h4>
  </div>

  </div>
  
  )

};


export default App;
