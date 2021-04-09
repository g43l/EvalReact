import React, {Fragment} from 'react';
import Switch from '@material-ui/core/Switch';



function ToggleQuestion ({objectQuestion})  {

    const [state, setState] = React.useState({
        checkedA: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return(
        <Fragment>
            <h2>
                <label className="switch" >
                    Vrai/Faux? : {objectQuestion.question}
                </label>
            </h2>
            <input  type="hidden" value={state.checkedA} name={objectQuestion.answer.name}/>
            <br/>
            <Switch
                checked={state.checkedA}
                onChange={handleChange}
                color="primary"
                name="checkedA"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </Fragment>
    );
}

export default ToggleQuestion