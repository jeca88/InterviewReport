import './App.css';
import React from 'react';

import { useEffect, useState } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import CandidateList from './pages/CandidateList/CandidateList';
import CandidateDetails from './pages/CandidateDetails/CandidateDetails';
import ReportList from './pages/ReportList/ReportList'
import Wizard from './pages/Wizard/Wizard'
import LogIn from './pages/LogIn/LogIn'

export const candidatesContext = React.createContext({});
export const reportsContext = React.createContext({});


const { Provider: CandidatesProvider } = candidatesContext;
const { Provider: ReportsProvider } = reportsContext;

function App() {
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [filteredReports, setFilteredReports] = useState(null);
  const [reports, setReports] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));



  useEffect(() => {
    const url = "http://localhost:3333/api/candidates";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setFilteredCandidates(data);
        setCandidates(data)
      });
  }, [candidates === null]);


  useEffect(() => {
    const url = "http://localhost:3333/api/reports";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setReports(data)
        setFilteredReports(data);
      })
  }, [reports === null]);


  return (
    <div className="App">
      <CandidatesProvider 
      value={{candidates, filteredCandidates, setFilteredCandidates}}>
        <ReportsProvider 
        value={{ reports, setReports, setFilteredReports, filteredReports, token, setToken }}>
          <Switch>
            <Route exact path="/" component={CandidateList} />
            <Route path="/candidate/:id" component={CandidateDetails} />
            <Route path="/reports" component={ReportList} />
            <Route path="/new-report" component={Wizard} />
            <Route path="/login" component={LogIn} />
          </Switch>
        </ReportsProvider>
      </CandidatesProvider>
    </div>
  );
}

export default App;
