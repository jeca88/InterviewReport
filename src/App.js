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
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);


  useEffect(() => {
    const url = "http://localhost:3333/api/candidates";
    fetch(url)
      .then(response => response.json())
      .then(data => setCandidates(data));
  }, []);

  useEffect(() => {
    const url = "http://localhost:3333/api/reports";
    fetch(url)
      .then(response => response.json())
      .then(data => setReports(data));
  }, []);



  return (
    <div className="App">
      <CandidatesProvider value={candidates}>
        <ReportsProvider value={reports}>
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
