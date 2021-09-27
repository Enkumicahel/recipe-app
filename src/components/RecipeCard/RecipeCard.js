import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardImg,
} from "reactstrap";

function RecipeCard(props) {
  return (
    <div>
      <Card style={{ marginTop: 140, width: "20rem" }} className="text-center">
        <CardImg
          top
          src="https://www.sidechef.com/recipe/9064ecc1-83c2-4030-8f4f-278bfabd2bbf.jpeg"
          alt="..."
          style={{ alignSelf: "center", width: 240, hieght: 20 }}
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            {props.category}
          </CardSubtitle>
          <CardText>{props.description}</CardText>
          <CardLink href="/#/">Card link</CardLink>
          <CardLink href="/#/">Another link</CardLink>
        </CardBody>
      </Card>
      ;
    </div>
  );
}

export default RecipeCard;
