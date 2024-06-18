import React, { useState } from 'react';
import { Dropdown, Menu, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#1">Settings</a>
    </Menu.Item>
    {/* <Menu.Item key="1">
      <a href="#2">Log out</a>
    </Menu.Item> */}
  </Menu>
);

const ChatBot = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Row className="bg-[#fff] min-h-screen flex">
      <Col
        className={`bg-[#f9f9f9] p-2 flex flex-col ${
          isSidebarOpen ? '' : 'hidden'
        }`}
        xxl={4}
        xl={4}
        lg={4}
        md={4}
        sm={4}
        xs={4}
      >
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center w-fit">
            <div className="rounded-[50%] border-[1px] flex items-center justify-center w-fit bg-white border-[#ecedeb]">
              <img src='/assets/logo.jpg' alt='img' className='w-[40px] h-[40px] rounded-[50%]'/> 
            </div>
            <span className="font-semibold pl-2 text-md">New chat</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="icon-xl-heavy"
            color="#000"
            className="cursor-pointer"
          >
            <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
          </svg>
        </div>
        <div className="mt-auto flex flex-col">
          <h1 className="font-semibold">Sign up or log in</h1>
          <div className="text-[#a8afc3] mb-3">
            get smarter responses, upload files and images and more.
          </div>
          <button className="bg-[#10a37f] text-white rounded-lg font-semibold py-2 text-sm mb-2">
            Sign Up
          </button>
          <button className="bg-white text-black rounded-lg font-semibold py-2 text-sm border-[1px] border-[#e0e0e0]">
            Log In
          </button>
        </div>
      </Col>
      <Col
        className="flex flex-col relative"
        xxl={isSidebarOpen ? 20 : 24}
        xl={isSidebarOpen ? 20 : 24}
        lg={isSidebarOpen ? 20 : 24}
        md={isSidebarOpen ? 20 : 24}
        sm={isSidebarOpen ? 20 : 24}
        xs={isSidebarOpen ? 20 : 24}
      >
        {' '}
        <span
          className="w-[5px] !cursor-pointer h-6 bg-[#cccbcd] absolute left-4 top-[50%] rounded-md z-50"
          onClick={toggleSidebar}
        ></span>
        <div className="flex items-center justify-between p-4 pt-2">
          <div className="flex items-center space-x-4">
            <Dropdown overlay={menu} trigger={['click']}>
              <div
                className="ant-dropdown-link text-[#080031] items-center cursor-pointer"
                onClick={(e) => e.preventDefault()}
              >
                <span className="font-semibold text-lg"> JHASON4O</span>{' '}
                <DownOutlined className="w-3 h-3 ml-1" />
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="h-[90vh] flex flex-col justify- items-center">
          <div className="text-center flex-grow mt-6 flex items-center justify-center   flex-col">
            <div className="rounded-[50%] border-[2px] w-fit flex items-center justify-center border-[#ecedeb]">
            <img src='/assets/logo.jpg' alt='img' className='w-[120px] h-[120px] rounded-[50%]'/>
            </div>
            <h1 className="font-semibold text-2xl pt-2">
              How can I help you today?
            </h1>
          </div>
          <div className="">
            <div className="columns-2 gap-2 px-5">
              <div className="mb-2 border-[1px] border-[#dfdfdf] rounded-xl flex flex-col  pt-2 px-3 pb-3  cursor-pointer break-inside-avoid">
                <h1 className="font-semibold">Create a workout plan</h1>
                <div className="text-[#b0b2af]">for resistance training</div>
              </div>
              <div className="mb-2 border-[1px] border-[#dfdfdf] rounded-xl flex flex-col  pt-2 px-3 pb-3  cursor-pointer break-inside-avoid">
                <h1 className="font-semibold">Explain nostaligia</h1>
                <div className="text-[#b0b2af]">to a kidergartener</div>
              </div>
              <div className="mb-2 border-[1px] border-[#dfdfdf] rounded-xl flex flex-col  pt-2 px-3 pb-3  cursor-pointer break-inside-avoid">
                <h1 className="font-semibold">Suggest fun activties</h1>
                <div className="text-[#b0b2af]">
                  to help me make friends in new city
                </div>
              </div>
              <div className="mb-2 border-[1px] border-[#dfdfdf] rounded-xl flex flex-col  pt-2 px-3 pb-3  cursor-pointer break-inside-avoid">
                <h1 className="font-semibold">Make me a proposal webpage</h1>
                <div className="text-[#b0b2af]">
                  after asking me three question
                </div>
              </div>
            </div>
            <div className="text-center flex items-center justify-center flex-col">
              <div className="w-full min-w-[53vw] relative flex">
                <input
                  className="w-full p-4 rounded-2xl  border-[1px] border-[#dfdfdf] outline-none"
                  placeholder="Message JHASON4O"
                  type="text"
                  name="text"
                  id=""
                />

                <button className="absolute top-3 right-2  w-fit">
                  <div className="bg-[#e7e6e7] rounded-lg w-9 h-9 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="none"
                      viewBox="0 0 32 32"
                      class="icon-3xl"
                      color="white"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="py-2 pr-10 text-[#a8afc3] text-sm">
                By messaging JHASON4O, you agree to our{' '}
                <a
                  className="underline text-black"
                  href="/"
                >
                  Terms
                </a>{' '}
                and have read our{' '}
                <a
                  className="underline text-black"
                  href="/"
                >
                  {' '}
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ChatBot;
