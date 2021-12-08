import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import Storage from '../modules/storage';
import Profile from '../modules/profile';
import Header from '../modules/header';
// import { GroupStorage } from '../modules/group-storage/components';

const NetDocContainer = styled.div
`
`
;

// const NetDocHeader: React.FC = () => {
//     return (
//         <NetDocContainer>
//             <Switch>
//                 <Route
//                     path="/profile"
//                     component={Header}
//                     exact />
//             </Switch>
//         </NetDocContainer>
//     );
// };

const NetDoc: React.FC = () => {
  return (
    <NetDocContainer>
        <Switch>
            <Route
                path="/"
                component={Storage}
                exact />
            <Route
                path="/profile"
                component={Profile}
            />
        </Switch>
    </NetDocContainer>
  );
};


export default NetDoc;