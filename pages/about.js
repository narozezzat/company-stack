import { Button} from 'antd';
import Head from "next/head";
import { ArrowLeftOutlined }  from '@ant-design/icons';




export default function About() {
    return (
      <>
        <Head>
          <title>About Me</title>
        </Head>
        <p>About Compoenent</p>
        <Button type="primary">Primary Button</Button><br/>
        <ArrowLeftOutlined />

      </>
    )
  }


  