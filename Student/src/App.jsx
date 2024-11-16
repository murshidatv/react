
import Student from './Student.jsx'
function App() {
  
  return(
    <>
      <Student name="Tom" age={35} isStudent={false}/>
      <Student name="SpongeBob" age={30} isStudent={true}/>
      <Student name="Jerry" age={20} isStudent={true}/>
      <Student/>
    </> 
  );

}

export default App
