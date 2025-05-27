import { Button, Form, Input } from "antd";
import MainLayout from "../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, updateCategory } from "../../actions/category/categoryActions";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditCategory = () => {

  // const editorRef = useRef(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const category = useSelector(state => state.categories.categories.find(category => category.key == id))
  const [form] = Form.useForm();
  console.log(category)

  useEffect(() => {
    // editorRef.current.setContent(blog.content)
    form.setFieldsValue(category)
    console.log("Second")
  }, [category, form, id])
  // const imageLocation = useSelector(state => state.upload.location);
  // const categories = useSelector(state => state.categories.select)

  // console.log(categories)
  const onFinish = async values => {
    try {
      values.thumbnailImageFileName = "string";
      values.imageFileName = "string";
      values.icon = "string";
      values.type = "Blog";
      values.parentKey = 0;
      values.key = id;
      console.log('Success:', values);
      const data = { category: values };
      console.log(data);
      await dispatch(updateCategory(data));
      navigate("/categories")
    } catch (error) {
      console.log(error.message)
    }

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <MainLayout>
      <div className='bg-white p-3 rounded-2xl shadow-lg'>
        <h1 className='font-medium text-xl'>ویرایش دسته بندی</h1>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={category}
          className='mt-5'
          layout="vertical"
          autoComplete="off"

        >
          <div className='grid grid-cols-1 md:grid-cols-2  gap-x-5'>
            <Form.Item
              name="title"
              label="عنوان"
              rules={[
                {
                  required: true,
                  message: "وارد کردن عنوان ضروری است",
                },
              ]}
            >
              <Input placeholder="عنوان دسته بندی" />
            </Form.Item>
            <Form.Item
              name="descriptions"
              label="توضیحات"
              rules={[
                {
                  required: true,
                  message: "وارد کردن توضیحات ضروری است",
                },
              ]}
            >
              <Input placeholder="توضیحات دسته بندی" />
            </Form.Item>
          </div>
          <Form.Item >
            <Button className="ml-3" type="primary" htmlType="submit">
              ویرایش
            </Button>
            <Button type="default" htmlType="button"
              onClick={() => navigate("/categories")}
            >
              بازگشت
            </Button>
          </Form.Item>
        </Form>
      </div >
    </MainLayout >
  );
};

export default EditCategory;