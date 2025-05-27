import { useRef } from "react";
import { Button, Divider, Space } from "antd";
import TinyEditor from "../../components/TinyEditor";

export function BlogContent({
  initialValue = "",
  onFinish,
  okText = "تایید",
  cancelText = "انصراف",
  onCancel,
}) {
  const editorRef = useRef();

  return (
    <Space direction="vertical" className="w-full">
      <Space direction="horizontal">
        {onCancel && (
          <Button onClick={onCancel} type="default" shape="round">
            {cancelText}
          </Button>
        )}
        <Button
          type="primary"
          shape="round"
          onClick={() => onFinish(editorRef.current?.getContent())}
        >
          {okText}
        </Button>
      </Space>

      <Divider />
      <TinyEditor initialValue={initialValue} ref={editorRef} />
    </Space>
  );
}
/*
function rend(data) {
  return data.blocks?.map(r);
}

const api = {
  styles: {},
  i18n: {
    t: (a) => a,
  },
};

function r(block) {
  switch (block.type) {
    case "header": {
      const __html = new Header({
        data: block.data,
        readOnly: true,
        api,
        config: {},
      }).getTag().outerHTML;
      return <div dangerouslySetInnerHTML={{ __html }} />;
    }
    case "paragraph": {
      const __html = new Paragraph({
        data: block.data,
        readOnly: true,
        api,
        config: {},
      })._element.outerHTML;

      console.log(__html);
      return <div dangerouslySetInnerHTML={{ __html }} />;
    }

    case "soundcloud": {
      const player = new URL("https://w.soundcloud.com/player/");
      player.searchParams.append("auto_play", "false");
      player.searchParams.append("hide_related", "false");
      player.searchParams.append("show_comments", "false");
      player.searchParams.append("show_user", "false");
      player.searchParams.append("show_reposts", "false");
      player.searchParams.append("show_teaser", "false");
      player.searchParams.append("visual", "true");
      player.searchParams.append("url", block.data.url);

      return (
        <iframe
          src={player.toString()}
          title="soundcloud"
          style={{
            border: "none",
            width: "100%",
            borderRadius: 8,
          }}
        />
      );
    }
    default:
      return <>{JSON.stringify(block.data)}</>;
  }
}
*/
