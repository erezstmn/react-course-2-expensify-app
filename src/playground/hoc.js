import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info Section</h1>
        <p>This is the info: {props.info}</p>
    </div>
);

const withAdminWarning = (WarppedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin && <p>private message</p>}
            <WarppedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
        {props.isAdmin ? <WrappedComponent {...props}/> : <p>Please authenticate</p>}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);
// ReactDOM.render(<AdminInfo isAdmin={false} info="test"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAdmin={true} info="test"/>, document.getElementById('app'));