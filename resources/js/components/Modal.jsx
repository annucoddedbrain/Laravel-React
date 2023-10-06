import React from "react";

const Modal = ({children, show, onHide, className, ...props}) => {

    const [hideClass, setHideClass ] = useState('hide');

    const handleHide = () => {
        setHide( prev => {
            prev == "hide"
        });
    }
    
    return(
        <>
            <div className={`modal fade ${className}`} > 

            {children}



            </div>
        </>
    )

}