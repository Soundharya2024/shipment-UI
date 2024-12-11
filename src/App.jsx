import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  DatePicker,
  Flex,
} from "antd";

const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <div className="rounded border border-solid border-gray-300 md:m-5 m-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 justify-items-center">
          <Form.Item
            label="Service Locations"
            name="Service_Locations"
            className="w-[300px]"
            rules={[{ required: true }]}
          >
            <Select />
          </Form.Item>
          <Form.Item
            label="Customer"
            name="Customer"
            className="w-[300px]"
            rules={[{ required: true }]}
          >
            <Select />
          </Form.Item>
          <Form.Item
            label="Commodity"
            name="Commodity"
            className="w-[300px]"
            rules={[{ required: true }]}
          >
            <Select />
          </Form.Item>
          <Form.Item
            label="Origin"
            name="Origin"
            className="w-[300px]"
            rules={[{ required: true }]}
          >
            <Select />
          </Form.Item>
          <Form.Item
            label="Destinations"
            name="Destinations"
            className="w-[300px]"
            rules={[{ required: true, message: "Please select destinations!" }]}
          >
            <Select />
          </Form.Item>
          <Form.Item
            label="Rate Per MT"
            name="Rate_Per_MT"
            className="w-[300px]"
            rules={[{ required: true }]}
          >
            <InputNumber className="w-[300px]" />
          </Form.Item>
          <Form.Item
            label="Rate Confirmation"
            name="Rate_Confirmation"
            className="w-[300px]"
            rules={[{ required: true }]}
          >
            <Input addonBefore="https://" />
          </Form.Item>
          <Form.Item
            label="Maximum Load"
            name="Maximum_Load"
            className="w-[300px]"
            rules={[{ required: true, message: "Please input maximum load!" }]}
          >
            <Input placeholder="-Select-" />
          </Form.Item>
          <Form.Item
            label="Loader"
            name="Loader"
            className="w-[300px]"
            rules={[{ required: true, message: "Please input loader!" }]}
          >
            <Input placeholder="-Select-" />
          </Form.Item>
          <Form.Item
            label="Vendor Bill"
            name="Vendor_Bill"
            className="w-[300px]"
            rules={[{ required: true, message: "Please input vendor bill!" }]}
          >
            <Input placeholder="#,###,###.##" />
          </Form.Item>
          <Form.Item
            label="Select Book"
            name="Select_Book"
            className="w-[300px]"
            rules={[{ required: true, message: "Please select book!" }]}
          >
            <Select />
          </Form.Item>
          <Form.Item
            label="Commencement"
            name="Commencement"
            className="w-[300px]"
          >
            <DatePicker
              format="DD-MMM-YYYY"
              placeholder="DD-MMM-YYYY"
              className="w-[300px]"
            />
          </Form.Item>
          <Form.Item label="Trucks" name="Trucks" className="w-[300px]">
            <Input placeholder="#######.##" />
          </Form.Item>
          <Form.Item label="Completion" name="Completion" className="w-[300px]">
            <DatePicker
              format="DD-MMM-YYYY"
              placeholder="DD-MMM-YYYY"
              className="w-[300px]"
            />
          </Form.Item>
          <Form.Item label="Capacity" name="Capacity" className="w-[300px]">
            <Input placeholder="#######.##" />
          </Form.Item>
          <Form.Item
            label="Maximum Fuel"
            name="Maximum_Fuel"
            className="w-[300px]"
          >
            <Select />
          </Form.Item>
          <Form.Item
            label="Maximum Dispatch"
            name="Maximum_Dispatch"
            className="w-[300px]"
          >
            <Select />
          </Form.Item>
        </div>
        <Flex justify="center" className="mb-5" gap="large">
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item label={null}>
            <Button>Reset</Button>
          </Form.Item>
        </Flex>
      </div>
    </Form>
  );
};

export default App;
