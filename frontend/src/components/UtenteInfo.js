import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import Profilepic from '../profile.png';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';

class UtenteInfo extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            editMode: false,
        }
    }

    render() {
        return (
            <div>
                <h3 class="w3-center">
                    Patient's Personal Information
                </h3>
                
                <div class="w3-card-4 w3-padding-large w3-light-gray">
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
                            startIcon={<EditIcon />}
                        >
                            Edit Profile
                        </Button>
                    </div>
                    <Divider />
                    <div class="w3-cell-row">
                        <div class="w3-cell">
                            <p>
                                <b>Local Number: </b>
                                <TextField 
                                disabled 
                                id="standard-disabled" 
                                label="" 
                                defaultValue={this.props.local_number} 
                                size="small"    
                                />
                            </p>
                            <p>
                                <b>Patient Number: </b>
                                <TextField 
                                    disabled ={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.number} 
                                    size="small"
                                />
                            </p>
                            <p>
                                <b>Name: </b>
                                <TextField 
                                    disabled={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.name} 
                                    size="small"
                                />
                            </p>
                            <p>
                                <b>Sex: </b>
                                <TextField 
                                    disabled={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.sex} 
                                    size="small"
                                />
                            </p>
                            <p>
                                <b>Birth: </b>
                                <TextField 
                                    disabled={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.birth} 
                                    size="small"
                                />
                            </p>
                            <p>
                                <b>Citizen Id: </b>
                                <TextField 
                                    disabled={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.cc_id} 
                                    size="small"
                                />
                            </p>
                            <p>
                                <b>SNS: </b>
                                <TextField 
                                    disabled={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.SNS} 
                                    size="small"
                                />
                            </p>
                        </div>
                        <div class="w3-cell">
                            <p>
                                <b>Address: </b>
                                <TextField 
                                    disabled={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.address} 
                                    size="small"   
                                />
                            </p>
                            <p>
                                <b>Postal Code: </b>
                                <TextField 
                                    disabled={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.postalCode} 
                                    size="small"    
                                />
                            </p>
                            <p>
                                <b>Locality: </b>
                                <TextField 
                                    disabled={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.locality} 
                                    size="small"
                                />
                            </p>
                            <p>
                                <b>Phone Number: </b>
                                <TextField 
                                    disabled={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.phone} 
                                    size="small"    
                                />
                            </p>
                            <p>
                                <b>Email: </b>
                                <TextField 
                                    disabled={this.state.editMode}
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.email} 
                                    size="small"
                                />
                            </p>
                            <p>
                                <b>Last Updated on: </b>
                                <TextField 
                                    disabled 
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.updateDate} 
                                    size="small"
                                />
                            </p>
                            <p>
                                <b>Integrated on: </b>
                                <TextField 
                                    disabled 
                                    id="standard-disabled" 
                                    label="" 
                                    defaultValue={this.props.insertDate} 
                                    size="small"
                                />
                            </p>
                        </div>
                    </div>
                    <p><b>Observations: </b><TextField disabled id="standard-disabled" label="" defaultValue={this.props.obs} /></p>
                
                </div>
            </div>
        );
    }


}

export default UtenteInfo;