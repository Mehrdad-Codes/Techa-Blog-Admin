import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function PublishResult({ url }) {
  return (
    <Result
      status="success"
      title="مقاله با موفقیت منتشر شد"
      subTitle=""
      extra={[
        <Link to={url}>
          <Button type="primary" key="console">
            مشاهده در وبسایت
          </Button>
        </Link>,

        <Link to="/blogs">
          <Button key="buy">لیست مقالات</Button>,
        </Link>,
      ]}
    />
  );
}
