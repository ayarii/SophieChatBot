import React from 'react'

function UsersManagement() {
    return (
        <div>
            
      {/* Teachers details start*/}
<section className="grey_section section_gap" id="teachers">
  <div className="container">
    <div className="heading">
      <h1><span>Users </span>Management</h1>
      
    </div>
    <ul className="hover_listing row"> {/* Teacher 01 details start*/}
      <li className="col-xs-12 col-sm-6 col-md-3 col-lg-3 noPadd">
        <div className="img"><img src="../images/teachers/teacher1.jpg" alt="teacher1" />
        </div>
        <h3 className="uppercase">ANA DOE</h3>
        <p>tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien </p>
      </li>
      {/* Teacher 01 details end*/} 
      {/* Teacher 02 details start*/}
      <li className="col-xs-12 col-sm-6 col-md-3 col-lg-3 noPadd">
        <div className="img"><img src="../images/teachers/teacher2.jpg" alt="teacher2" />
          <ul className="hover-social-icons">
            
          </ul>
        </div>
        <h3 className="uppercase">Johnathan DOE</h3>
        <p>tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien </p>
      </li>
      {/* Teacher 02 details end*/} {/* Teacher 03 details start*/}
      <li className="col-xs-12 col-sm-6 col-md-3 col-lg-3 noPadd">
        <div className="img"><img src="../images/teachers/teacher3.jpg" alt="teacher3" />
          <ul className="hover-social-icons">
           
          </ul>
        </div>
        <h3 className="uppercase">Lisa Brown</h3>
        <p>tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien </p>
      </li>
      {/* Teacher 03 details end*/} 
      {/* Teacher 04 details start*/}
      <li className="col-xs-12 col-sm-6 col-md-3 col-lg-3 noPadd">
        <div className="img"><img src="../images/teachers/teacher4.jpg" alt="teacher4" />
          <ul className="hover-social-icons">
            
          </ul>
        </div>
        <h3 className="uppercase">Peter Mitchlle</h3>
        <p>tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien </p>
      </li>
      {/* Teacher 04 details end*/}
    </ul>
  </div>
</section>
{/* Teachers details end*/}





        </div>
    )
}

export default UsersManagement
