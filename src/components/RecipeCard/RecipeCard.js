import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardImg,
  Col,
} from "reactstrap";

function RecipeCard(props) {
  return (
    <Col md="4" className="p-3">
      <Card className="text-center">
        <CardImg
          src="https://www.sidechef.com/article/3baf5e87-fa83-4730-a087-ab08fe2554e1.jpg?d=1200x560"
          alt="..."
          className="img-fluid"
          style={{
            borderRadius: 0,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <CardBody>
          <div className="info">
            <h4 style={{ color: "deeppink" }} className="info-title">
              {props.title}
            </h4>
            <p>
              <small
                className="text-muted"
                style={{ textTransform: "uppercase" }}
              >
                {props.category}
              </small>
            </p>
            <p>{props.description.substring(0, 50)}...</p>
          </div>

          <CardLink href="/#/" style={{ textDecoration: "none" }}>
            Read more
          </CardLink>
          <CardLink href="/#/" style={{ textDecoration: "none" }}>
            {props.user}
          </CardLink>
        </CardBody>
      </Card>
    </Col>
  );
}

export default RecipeCard;
