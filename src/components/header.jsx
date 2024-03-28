import "../styles/header.css"

function Header({handleDisplayCv, handleEditCv}){
  
  return(
    <div className="header">
      <div className="head1">
        <h1 className="fsize1 bold">CV Creator</h1>
        <div className="fsize3 lightBold">Made by <span>Agent-52</span></div>
      </div>
      <div className="head2 fsize3 lightBold">
        <div onClick={handleEditCv} className="pointer">Edit Cv</div>
        <div onClick={handleDisplayCv} className="pointer">Preview CV</div>
        <div className="example lightBold">Fill Example CV</div>
      </div>
    </div>
  )
}

export {Header}