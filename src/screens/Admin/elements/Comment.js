import React from 'react'
/*import base from 'base'*/

const Comment = (props) => {
    return (
  <div>      
  <div className="row">
	    <div className="col-lg-12">  
		
	     <div className="box">
		  <form>
		   <textarea className="form-control no-border" rows="3" placeholder="Digite seu texto aqui..."></textarea>
		   </form>
		   <div className="box-footer clearfix">
		   <button className="kafe-btn kafe-btn-mint-small pull-right btn-sm">Criar Post</button>
		   <ul className="nav nav-pills nav-sm">
		   <li className="nav-item"><a className="nav-link" href="/#"><i className="fa fa-camera text-muted"></i></a></li>
		   <li className="nav-item"><a className="nav-link" href="/#"><i className="fa fa-video text-muted"></i></a></li>
		   </ul>
		   </div>
		   </div>	 
		</div>
	   </div>
 </div>
    )
}
export default Comment
