import {
  Button,
  Form,
  Input,
  InputNumber,
  Col,
  Row,
  Divider,
  Select,
  Space,
} from "antd";
import Uploader from "../../components/Uploader";

export default function BlogDetails({
  initialValues = {
    timeToRead: 5,
  },
  onFinish,
  okText = "تایید",
  cancelText = "انصراف",
  onCancel,
}) {
  return (
    <Form
      layout="vertical"
      className="w-full"
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <Space direction="horizontal">
        {onCancel && (
          <Button onClick={onCancel} shape="round" type="default">
            {cancelText}
          </Button>
        )}
        <Button htmlType="submit" shape="round" type="primary">
          {okText}
        </Button>
      </Space>
      <Divider />

      <Row gutter={64}>
        <Col span={8}>
          <Form.Item name="title" label="عنوان" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="preTitle"
            label="pretitle"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name="subTitle"
            label="subtitle"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="mainImageName"
            label="تصویر اصلی"
            rules={[{ required: true }]}
          >
            <Uploader />
          </Form.Item>
          <Row gutter={24}>
            <Col span={16}>
              <Form.Item
                name="ageRanges"
                label="رده سنی"
                rules={[{ required: true }]}
              >
                {/*<Slider
              range
              max={6}
              step={null}
              marks={{
                0: "۰",
                1: "۳",
                2: "۱۰",
                3: "۱۸",
                4: "۳۰",
                5: "۵۰",
                6: "۸۰",
              }}
              included
              tooltip={{
                formatter: (value) =>
                  ["خردسال", "کودک", "نوجوان", "جوان", "بزرگسال", "مسن", "پیر"][
                    value
                  ],
              }}
            />*/}
                <Select
                  mode="multiple"
                  options={[
                    { label: "خردسال", value: 0 },
                    { label: "کودک", value: 1 },
                    { label: "نوجوان", value: 2 },
                    { label: "جوان", value: 3 },
                    { label: "بزرگسال", value: 4 },
                    { label: "مسن", value: 5 },
                    { label: "پیر", value: 6 },
                  ]}
                ></Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="timeToRead"
                label="زمان مطالعه"
                rules={[{ required: true }]}
              >
                <InputNumber min={0} addonAfter="دقیقه" className="w-32" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <Form.Item
            name="summary"
            label="خلاصه مقاله"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              showCount
              maxLength={600}
              style={{ height: 340 }}
              placeholder=""
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
