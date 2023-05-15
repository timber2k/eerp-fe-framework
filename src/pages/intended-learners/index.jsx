import { Button, Layout, Menu, Space, Tag } from "antd";
import {
  AiFillSetting,
  AiOutlineArrowLeft,
  AiOutlinePlus,
  AiOutlineCheckSquare,
} from "react-icons/ai";

const { Header, Content } = Layout;

const IntendedLearners = () => {
  return (
    <Layout>
      <Header className="relative z-10 px-4">
        <Menu mode="horizontal" theme="dark" className="w-full font-semibold">
          <Menu.Item key="1" icon={<AiOutlineArrowLeft />}>
            Back to Courses
          </Menu.Item>
          <Menu.Item key="2">Course Name</Menu.Item>
          <Menu.Item key="3">
            <span className="p-1 m-1 font-bold text-black rounded-sm bg-slate-400">
              Draft
            </span>
          </Menu.Item>
          <Menu.Item key="4" style={{ marginLeft: "auto" }}>
            <Button
              className="font-semibold uppercase"
              type="primary"
              shape="default"
            >
              Save
            </Button>
          </Menu.Item>
          <Menu.Item key="5">
            <AiFillSetting className="h-full my-auto text-2xl text-white" />
          </Menu.Item>
        </Menu>
      </Header>
      <Layout className="absolute flex flex-row w-full h-full pt-20 ">
        <Layout className="w-[80%] mx-4">
          <Content className="h-full mb-4 border border-black rounded bg-slate-200">
            <div className="w-full h-12 border-b border-black rounded-t">
              <h2 className="ml-4 text-4xl font-bold">Intended Learners</h2>
            </div>
            <div className="w-full h-[calc(100%-3rem)] px-12 py-20 bg-yellow-100 border border-black rounded-b">
              <div className="mb-8">
                <p className="text-base">
                  The following descriptions will be publicly visible on your
                  Course Landing Page and will have a direct impact on your
                  course performance. These descriptions will help learners
                  decide if your course is right for them.
                </p>
              </div>
              <div className="mb-8">
                <span className="text-xl font-bold">
                  What will students learn in your course?
                </span>
                <p className="text-base">
                  You must enter at least 4 learning objectives or outcomes that
                  learners can expect to achieve after completing your course.
                </p>
                <form className="flex flex-col w-full gap-2 mt-4">
                  <input className="max-w-[400px]" type="text" />
                  <input className="max-w-[400px]" type="text" />
                  <input className="max-w-[400px]" type="text" />
                  <a className="flex items-center text-base text-blue-600">
                    <AiOutlinePlus className="mr-1" /> Add more to your
                    responses
                  </a>
                </form>
              </div>
              <div className="mb-8">
                <span className="text-xl font-bold">
                  What are the requirements or prerequisites for taking your
                  course?
                </span>
                <p className="text-base">
                  List the required skills, experience, tools or equipment
                  learners should have prior to taking your course.If there are
                  no requirements, use this space as an opportunity to lower the
                  barrier for beginners.
                </p>
                <form className="flex flex-col w-full gap-2 mt-4">
                  <input className="max-w-[400px]" type="text" />
                  <a className="flex items-center text-base text-blue-600">
                    <AiOutlinePlus className="mr-1" /> Add more to your
                    responses
                  </a>
                </form>
              </div>
              <div className="">
                <span className="text-xl font-bold">
                  Who is this course for?
                </span>
                <p className="text-base">
                  Write a clear description of the intended learners for your
                  course who will find your course content valuable.This will
                  help you attract the right learners to your course.
                </p>
                <form className="flex flex-col w-full gap-2 mt-4">
                  <input className="max-w-[400px]" type="text" />
                  <a className="flex items-center text-base text-blue-600">
                    <AiOutlinePlus className="mr-1" /> Add more to your
                    responses
                  </a>
                </form>
              </div>
            </div>
          </Content>
        </Layout>
        <div className="flex flex-col w-[20%] h-full pb-4 mr-4 bg-transparent rounded">
          <div className="flex flex-col justify-between w-full h-full bg-slate-100">
            <div className="p-4 w-full h-[30%] rounded border border-black bg-slate-200">
              <Space>
                <Tag color="orange">Overview</Tag>
              </Space>
              <div className="w-full h-[85%] mt-4 bg-yellow-50 flex rounded flex-col justify-center gap-5">
                <div className="flex items-center">
                  <AiOutlineCheckSquare className="mr-1 text-5xl" />
                  <span className="text-2xl">Intended learners</span>
                </div>
                <div className="flex items-center">
                  <AiOutlineCheckSquare className="mr-1 text-5xl" />
                  <span className="text-2xl">Intended learners</span>
                </div>
                <div className="flex items-center">
                  <AiOutlineCheckSquare className="mr-1 text-5xl" />
                  <span className="text-2xl">Intended learners</span>
                </div>
              </div>
            </div>
            <div className="p-4 w-full h-[25%] rounded border border-black">
              <Space>
                <Tag color="orange">Create your content</Tag>
              </Space>
              <div className="w-full h-[75%] mt-4 bg-yellow-50 rounded flex flex-col justify-start gap-5">
                <div className="flex items-center">
                  <AiOutlineCheckSquare className="mr-1 text-5xl" />
                  <span className="text-2xl">Curriculum</span>
                </div>
              </div>
            </div>
            <div className="p-4 w-full h-[25%] rounded border border-black">
              <Space>
                <Tag color="orange">Tips & Tutorials</Tag>
              </Space>
              <div className="w-full h-[75%] py-2 bg-yellow-50 rounded mt-4"></div>
            </div>
            <button className="w-full text-3xl font-medium text-white bg-indigo-600 border border-indigo-600 rounded  h-[15%] hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
              Submit For Review
            </button>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default IntendedLearners;
