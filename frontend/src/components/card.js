import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function MediaCard(props){


  return (
    <div class="card" >
        <h3>{props.name}</h3>
        {props.text.map(frase =>(<p>{frase}</p>))}
        <p style={{textAlign: 'center'}}>
          <a href={props.ligacoes[0]}>
            <GitHubIcon />
          </a>
          <a href={props.ligacoes[1]}>
            <LinkedInIcon />
          </a>
        </p>
    </div>
  );
}
