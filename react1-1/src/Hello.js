import React from "react";
class Hello extends React.Componet {
    render() {
        return <div>Hello {this.props.toWhat}</div>
    }
}

//const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<Hello toWhat="World"/>)
export default Hello;