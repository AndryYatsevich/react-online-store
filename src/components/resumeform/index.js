import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ResumeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            open: false,
            disabled: true,
            experience: "",
            email: ""
        };
    }

    handleChange = (event, index, value) => {
        console.log(this.state.value);

        return this.setState({value})
    };

    handleChangeTextField  (event)  {
        let id = event.target.id;

        let value = event.target.value;
        if(id === "experience"){
            this.setState({
                experience: value
            });
        } else {
            this.setState({
                email: value
            });
        }
        if(this.state.experience && this.state.email && this.state.value !== 0){
            this.setState({
                disabled: false
            });
        } else {
            this.setState({
                disabled: true
            });
        }

 console.log(this.state);
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        let i = 0;

        return (
            <div>
                <div><h1>Apply today!</h1></div>
                <div>
                    <form>
                        <div><SelectField
                            floatingLabelText="Choose vacancy"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                           {this.props.vacancies.map((el) => {

                                i++;
                                return <MenuItem value={i} primaryText={el.name}/>
                            })}

                        </SelectField></div>
                        <div>
                            <TextField
                                hintText="text..."
                                floatingLabelText="Describe your work experience"
                                multiLine={true}
                                rows={2}
                                id={"experience"}
                                onChange={this.handleChangeTextField.bind(this)}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="example@mail.com"
                                floatingLabelText="Email"
                                id={"mail"}
                                onChange={this.handleChangeTextField.bind(this)}
                            />
                        </div>
                        <div><RaisedButton label="Send" primary={true} onClick={this.handleOpen} disabled={this.state.disabled}/>
                            <Dialog
                                title="Data received"
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}

                            >
                                Thank you! Your resume has been sent.
                            </Dialog>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default ResumeForm;