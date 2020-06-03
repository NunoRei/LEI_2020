import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import Profilepic from '../profile.png';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuItem from '@material-ui/core/MenuItem';

class UtenteInfo extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            editMode: true,
            outlineBox: "standard",
            Local_number: this.props.local_number,
            Number: this.props.number,
            Name: this.props.name,
            Sex: this.props.sex,
            Birth: this.props.birth.split("T")[0],
            CC_id: this.props.cc_id,
            SNS: this.props.SNS,
            Address: this.props.address,
            PostalCode: this.props.postalCode,
            Locality: this.props.locality,
            PhoneNumber: this.props.phone,
            Email: this.props.email,
            UpdateDate: this.props.updateDate,
            InsertDate: this.props.insertDate,
            Obs: this.props.obs
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.onEditCancel = this.onEditCancel.bind(this)
        this.onEditProfileClick = this.onEditProfileClick.bind(this)

    }

    onEditCancel(props)
    {
        var update = !this.state.editMode
        var box
        if (update) box = "standard"
        else box = "outlined"

        this.setState({
            editMode: update,
            outlineBox: box,
            Local_number: props.local_number,
            Number: props.number,
            Name: props.name,
            Sex: props.sex,
            Birth: props.birth,
            CC_id: props.cc_id,
            SNS: props.SNS,
            Address: props.address,
            PostalCode: props.postalCode,
            Locality: props.locality,
            PhoneNumber: props.phone,
            Email: props.email,
            UpdateDate: props.updateDate,
            InsertDate: props.insertDate,
            Obs: props.obs
        }) 
    }

    onEditProfileClick()
    {
        var update = !this.state.editMode
        var box
        if (update) box = "standard"
        else box = "outlined"

        this.setState({
            editMode: update,
            outlineBox: box
        })
    }

    onInputChange(event)
    {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h3 class="w3-center">
                    Patient's Personal Information
                </h3>
                
                <div class="w3-card-4 w3-padding-large">
                     <div class="w3-center">
                        <img 
                            src={Profilepic}
                            alt=""
                            width="100" 
                            height="110"
                            class="w3-circle"
                        />
                    </div>
                    <div class="w3-center w3-padding-large">
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload Picture
                        </Button>
                        <Button
                            variant="contained"
                            color="default"
                            onClick={() => this.onEditProfileClick()}
                            startIcon={<EditIcon />}
                        >
                            Edit Profile
                        </Button>
                    </div>
                    <Divider />
                    <div class="w3-cell-row">
                        <div class="w3-cell">
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="Local Number: " 
                                    defaultValue={this.state.Local_number} 
                                    InputProps={{
                                        readOnly: true
                                    }}
                                />
                            </p>
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="Patient Number: " 
                                    value={this.state.Number}
                                    InputProps={{
                                        readOnly: true
                                    }}
                                />
                            </p>
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="Name: " 
                                    value={this.state.Name}
                                    name="Name"
                                    onChange={this.onInputChange}
                                    variant={this.state.outlineBox} 
                                    InputProps={{
                                        readOnly: this.state.editMode
                                    }}
                                />
                            </p>
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="Sex: "
                                    select 
                                    value={this.state.Sex}
                                    name="Sex"
                                    onChange={this.onInputChange}
                                    variant={this.state.outlineBox} 
                                    InputProps={{
                                        readOnly: this.state.editMode
                                    }}
                                >
                                    {gender.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </p>
                        </div>
                        <div class="w3-cell">
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    type="date"
                                    label="Birth:" 
                                    value={this.state.Birth}
                                    name="Birth"
                                    onChange={this.onInputChange}
                                    variant={this.state.outlineBox} 
                                    InputProps={{
                                        readOnly: this.state.editMode
                                    }}
                                />
                            </p>
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="Citizen Id:" 
                                    value={this.state.CC_id}
                                    name="CC_id"
                                    onChange={this.onInputChange} 
                                    variant={this.state.outlineBox}
                                    InputProps={{
                                        readOnly: this.state.editMode
                                    }}
                                />
                            </p>    
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="SNS:" 
                                    value={this.state.SNS}
                                    name="SNS"
                                    onChange={this.onInputChange}
                                    variant={this.state.outlineBox} 
                                    InputProps={{
                                        readOnly: this.state.editMode
                                    }}
                                />
                            </p>
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="Address:" 
                                    value={this.state.Address}
                                    name="Address"
                                    onChange={this.onInputChange}
                                    variant={this.state.outlineBox} 
                                    InputProps={{
                                        readOnly: this.state.editMode
                                    }}   
                                />
                            </p>
                        </div>
                        <div class="w3-cell">
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="Postal Code:" 
                                    value={this.state.PostalCode}
                                    name="PostalCode"
                                    onChange={this.onInputChange} 
                                    variant={this.state.outlineBox} 
                                    InputProps={{
                                        readOnly: this.state.editMode
                                    }}     
                                />
                            </p>
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="Locality:" 
                                    value={this.state.Locality} 
                                    name="Locality"
                                    onChange={this.onInputChange}
                                    variant={this.state.outlineBox} 
                                    InputProps={{
                                        readOnly: this.state.editMode
                                    }} 
                                />
                            </p>
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="Phone Number:" 
                                    value={this.state.PhoneNumber}
                                    name="PhoneNumber"
                                    onChange={this.onInputChange} 
                                    variant={this.state.outlineBox} 
                                    InputProps={{
                                        readOnly: this.state.editMode
                                    }}     
                                />
                            </p>
                            <p>
                                <TextField 
                                    id="standard-read-only-input" 
                                    label="Email:" 
                                    value={this.state.Email}
                                    name="Email"
                                    onChange={this.onInputChange} 
                                    variant={this.state.outlineBox} 
                                    InputProps={{
                                        readOnly: this.state.editMode
                                    }} 
                                />
                            </p>
                        </div>
                    </div>

                    <div>
                        <TextField 
                            fullWidth
                            id="outlined-multiline-static" 
                            label="Observations:"
                            multiline
                            rows={4} 
                            value={this.state.Obs}
                            name="Obs"
                            onChange={this.onInputChange}
                            variant="outlined" 
                            InputProps={{
                                readOnly: this.state.editMode
                            }} 
                        />
                    </div>
                    {(this.state.editMode)===false &&
                        <div class="w3-padding-large">
                            <Button
                                variant="contained"
                                color="default"
                                onClick={() => 
                                {
                                    this.onEditProfileClick()
                                    this.props.onEditSave(
                                        this.state.Number,
                                        this.state.Name,
                                        this.state.Sex,
                                        this.state.Birth,
                                        this.state.CC_id,
                                        this.state.SNS,
                                        this.state.Address,
                                        this.state.PostalCode,
                                        this.state.Locality,
                                        this.state.PhoneNumber,
                                        this.state.Email,
                                        this.state.Obs
                                    )
                                }}
                                startIcon={<SaveIcon />}
                            >
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                color="default"
                                onClick={() => this.onEditCancel(this.props)}
                                startIcon={<CancelIcon />}
                            >
                                Cancel
                            </Button>
                        </div>    
                    }
                    <div class="w3-container w3-cell-row w3-center">
                        <div class="w3-cell">
                            Integrated on {this.state.InsertDate.split("T")[0]} at {(this.state.InsertDate.split("T")[1]).split(".")[0]} 
                        </div>
                        <div class="w3-cell">
                            Last Updated on {this.state.UpdateDate.split("T")[0]} at {(this.state.UpdateDate.split("T")[1]).split(".")[0]}
                        </div>
                    </div>          
                </div>
            </div>
        );
    }

}

export default UtenteInfo;

const gender = [
    {
        value: 'M',
        label: 'Male',
    },
    {
        value: 'F',
        label: 'Female'
    }
]
