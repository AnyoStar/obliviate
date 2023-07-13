import { Card } from "react-bootstrap";

const PostCard = ({title, content}) => {
  
  return (
    <div style={{ display: "inline-block"}}>
      <Card style={{ width: 1000, height: 250, margin: 30}}>
        <Card.Title>
        <span>{title}</span>
        </Card.Title>
        <hr/>
        <Card.Text>
          <span>{content}</span>
        </Card.Text>
      </Card>
    </div>
  );
};

export default PostCard;
