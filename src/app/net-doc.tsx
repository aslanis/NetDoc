import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import Storage from '../modules/storage';
// import { GroupStorage } from '../modules/group-storage/components';

const NetDocContainer = styled.div
`
`
;

const NetDoc: React.FC = () => {
  return (
    <NetDocContainer>
        <Switch>
            <Route
                path="/"
                component={Storage}
                exact />
            {/* 
            <Route 
                path="/groupStorage"
                component={GroupStorage}
            />
            */}
        </Switch>
    </NetDocContainer>
  );
};



export default NetDoc;