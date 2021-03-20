import { useHistory } from 'react-router';

// const BtnBack = () => {
//   const history = useHistory();

//   const goBack = () => history.goBack();

//   return <button onClick={goBack}>Back</button>;
// };

// export default BtnBack;

const BtnBack = ({ history }) => {
  return <button onClick={history.goBack}>Back</button>;
};

export default BtnBack;
