import Footer from '../components/footer';
import Navbar from '../components/navbar';
import './hire-a-designer.css'


const HireADesigner = () => {
    return ( 

        <>
        <Navbar/>
      <div className='hire-a-designer'>
                <div className="resources-hero">
                    <h2>Post Collaboration Request/Proposal</h2>
                </div>
            <div className="container">
                <form>
                    <h4 className="mb-2">Contact Information</h4>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 mb-4">
                            <label htmlFor="name" className="form-label label-title">Name:</label> <br />
                            <input type="text" className="form-control" name="name" required />
                        </div>
                        <div className="col-md-6 col-sm-12 mb-4">
                            <label htmlFor="email" className="form-label label-title">Email Address:</label> <br />
                            <input type="email" className="form-control" name="email" required />
                        </div>
                        <div className="col-md-6 col-sm-12 mb-4">
                            <label htmlFor="phone" className="form-label label-title">Phone Number:</label> <br />
                            <input type="tel" className="form-control" name="phone" required />
                        </div>
                        <div className="col-md-6 col-sm-12 mb-4">
                            <label htmlFor="company" className="form-label label-title">Company(optional):</label> <br />
                            <input type="text" className="form-control" name="company" />
                        </div>
                    </div>
                    <h4 style={{ paddingTop: '40px' }}>Project Details</h4>
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <label htmlFor="p-title" className="form-label label-title">Project Title:</label><br />
                            <input type="text" className="form-control" name="p-title" required />
                        </div>
                        <div className="col-md-12 mb-4">
                            <label htmlFor="p-description" className="form-label label-title">Project Description:</label><br />
                            <textarea className="form-control mb-4" col-50 row-7 name="skills"></textarea>
                        </div>
                    </div>
                    <h4 style={{ paddingTop: '40px' }}>Desired Collaboration Role:</h4>
                    <div className="role mb-4" >
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="role" id="graphic" value="graphic" />
                            <label className="form-check-label" htmlFor="graphic">
                                Graphic Designer
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="role" id="web" value="web" />
                            <label className="form-check-label" htmlFor="web">
                                Web Designer
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="role" id="marketing" value="marketing" />
                            <label className="form-check-label" htmlFor="marketing">
                                Marketing Specialist
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="role" id="other" value="other" />
                            <label className="form-check-label" htmlFor="other">
                                Other
                            </label>
                        </div>
                    </div>
                    <h4 style={{ paddingTop: '40px' }}>Timeline</h4>
                    <div className="timeline mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="timeline" id="urgent" value="urgent" />
                            <label className="form-check-label" htmlFor="urgent">
                                Urgent (1-2 weeks)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="timeline" id="moderate" value="moderate" />
                            <label className="form-check-label" htmlFor="moderate">
                                Moderate (2-4 weeks)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="timeline" id="flexible" value="flexible" />
                            <label className="form-check-label" htmlFor="flexible">
                                Flexible (4+ weeks)
                            </label>
                        </div>
                    </div>
                    <label htmlFor="budget" className="label-title form-label">Budget</label><br />
                    <input type="text" name="budget" className="form-control" />
                    <h4 style={{ paddingTop: '40px' }}>Additional Information:</h4>
                    <label htmlFor="objectives" className="form-label label-title">Brief overview of project goals/objectives:</label><br />
                    <textarea className="form-control mb-4" col-50 row-7 name="skills"></textarea>
                    <label htmlFor="skills" className="form-label label-title">Specific skills/expertise required:</label><br />
                    <textarea className="form-control mb-4" col-50 row-7 name="skills"></textarea>
                    <label htmlFor="attachment" className="form-label label-title">Any attachment or reference material:</label><br />
                    <input type="file" name="attachment" id="attachment" className="mb-4" /><br /><br />
                    <button type="submit">Submit Proposal</button>
                </form>
            </div>
        
          </div>
     
        <Footer/>
        </>
     );
}
 
export default HireADesigner;