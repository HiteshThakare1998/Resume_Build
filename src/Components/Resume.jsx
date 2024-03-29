import React from 'react';
import passportImage from './../images/Passport_Size.jpg';
import './../CSS/Resume.css';


const Resume = () => {
  return (
    <>  
       <body>
           <div className='main'>
                  <div className='top-section'>
                       <img src={passportImage} alt='profile' className='profile'/>
                       <p className='p1'>Hitesh Thakare</p>
                       <p className='p2'>Software Engineer</p>
                 </div>

                 <div className='clearit'></div>
                 
                
                      <div className='col-div-1'>
                            <div className='content-box'>
                                  <div className='head-main'>
                                      <p className='head'>My Contact</p>
                                      <p className='p3'><span class="material-symbols-outlined">
                                      mail</span>hiteshthakare1@gmail.com</p>
                                      <p className='p3'><span class="material-symbols-outlined">call</span>+91 9561612697</p>
                                      <p className='p3'><span class="material-symbols-outlined">location_on</span>Airoli,Maharashtra,India</p>
                                     <p className='p3'><span class="material-symbols-outlined">calendar_month</span>Experienced</p>
                                  </div>
                  

                                 <div  className='head-main'><p className='head'>My Skills</p>
                                       <ul className='node'>
                                       <li><span className='p3'>Java</span></li>
                                      <li><span className='p3'>JavaScript</span></li>
                                      <li><span className='p3'>ReactJs</span></li>
                                     <li><span className='p3'>HTML,CSS</span></li>
                                     <li><span className='p3'>MySQL</span></li>
                                      </ul>
                                 </div> 
                         
                           
                                 <div className='head-main'><p className='head'>Personal Details</p>
                                       <ul className='node'>
                                      <li><span className='p3'>BirthDate: 23/03/1994</span></li>
                                     <li><span className='p3'>Gender: Male</span></li>
                                      <li><span className='p3'>Marital-Status: Single</span></li>
                                      <li><span className='p3'>Nationality: Indian</span></li>
                                     </ul>
                                </div>
                         

                          
                                <div className='head-main'><p className='head'>Languages</p>
                                      <ul className='node'>
                                     <li><span className='p3'>English</span></li>
                                    <li><span className='p3'>Marathi</span></li>
                                    <li><span className='p3'>Hindi</span></li>
                                    </ul>
                               </div>

                         </div>
                   </div>

                  <div className='line'></div>

                 <div className='col-div-2'>
                        <div className='content-box'>
                                <div className='head-main'>
                                          <p className='head'>Profile</p>
                                           <p className='p3' id='prof'>I am passionate software engineer with 6 months of
                                           intense training in the software development, seeking
                                          to leverage my skills and experience into IT domain as
                                          a software engineer.</p>
                                </div>

                                <div className='head-main'>
                                          <p className='head'>Experience</p>
                                <div className='sub'>
                                        <p className='heading'>Spatial Data Specialist-1(October 2019 - October 2021)</p>
                                        <p className='sub-heading'>Here Technologies</p>
                                        <p class='p-4'>Analyse and interpret situations within source inputs and
                                        compare them with the existing database. Data management
                                        also includes classification and annotation.
                                       </p>
                                </div>

                                <div className='sub'>
                                        <p className='heading'>Trainee Engineer[Q.C/Q.A]-(April 2018 - April 2019)</p>
                                        <p className='sub-heading'>ONIDA-Mirc Electronics Ltd</p>
                                        <p class='p-4'>ONIDA- Mirc Electrionics Limited. Wada, Maharashtra
                                                 Approving finished products involves confirming specifications
                                                 performing visuals and required tests in accordance with FQA
                                                 documents and ensuring all testing is to the highest standards
                                        </p>
                                </div>
                        </div>
                        
                        <div className='head-main'>
                               <p className='head'>Education</p>
                               <div className='sub'>
                                    <p className='heading'>POST GRADUATION DIPLOMA IN CDAC AIT YB CHAVAN CENTRE,Mumbai, 400021</p>
                                    <p className='educ'>September–2022 to March–2023 (70% First Class)</p>
                              </div>
                              <div className='sub'>
                                     <p className='heading'>BACHELOR OF ENGINEERING IN ELECTRONICS&TELECOMMUNICATION RAJENDRA MANE COLLEGE OF ENGINEERING & TECH</p>
                                     <p className='educ'>May 2017,University Of Mumbai ,Ratnagiri, Maharashtra</p>
                              </div>
                              <div className='sub'>
                                     <p className='heading'>HSC (12th), Science</p>
                                     <p className='educ'>Anand Laxman Chandavarkar Jr. College, Wada May 2012 ,University Of Mumbai</p>
                              </div>
                              <div className='sub'>
                                     <p className='heading'>SSC (10th Std)</p>
                                     <p className='educ'>Pandurang Javaji High School, Wada June 2010,University Of Mumbai </p>
                              </div>
                      </div>

                  </div>
                </div>
           </div>
           <div className='main2'>
           <div className='content-box'>
           
                               <div className='head' id="page2">Project</div>
                               <p className='sub-heading_main'>Milk Product Services</p>
                               <p className='proj'><span className='sub-heading2'>Period : </span> <span className='proj-sub'>February 2023 - March 2023</span></p>
                            <p className='proj'><span className='sub-heading2'>Technologies:</span> <span className='proj-sub'> J2EE, HTML, Bootstrap, ReactJs, Hibernate, Spring Boot</span></p>
                            <p className='proj'><span className='sub-heading2'>Description: </span> 
                            <span className='proj-sub'>The "Milk Product Services" project aims to address the challenges faced by consumers in accessing high-quality milk products and connecting local milkmen with potential customers. In today's market, finding the best milk products can be a challenge, as consumers often struggle to identify reliable suppliers in their locality. This project endeavors to bridge this gap by creating a platform that connects and manages local milkmen in different areas, thereby facilitating the growth of their businesses while ensuring consumers have access to premium-quality milk products.Developed a user-friendly web platform that serves as a centralized hub for consumers and local milkmen to interact, connect, and fulfill each other's needs. The platform enables seamless communication and transactions between buyers and sellers.
                           </span></p>

           </div>      
             <div className='content-box'>
                  <p className='sub-heading_main'>Power Harvesting by using Solar Panels, Dynamo Wind Mill, Piezo Electric Plates for Railway System</p>
                  <p className='proj'><span className='sub-heading2'>Period : </span> <span className='proj-sub'> January 2017 - June 2017</span></p>
                 <p className='proj'><span className='sub-heading2'>Project-Type: </span> <span className='proj-sub'>  Electronic Circuit Design</span></p>
               
              <p className='proj'><span className='sub-heading2'>Description: </span> 
              <span className='proj-sub'>I spearheaded the "Power Harvesting by using Solar Panels, Dynamo Wind Mill, Piezo Electric Plates for Railway System" project, aimed at implementing renewable energy solutions for railway systems. Through this initiative, I constructed a demo model showcasing the integration of solar panels, a dynamo windmill, and piezoelectric plates to generate electricity. Solar panels were strategically installed on the train's roof, while a small windmill was positioned between two coaches. Additionally, piezoelectric plates were placed on the platform. Leveraging energy harvested from these renewable sources, we successfully powered both the railway and platform infrastructure. This project underscores my commitment to sustainable development and innovative solutions in the transportation sector.</span></p>

            </div>  
            <div>
                <p className='head' id='page2_2'>Declaration </p>
                   <p className='proj-sub'>I hereby declare that the above written particulars are true to the best of my knowledge and belief.</p>
                   <p className='final1'>Signature: <span>___________________</span></p>
                   <p className='final2'>Hitesh Thakare</p>
              </div>                          
          </div>
        </body>
      
    </>
  )
}

export default Resume
