import React from 'react'
import {MDBRow, MDBCol} from "mdb-react-ui-kit";
import './mount.css'

const MountContent = () => {
    return(
        <>
            <section>
                <div>
                    <h2 className="h1-responsive font-weight-bold text-center my-5" >
                        <p>What made us redesign the 5th wheel mounting design?</p>
                    </h2>
                    <p  className="lead w-responsive text-center mx-auto md-5">
                        Have you ever seen a 18 wheeler roll over, even at low speeds they're very aggressive.
                    </p>
                    <p  className="lead w-responsive text-center mx-auto md-5">
                        The trailer usually tips first causing a whiplash effect on the truck usually causing injury to the driver.
                        This design would prevent the truck from tipping over.
                    </p>
                    <p className="text-center" style={{fontSize: '13px', color:'white'}}>**Data Pulled from the FMCSA from 2017, 2018 and 2019**</p>
                    <MDBRow >
                        <MDBCol md="12" className="text-center">
                            <MDBRow>
                                <MDBCol size="2">
                                </MDBCol>
                                <MDBCol size="2" className="hover">
                                    <h5 className="font-weight-bold mb-3">{' '}Costs of Damages</h5>
                                    <p>
                                        In the years stated above, there has been 12,000 18 wheeler roll overs.
                                        Average cost of a truck during that time is around $120,000.
                                        Totalling to $1,440,000,000 in three years just in truck damages.
                                    </p>
                                </MDBCol>
                                <MDBCol size="1">
                                </MDBCol>
                                <MDBCol size="2" className="hover">
                                    <h5 className="font-weight-bold mb-3">{' '}Fatalities</h5>
                                    <p>
                                        In the years stated above, 330 of those roll overs had a fatality involved.
                                    </p>
                                </MDBCol>
                                <MDBCol size="1">
                                </MDBCol>
                                <MDBCol size="2" className="hover">
                                    <h5 className="font-weight-bold mb-3">{' '}Complete Loss</h5>
                                    <p>
                                        During each year between 2017 to 2019 over $1,000,000,000 were lost
                                        in damages due to 18 wheeler roll overs.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <br />
                            <br />
                            <MDBRow>
                                <MDBCol size="2">
                                </MDBCol>
                                <MDBCol size="2" className="hover2">
                                    <h5 className="font-weight-bold mb-3">{' '}Production Cost</h5>
                                    <p>
                                        The cost to produce the 5th wheel mounting design will depend on what the customer needs.
                                        $5,000 ~ $7,000 for just one side, $10,000 ~ $14,000 for both sides
                                    </p>
                                </MDBCol>
                                <MDBCol size="1">
                                </MDBCol>
                                <MDBCol size="2" className="hover2">
                                    <h5 className="font-weight-bold mb-3">{' '}Production Time</h5>
                                    <p>
                                        It would take a mechanic shop less than 10 hours, if they have the parts in inventory,
                                        to retrofit any truck made after 2016.
                                        So, this can be done on the drivers 10 or 34 hour break.
                                    </p>
                                </MDBCol>
                                <MDBCol size="1">
                                </MDBCol>
                                <MDBCol size="2" className="hover2">
                                    <h5 className="font-weight-bold mb-3">{' '}Time to release the trailer</h5>
                                    <p>
                                        Due to using the trucks pneumatics, the time to release the mechanism is a fraction of a second, estimated around 125th of a second.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </div>
            </section>

            <section className='section-2'>
                <p className='text-center'>If you're interested in viewing the 3D model of the patent, please click <a href='/contact'>here</a> to submit a request</p>
            </section>
        </>
    )
}
export default MountContent