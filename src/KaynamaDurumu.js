import React, { Component } from 'react'

export class KaynamaDurumu extends Component {
    render() {
        const kaynarMi=this.props.celcius >=100;
        return (
           <p>
               Su {kaynarMi ? "kaynar":"kaynamaz"}.
           </p>
        )
    }
}

export default KaynamaDurumu;
