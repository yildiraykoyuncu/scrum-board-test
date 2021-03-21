import React from 'react'
import Home from './pages/home'
import { useDispatch } from 'react-redux'
import { fetchCards } from './store/actions/cardActions'


function App() {

  const dispatch = useDispatch()
  dispatch(fetchCards())

  // databaseRef.child("cards").get().then(function(snapshot) {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   }
  //   else {
  //     console.log("No data available");
  //   }
  // }).catch(function(error) {
  //   console.error(error);
  // });


  return (
   <Home />
  );
}

export default App;
