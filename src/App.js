import logo from './logo.svg';
import './App.css';

import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

import {  API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { listMainTables } from './graphql/queries';



 
function App() {
  const [tables,setTables] = useState([{"id":"1"}]);
  useEffect(()=>{
    API.graphql({query:listMainTables}).then(
      (data)=>{
        console.log(data);
        setTables(data.data.listMainTables.items);
      }
    ).catch(
      (err)=>{
        console.log(err)
      }
    )
  },[]);
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level="1">We now have Auth!</Heading>

      </Card>

    <div>
      <h2>Temp Value</h2>
      {tables.map((item)=>(
        <h1 key={item.id}>{item.id}</h1>
      ))}

    </div>
    </View>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> Hello from Amplify Learning</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/