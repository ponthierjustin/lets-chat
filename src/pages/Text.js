import React from 'react';
import API from "../utils/API";

const Text = () => {
    const [texts, setText] = useState([]);
    const [newText, setNewText] = useState("");
  
    useEffect(() => {
      getTextData();
    }, []);
  
    const getTextData = () => {
      API.getText()
        .then((res) => {
          setText(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => console.log(err));
    };
  
    const handleChange = ({ target: { value } }) => {
      setNewText(value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const textObj = { text: newText };
  
      API.addText(textObj)
        .then((response) => {
          console.log(response.data.data);
          getTextData();
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
        <Row>
          <Col span={24}>Explain your day in one word</Col>
        </Row>
        <Row>
          <Col span={12}>
            {" "}
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange}></input>
              <button type="submit">Submit</button>
            </form>
          </Col>
          <Col span={12}>col-12</Col>
        </Row>
  {/*       <Row>
          <Col span={8}>
            {" "}
            {texts.map((text) => (
              <ul key={text._id}>
                <li>{text.text}</li>
                <li>{text.rating}</li>
              </ul>
            ))}
          </Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row> */}
      </>
    );
  }

export default Text;