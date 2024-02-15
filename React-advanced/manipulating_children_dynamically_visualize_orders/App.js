import React from "react";

const Row = ({children, spacing}) => {
    const childStyle = {
        marginLeft: `${spacing}px`,
    };
    return(
        // <div className="row">
        //     {children}
        // </div>
        
        <div className="row">
            {React.Children.map(children,(child,index) => {
                return React.cloneElement(child,{
                    style:{
                        ...child.props.style,
                        ...(index>0?childStyle:{})
                    }
                });
            })}
        </div>
    )
}

function LiveOrders(){
    return(
        <div className="App">
            <Row spacing={32}>
                <span>Pizza</span>
                <span>2</span>
                <span>305</span>
                <span>10:30</span>
                <span>John</span>
            </Row>
        </div>
    )
}

export default LiveOrders;