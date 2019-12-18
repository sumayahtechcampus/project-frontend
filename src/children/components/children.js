import React from 'react';
import profile from './profile.png'

class Children extends React.Component {
  

  render() {
    return (
      <div>
        <div className="container">
 <div className="row">
 <div className="col-12">
 <div className="card">
    
 <div class="card-body">
                         <div className="card-title mb-4">
                             <div className="d-flex justify-content-start">
                                 <div >
                                     <img src={profile} width="150px" height="150"/>
                                    
                                 </div>
                                 <div className="userData ml-5">
                                   <br /> 
                                   <br /> 
                                     <h2 className="d-block">{this.props.name}</h2>
                                
                                 </div>
                                <div className="ml-auto">
                                     <input type="button" className="btn btn-primary d-none" id="btnDiscard" value="Discard Changes" />
                                 </div>
                             </div>
                        </div>


                                       


                                         <div className="row">
                                             <div className="col-sm-3 col-md-2 col-5">
                                                 <label font-weight="bold">Age : </label>
                                             </div>
                                             <div className="col-md-8 col-6">
                                             {this.props.age}
                                             </div>
                                        </div>


                                             <div className="row">
                                             <div className="col-sm-3 col-md-2 col-5">
                                                 <label font-weight="bold">interest : </label>
                                             </div>
                                             <div className="col-md-8 col-6">
                                            {this.props.interest}
                                             </div>
                                        </div>


                                         <div className="row">
                                             <div className="col-sm-3 col-md-2 col-5">
                                                <label font-weight="bold">School : </label>
                                            </div>
                                            <div className="col-md-8 col-6">
                                            {this.props.school}
                                             </div>
                                       </div> 
                                       <div className="row">
                                           <div className="col-sm-3 col-md-2 col-5">
                                                <label font-weight="bold">Allergy : </label>
                                           </div>
                                            <div className="col-md-8 col-6">
                                            {this.props.allergy}                                          
                                            </div>
                                     </div> 


      </div>
      </div>
      </div>
      </div>

   </div> 
      
      </div>
    );
  }
}

export default Children;






//<div>
      //   <h2>{this.props.name}</h2>
      //   <sub>{this.props.age}</sub>
      //   <p>{this.props.interest}</p>
      //   <p> {this.props.school}</p>
      //  <p> {this.props.allergy} </p>
      
      // </div>
  