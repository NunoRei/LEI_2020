import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';

export default class UtenteSearch extends Component {
  
  constructor(props) 
  {
    super(props)
        this.state = {

        }
  }
 
  render() {
    return(
        <div class="w3-padding-large">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container maxWidth="xs" className="w3-center"> 
                  <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRn2Qmjp4P68VdW8M_Xg4woKyVaEbB79jjo-feX-5clPHGTgLtDaHeNTnD8r9ZalukRmal_S3HT7EX3KickwdtdmHc5DuSvkTds6JjOGsIB68BMnFuAwTra7m35Xlm9R18Wyu85HAG1W_R1RpVbVxOB8UiYM_j8Srykktti6T43gZ6Ri72y6OHv93P9wNPVMmOO5VJqjf85I7qit1Igfdl-yMXoih1uFngaQyz58ChcElD7mH9vV5rBdNOqrJJhhUTf6AbExETGTIT_Rt7K3c53HUsqwmFPlcvqr_j09PUNiMc3xTctrkqTKduFp9yVYdOgyx2BdSYxRBNYigFAIlNLs2GIaorGQO0EyXPqIpqko_ZhUm76y9lxxpfqCBN10g8COIGODvLQ6C31WjSPe59TLd4MJCvuwxeR0rTvpSGLCo7xfwzZvCJOV4o&usqp=CAU"
                        alt=""
                        width="170" 
                        height="180"
                  />
                  <input 
                    class="w3-input w3-center" 
                    style={{width: '100%'}}
                    type="text"
                    value={this.props.inputNumber}
                    name="inputNumber"
                    placeholder="Patient Number"
                    onChange={this.props.handleChange}
                  />
                  <button class="w3-btn  w3-round-xxlarge w3-no-hover w3-no-border"  onClick={() => this.props.handleOnSubmit()}><SearchIcon/></button> 
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
      );
  }

}

/*<div class="w3-padding-large">
            <div class="w3-container w3-row w3-content">
                      
                      <input 
                        class="w3-large w3-center" 
                        style={{width: '93%'}}
                        type="text"
                        value={this.state.inputNumber}
                        name="inputNumber"
                        placeholder="Patient Number"
                        onChange={this.handleChange}
                      />
                      <button class="w3-btn  w3-round-xxlarge w3-no-hover w3-no-border"  onClick={() => this.handleOnSubmit()}><SearchIcon/></button> 
            </div>
*/