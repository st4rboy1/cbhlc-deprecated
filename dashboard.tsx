import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] m-0 p-0 bg-[#eef2f5] text-[#333]">
      <div className="flex min-h-screen">
        <div className="w-[280px] bg-[#2c3e50] text-[#ecf0f1] shadow-[2px_0_10px_rgba(0,0,0,0.15)] py-[20px] flex flex-col justify-between">
          <div>
            <div className="text-center pt-[10px] pb-[30px]">
              <img src="ra_2022-06-19_22-17-45.jpg" alt="CBHLC Logo" className="w-[120px] h-auto rounded-full border-[3px] border-[#3498db]" />
            </div>
            <ul className="list-none p-0 m-0">
              <li className="flex items-center py-[15px] px-[25px] my-[5px] mx-[15px] rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out active hover:bg-[#34495e] hover:text-white bg-[#34495e] text-white shadow-[0_4px_6px_rgba(0,0,0,0.2)] scale-[1.03]" id="dashboardBtn">
                <i className="fas fa-chart-line mr-[20px] text-[1.3rem] text-[#bdc3c7] transition-colors duration-300 ease-in-out text-[#3498db]"></i>
                <span className="font-medium">DASHBOARD</span>
              </li>
              <li className="flex items-center py-[15px] px-[25px] my-[5px] mx-[15px] rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#34495e] hover:text-white" id="enrollmentBtn">
                <i className="fas fa-user-plus mr-[20px] text-[1.3rem] text-[#bdc3c7] transition-colors duration-300 ease-in-out"></i>
                <span className="font-medium">ENROLLMENT</span>
              </li>
              <li className="flex items-center py-[15px] px-[25px] my-[5px] mx-[15px] rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out has-dropdown hover:bg-[#34495e] hover:text-white" id="billingBtn">
                <div className="nav-link">
                  <i className="fas fa-file-invoice mr-[20px] text-[1.3rem] text-[#bdc3c7] transition-colors duration-300 ease-in-out"></i>
                  <span className="font-medium">BILLING</span>
                  <i className="fas fa-chevron-down arrow" style={{ marginLeft: '55px' }}></i>
                </div>
                <ul className="dropdown hidden">
                  <li>Tuition Fee</li>

                  <li>Generate Invoice</li>
                </ul>
              </li>

              <li className="flex items-center py-[15px] px-[25px] my-[5px] mx-[15px] rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#34495e] hover:text-white" id="studRepBtn">
                <i className="fas fa-book mr-[20px] text-[1.3rem] text-[#bdc3c7] transition-colors duration-300 ease-in-out"></i>
                <span className="font-medium">STUDENT REPORT</span>
              </li>
              <li className="flex items-center py-[15px] px-[25px] my-[5px] mx-[15px] rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out has-dropdown hover:bg-[#34495e] hover:text-white" id="registrarBtn">
                <div className="nav-link">
                  <i className="fas fa-building mr-[20px] text-[1.3rem] text-[#bdc3c7] transition-colors duration-300 ease-in-out"></i>
                  <span className="font-medium">REGISTRAR</span>
                  <i className="fas fa-chevron-down arrow" style={{ marginLeft: '30px' }}></i>
                </div>
                <ul className="dropdown hidden">
                  <li>Student Records</li>
                  <li>Enrollment List</li>
                  <li>Clearances</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-auto w-[280px]">
            <li className="flex items-center py-[15px] px-[25px] my-[5px] mx-[15px] rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#34495e] hover:text-white bg-[#f5f5f5] text-[#000000] rounded-[8px] hover:bg-[#c0392b]" id="logoutBtn">
              <i className="fas fa-sign-out-alt mr-[20px] text-[1.3rem] text-[#bdc3c7] transition-colors duration-300 ease-in-out"></i>
              <span className="font-medium">LOGOUT</span>
            </li>
          </div>
        </div>

        <div className="flex-grow py-[30px] px-[50px] flex flex-col">
          <div className="flex justify-between items-center py-[15px] border-b-[2px] border-b-[#ddd] mb-[20px] relative">
            <h1 className="m-0 text-[2rem] text-[#2c3e50]" id="pageTitle">DASHBOARD</h1>
            <div className="flex items-center relative">
              <button className="bg-none border-none cursor-pointer text-[1.5rem] ml-[15px] text-[#95a5a6] transition-colors duration-300 relative hover:text-[#34495e]" id="openModal">
                <i className="fas fa-bell" style={{ color: 'gray' }}></i>
                <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-[0.7rem] py-[2px] px-[6px] rounded-full">3</span>
              </button>
              <span className="mr-[20px] font-medium text-[#555]">Welcome, Bronny!</span>     
              <button className="bg-none border-none cursor-pointer text-[1.5rem] ml-[15px] text-[#95a5a6] transition-colors duration-300 relative"><i className="fas fa-user-circle"></i></button>

              {/* Notification Dropdown */}
              <div className="hidden absolute top-[50px] right-0 w-[350px] bg-white rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-[15px] z-[1000]">
                <h3 className="mb-[10px] text-[1.2rem] text-[#2c3e50] border-b border-b-[#ddd] pb-[8px]">Notifications</h3>
                <div className="flex items-start my-[12px] pb-[12px] border-b border-b-[#f0f0f0] new">
                  <img className="w-[40px] h-[40px] rounded-full flex-shrink-0 mr-[12px]" src="ra_2022-06-19_22-17-45.jpg" alt="User" />
                  <div className="flex-1 text-[0.9rem] text-[#333]">
                    <strong className="text-[#2c3e50]">Bronny James</strong> added you to the folder <b>Web App Designs 2019</b>
                    <div className="text-[0.8rem] text-[#777] my-[4px] mb-[6px]">Today at 12:28 PM</div>
                    
                  </div>
                </div>

                <div className="flex items-start my-[12px] pb-[12px] border-b border-b-[#f0f0f0] new">
                  <img className="w-[40px] h-[40px] rounded-full flex-shrink-0 mr-[12px]" src="ra_2022-06-19_22-17-45.jpg" alt="User" />
                  <div className="flex-1 text-[0.9rem] text-[#333]">
                    <strong className="text-[#2c3e50]">Bronny James</strong> invited you to the folder <b>EMEA Major Deal Close Plans</b>
                    <div className="text-[0.8rem] text-[#777] my-[4px] mb-[6px]">Yesterday at 5:15 PM</div>
                  
                  </div>
                </div>

                <div className="flex items-start my-[12px] pb-[12px] border-b border-b-[#f0f0f0] border-b-0">
                  <div className="w-[40px] h-[40px] rounded-full flex-shrink-0 mr-[12px] bg-[#2c3e50] text-white text-[0.9rem] flex justify-center items-center font-bold">AS</div>
                  <div className="flex-1 text-[0.9rem] text-[#333]">
                    <strong className="text-[#2c3e50]">Bronny James</strong> added you to <b>Enterprise Corporation Contracts.pdf</b>
                    <div className="text-[0.8rem] text-[#777] my-[4px] mb-[6px]">Sep 20 at 3:13 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="contentArea">
            <div className="grid grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
              <div className="bg-[#d1d8e0] rounded-[12px] min-h-[300px] flex justify-center items-center text-[#7f8c8d] text-[1.2rem] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] bg-[url('ra_2022-06-19_22-17-45.jpg')] bg-center bg-cover bg-no-repeat"></div>
              <div className="bg-[url('ra_2022-06-19_22-17-45.jpg')] bg-center bg-cover bg-no-repeat"></div>
            </div>

            <div className="col-span-2 bg-white p-[25px] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              <h2 className="mt-0 text-[1.5rem] text-[#2c3e50] border-b-[2px] border-b-[#ecf0f1] pb-[10px] flex justify-between items-center">
                    Schedules
                  <i className="fas fa-calendar-alt"></i>
              </h2>
              <div className="grid grid-cols-[2fr_1fr] gap-[30px] mt-[20px]">
                <div className="bg-[#f8f9fa] rounded-[10px] p-[20px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)]">
                  <h3 className="mb-[15px] text-[1.1rem] text-[#7f8c8d] uppercase">SCHOOL EVENTS</h3>
                  <ul className="list-none p-0 m-0">
                    <li className="flex items-center py-[15px] border-b border-b-[#eef2f5] transition-all duration-200 ease-in-out"><i className="fas fa-users-cog mr-[20px] text-[1.4rem] text-[#3498db]"></i><span className="text-base font-medium">PARENT ORIENTATION:</span></li>
                    <i className="fas fa-users-cog mr-[20px] text-[1.4rem] text-[#3498db]"></i><span>PARENT ORIENTATION:</span></li>
                                                <i className="fas fa-building mr-[20px] text-[1.4rem] text-[#3498db]"></i><span>FOUNDATION DAY:</span></li>
                    <i className="fas fa-gifts mr-[20px] text-[1.4rem] text-[#3498db]"></i><span>CHRISTMAS PROGRAM:</span></li>
                    <li className="flex items-center py-[15px] border-b border-b-[#eef2f5] transition-all duration-200 ease-in-out border-b-0"><i className="fas fa-award"></i><span>GRADUATION DAY:</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* end contentArea */}

        </div>

      </div>
      {/* The script.js script would be handled by React's build process or public/index.html */}
      {/* <script src="script.js"></script> */}
    </div>
  );
};

export default DashboardPage;
