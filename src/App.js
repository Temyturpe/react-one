function App() {
 const abouts = [
  {
    name: 'Temtiope', 
    about: 'my name is Temtiope and im a frontend developer',
    location: 'lagos'
  },
  {
    name: 'Victor', 
    about: 'my name is Victor and im a frontend developer',
    location: 'delta'
  },
  {
    name: 'Richard', 
    about: 'my name is Richard and im a frontend developer',
    location: 'lagos'
  },
  {
    name: 'Kayode', 
    about: 'my name is Kayode and im a frontend developer',
    location: 'lagos'
  } ,
  ]


  return (
    <div className="App">
      {abouts.map((about) => <About abouts={about} key={about.name}/>)}

      {/* <About name='Richard' about='my name is richard and im a frontend developer'/>
      <About name='Kayode' about='my name is Kayode and im a frontend developer'/>
      <About name='Victor' about='my name is Victor and im a frontend developer'/> */}
      {/* <About />
      <About />
      <About /> */}
      
      {/* <div className="temi">
        <h2>my name is temitope</h2>
        <p><About /></p>
      </div>

      <div className="victor">
         <h2>my name is Victor</h2>
         <p>tekfdljkfdvjghsdjguozfjk;'lhlkgzsfhjskljkfldhkskfjl</p>
      </div> */}
    </div>
  );
}
function About(props){
  console.log(props);
  return(
   <div>
     <h2>my name is {props.abouts.name}</h2>
     <p>{props.abouts.about}</p>
     <p>{props.abouts.location}</p>
   </div>
  )
}
export default App;
