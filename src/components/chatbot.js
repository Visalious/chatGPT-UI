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
            <div className="rounded-[50%] border-[2px] w-fit bg-white border-[#ecedeb] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#131313"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M30.7,7.27l-2.37,1.83c-1.605,-2.067 -4.068,-3.209 -6.697,-3.092c-4.32,0.192 -7.633,3.945 -7.633,8.269v9.143l10.5,6.12l-1,1.72l-11.706,-6.827c-0.492,-0.287 -0.794,-0.813 -0.794,-1.382v-8.687c0,-6.264 5.129,-11.574 11.39,-11.357c3.279,0.113 6.29,1.656 8.31,4.263z"></path>
                    <path d="M12.861,9.833l0.4,2.967c-2.592,0.357 -4.813,1.919 -6.026,4.254c-1.994,3.837 -0.4,8.582 3.345,10.745l7.918,4.571l10.55,-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282 -1.101,0.281 -1.594,-0.003l-7.523,-4.343c-5.426,-3.133 -7.46,-10.23 -4.142,-15.543c1.738,-2.784 4.58,-4.619 7.847,-5.065z"></path>
                    <path d="M6.161,26.563l2.77,1.137c-0.987,2.423 -0.745,5.128 0.671,7.346c2.326,3.645 7.233,4.638 10.977,2.476l7.918,-4.572l0.05,-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569 -0.307,1.094 -0.8,1.379l-7.523,4.343c-5.425,3.132 -12.588,1.345 -15.531,-4.185c-1.541,-2.897 -1.71,-6.275 -0.463,-9.328z"></path>
                    <path d="M17.3,40.73l2.37,-1.83c1.605,2.067 4.068,3.209 6.697,3.092c4.32,-0.192 7.633,-3.945 7.633,-8.269v-9.143l-10.5,-6.12l1,-1.72l11.706,6.827c0.492,0.287 0.794,0.813 0.794,1.382v8.687c0,6.264 -5.13,11.574 -11.39,11.358c-3.279,-0.114 -6.29,-1.657 -8.31,-4.264z"></path>
                    <path d="M35.139,38.167l-0.4,-2.967c2.592,-0.357 4.813,-1.919 6.026,-4.254c1.994,-3.837 0.4,-8.582 -3.345,-10.745l-7.918,-4.571l-10.55,6.033l-0.99,-1.726l11.765,-6.724c0.494,-0.282 1.101,-0.281 1.594,0.003l7.523,4.343c5.425,3.132 7.459,10.229 4.141,15.543c-1.737,2.784 -4.579,4.619 -7.846,5.065z"></path>
                    <path d="M41.839,21.437l-2.77,-1.137c0.987,-2.423 0.745,-5.128 -0.671,-7.346c-2.326,-3.645 -7.233,-4.638 -10.977,-2.476l-7.918,4.572l-0.05,12.153l-1.99,-0.006l0.059,-13.551c0.002,-0.569 0.307,-1.094 0.8,-1.379l7.523,-4.343c5.425,-3.132 12.588,-1.345 15.531,4.185c1.541,2.897 1.71,6.275 0.463,9.328z"></path>
                  </g>
                </g>
              </svg>
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
                <span className="font-semibold text-lg"> ChatGPT</span>{' '}
                <DownOutlined className="w-3 h-3 ml-1" />
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="h-[90vh] flex flex-col justify- items-center">
          <div className="text-center flex-grow mt-6 flex items-center justify-center   flex-col">
            <div className="rounded-[50%] border-[2px] w-fit border-[#ecedeb] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#131313"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M30.7,7.27l-2.37,1.83c-1.605,-2.067 -4.068,-3.209 -6.697,-3.092c-4.32,0.192 -7.633,3.945 -7.633,8.269v9.143l10.5,6.12l-1,1.72l-11.706,-6.827c-0.492,-0.287 -0.794,-0.813 -0.794,-1.382v-8.687c0,-6.264 5.129,-11.574 11.39,-11.357c3.279,0.113 6.29,1.656 8.31,4.263z"></path>
                    <path d="M12.861,9.833l0.4,2.967c-2.592,0.357 -4.813,1.919 -6.026,4.254c-1.994,3.837 -0.4,8.582 3.345,10.745l7.918,4.571l10.55,-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282 -1.101,0.281 -1.594,-0.003l-7.523,-4.343c-5.426,-3.133 -7.46,-10.23 -4.142,-15.543c1.738,-2.784 4.58,-4.619 7.847,-5.065z"></path>
                    <path d="M6.161,26.563l2.77,1.137c-0.987,2.423 -0.745,5.128 0.671,7.346c2.326,3.645 7.233,4.638 10.977,2.476l7.918,-4.572l0.05,-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569 -0.307,1.094 -0.8,1.379l-7.523,4.343c-5.425,3.132 -12.588,1.345 -15.531,-4.185c-1.541,-2.897 -1.71,-6.275 -0.463,-9.328z"></path>
                    <path d="M17.3,40.73l2.37,-1.83c1.605,2.067 4.068,3.209 6.697,3.092c4.32,-0.192 7.633,-3.945 7.633,-8.269v-9.143l-10.5,-6.12l1,-1.72l11.706,6.827c0.492,0.287 0.794,0.813 0.794,1.382v8.687c0,6.264 -5.13,11.574 -11.39,11.358c-3.279,-0.114 -6.29,-1.657 -8.31,-4.264z"></path>
                    <path d="M35.139,38.167l-0.4,-2.967c2.592,-0.357 4.813,-1.919 6.026,-4.254c1.994,-3.837 0.4,-8.582 -3.345,-10.745l-7.918,-4.571l-10.55,6.033l-0.99,-1.726l11.765,-6.724c0.494,-0.282 1.101,-0.281 1.594,0.003l7.523,4.343c5.425,3.132 7.459,10.229 4.141,15.543c-1.737,2.784 -4.579,4.619 -7.846,5.065z"></path>
                    <path d="M41.839,21.437l-2.77,-1.137c0.987,-2.423 0.745,-5.128 -0.671,-7.346c-2.326,-3.645 -7.233,-4.638 -10.977,-2.476l-7.918,4.572l-0.05,12.153l-1.99,-0.006l0.059,-13.551c0.002,-0.569 0.307,-1.094 0.8,-1.379l7.523,-4.343c5.425,-3.132 12.588,-1.345 15.531,4.185c1.541,2.897 1.71,6.275 0.463,9.328z"></path>
                  </g>
                </g>
              </svg>
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
                  placeholder="Message ChatGPT"
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
                By messaging ChatGPT, you agree to our{' '}
                <a
                  className="underline text-black"
                  href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
                >
                  Terms
                </a>{' '}
                and have read our{' '}
                <a
                  className="underline text-black"
                  href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
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
