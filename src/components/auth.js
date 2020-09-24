import React, { useContext } from 'react'
import { LoginContext} from '../components/context/context';
import { If } from 'react-if';

const Auth = (props) => {

  const context = useContext(LoginContext)

  let okToRender = false;
  try{
    okToRender = 
    context.loggedIn && (props.capability ? context.can(props.capability) : true);
  } catch (e) {
    console.warn('Not Authorized In');
  }

  return (
    <If condition={okToRender}>
      {props.children}
    </If>
  );

}

export default Auth;