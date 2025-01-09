// eslint-disable-next-line react/prop-types
const OpenLink = ({redirectURL,LogoImage}) =>{
    return(
        <div>
                        
                        
                <a href={redirectURL} >
                    <img  width="300" height="200"  src={LogoImage} className="Logo" alt="Vite logo" />
                </a>
        </div>
    );
};

export default OpenLink;